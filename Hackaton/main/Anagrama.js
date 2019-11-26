
const fs = require('fs')
const readline = require('readline')

/**CRIANDO CONFIGURAÇÃO DE LEITOR**/ 
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Dada a função 'anagramCheck (texto1, texto2)', retorne true se as duas strings forem anagramas uma da outra, caso contrário, false.
 */
function verificaAnagrama(texto1, texto2) {
    let pArgumento = texto1.toUpperCase().replace(/\s/g, '').split(''),
        sArgumento = texto2.toUpperCase().replace(/\s/g, '').split('');
  
    pArgumento.sort();
    sArgumento.sort();
    /*VERIFICA SE A O PRIMEIRO ARGUMENTO E O SEGUNDO SÃO DIFERENTES OS VALORES E TIPAGEM*/
    if (pArgumento.length !== sArgumento.length){
      return false;
    }
    /*PERCORRE TODOS OS CARACTERES DO PRIMEIRO ARGUMENTO, E EM SEGUIDA, VERIFICA LETRA POR LETRA DOS DOIS ARGUMENTOS, PARA VERIFICAR  
    * SE EXISTE EM AMBOS ARGUMENTOS,CASO SEJA DIFERENTE O VALOR E A TIPAGEM RETORNA FALSE.*/ 
    for (let i = 0; i < pArgumento.length; i++) {
      if (pArgumento[i] !== sArgumento[i]) {
        return false;
      }
    }
    /*CASO ESTEJA OK POR TODAS AS VALIDAÇÕES, RETORNA TRUE */
    return true;
  }

function validaLetras(palavra) {
    /*POSSIBILITAR QUALQUER CATACTER ALFABÉTICO E ESPAÇO*/
    var regexLetras = /^[a-zA-Z\s]+$/g
    /*VALIDAR QUANTIDADE DE CARACTERES, PODENDO SOMENTE 16 CARACTERES*/ 
    if(!(palavra.length >= 16)){
        /*VALIDANDO CARACTERES COM REGEX*/
        if (regexLetras.test(palavra)){
            return true
        }else{
            console.log('Carácter Inválido! Digite somente caracteres alfabéticos, sem caracteres acentuados.')
            return false
        }
    }else{
        console.log('Limite excedido de caracteres! Digite até 16 caracteres.')
        return false
    }
}
/*LEITOR PARA DIGITAR SOBRE O CONSOLE*/
leitor.question("Digite uma palavra ou frase de até 16 caracteres para calcular um anagrama?\n", function(palavra) {
    validaLetras(palavra); 
    const listaAnagramas = []
    const validaAdicionar = true
    fs.readFile('./arquivo/anagrama.txt', 'utf-8', function(err, data){
        if(err){
            throw 'Erro ao ler o arquivo : ' + err; 
        }else{
            /*ATRIBUINDO O RETORNO DO ARQUIVO EM UM OBJETO*/ 
            const linhas = ([] = data.split(/\r?\n/))
            for(var x in linhas){
                /* VERIFICA ANAGRAMA DA PALAVRA DIGITADA, COM CADA LINHA DO MEU OBJETO */
                if(verificaAnagrama(palavra,linhas[x].toString()) == true){
                    if(listaAnagramas.length > 0){
                        for(var i in listaAnagramas){
                            if(linhas[x].toString() ===  listaAnagramas[i]){
                                this.validaAdicionar = false
                            }else{
                                this.validaAdicionar = true
                            }
                        }
                    }
                    if(validaAdicionar == true && (palavra.toUpperCase() != linhas[x].toString())){
                        listaAnagramas.push(linhas[x])
                    }
                }
            }

            if(listaAnagramas.length > 0){
                console.log('Segue abaixo a lista de anagramas calculados\n***Anagrama(s) de ('+ palavra.toUpperCase()+ ') de acordo com a lista fornecida em inglês!***')
                for(var x in listaAnagramas){
                    console.log(listaAnagramas[x].toString())
                }
            }else{
                console.log('Nenhum anagrama encontrado com essa palavra!')
            }
        }
    })   
    leitor.close();
});


