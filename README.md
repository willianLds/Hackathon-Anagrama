# Anagrama

Projeto para o Hackathon de Carreiras - Edição TI 2019

## Iniciando o projeto

Para testar o projeto será necessário ter o [NodeJS](https://nodejs.org/)

Logo após instalá-lo abra o cmd, vá até a pasta raiz do projeto pelo cmd e digite o seguinte comando:

`node main/Anagrama.js
```

## Desafio - Anagrama

Um anagrama é uma palavra ou frase formada com o re-arranjo de todas as letras de uma outra palavra ou frase (sem sobra ou falta). Exemplos:

 - A palavra barco é um anagrama da palavra cobra (todas as letras de “cobra” usadas em “barco).
 - A palavra mar não é um anagrama da palavra roma (a letra “o” em “roma” não foi usada).
 - A palavra sal não é um anagrama da palavra mal (a letra “s” de “sal” não existe em “mal”).

### Objetivo

Escreva um programa na sua linguagem e bibliotecas preferidas que:

 1. Leia a expressão (que pode ser uma frase ou apenas uma palavra) a ser usada para a criação dos anagramas da linha de comando. Apenas as letras de “A” a “Z” deverão ser consideradas (ignore espaços e converta todas as letras minúsculas para maíusculas). Retorne erro e aborte a execução se caracteres inválidos forem encontrados na expressão (qualquer caracter não alfabético que não seja espaço, incluindo números, pontuação, ou caracteres acentuados).

 2. Leia uma lista de palavras válidas do arquivo `palavras.txt` ([Download](https://hack-ti.paniclobster.com/static/media/palavras.82eebac6.txt)). O arquivo é formatado com uma palavra por linha, com palavras da língua inglesa (Nota: apesar de várias tentativas, o autor não conseguiu achar uma lista “limpa” de palavras da língua portuguesa).

 3. Imprima todas as combinações possíveis de anagramas (sem repetição de linhas ou palavras). Os anagramas devem conter apenas palavras válidas (lidas do arquivo acima).

 4. O formato de saída deve conter múltiplas linhas (uma por anagrama), com as palavras ordenadas dentro de cada linha (veja exemplo abaixo).

```
$ ./anagrama "vermelho"
ELM HO REV
ELM OH REV
OHM REVEL
LEVER OHM
ELM HOVER
HOLM VEER
HELM OVER
HELM ROVE
```

 5. O programa deve ser capaz de calcular e imprimir a lista de anagramas possíveis para uma expressão de até 16 caracteres em menos de 60 segundos.
 
 
