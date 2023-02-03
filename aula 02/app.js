/******************************************************************************
 * Objetivo:  Calcular a média de quatro notas escolares
 * Autora: Yasmin Gonçalves
 * Data: 27/01/2023
 * Versão: 1.0
 ******************************************************************************/

//Import da biblioteca ReadLine
var readLine = require('readline')

//Cria objeto para ser especialista na entrada de dados pelo teclado
var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*
* var - cria um espaço em memória de escopo global para o projeto,
poderá ser utilizada em qualquer parte do arquivo.
* let - cria um espaço em memória de escopo local para o projeto,
somente poderá ser utilizada dentro da função que foi criada.
* const - cria um espaço em memória de escopo local ou global para o projeto,
poderá ser utilizada em qualquer parte do arquivo e nunca sofrerá alteração.
*/

//Função de CallBack para entrar com o nome do aluno
entradaDados.question('Digite seu nome: \n', function(nome){
    //Recebe o valor digitado pelo teclado  
    let nomeAluno = nome

    //Função e CallBack para entrar com a nota 1
    entradaDados.question('Digite a nota 1: \n', function(nota1){
        let valor1 = nota1

        //Função de CallBack para entrar a nota 2
        entradaDados.question('Digite a nota 2: \n', function(nota2){
            let valor2 = nota2

            //Função de CallBack para entrar a nota 3
            entradaDados.question('Digite a nota 3: \n', function(nota3){
                let valor3 = nota3

                //Função de CallBack para entrar a nota 4
                entradaDados.question('Digite a nota 4: \n', function(nota4){
                    let valor4= nota4
                    let media

                    /*
                    Conversão de tipos de dados:
                        parseInt() ou Number.parseInt() - converte uma string em inteiro
                        parseFloat() ou Number.parseFloat() - converte uma string em real

                        Number() - converte um string para número, o JS define se será inteiro
                        ou real.


                    Operadores de comparação
                        == (verifica a igualdade entre conteudos)
                        != (verifica a diferença entre conteúdos)
                        !== (verifica a diferença entre conteúdos e igualdade de tipo de dados)
                        ==! (verifica a igualdade entre conteúdos e diferença de tipo de dados)
                        === (verifica a igualdade entre conteúdos e tipos de dados)
                            Ex:
                            0 === 0   V
                            0 === '0' F
                            0 == '0'  V
                        < (menor)
                        > (maior)
                        <= (menor ou igual)
                        >= (maior ou igual)
                


                    Operadores lógicos
                        E && AND
                        OU || OR
                        NEGAÇÃO ! NOT

                    */

                    //Validação para entrada vazia
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
                        console.log('ERRO: Você deixou de entrar com algum valor.')
                    //Validação para entrada de texto (inválida)
                    } else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                        console.log('ERRO: Você não digitou um número válido.')
                    //Validação para entrada de dados somente entre 0 e 10
                    } else if(valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0 ){
                        console.log('ERRO: Digite um valor válido (entre 0 e 10)')
                    } else{
                        media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4

                        if(media >= 7){
                            console.log('Media: ' + media.toFixed(1) + '\nAluno(a) aprovado.')
                        } else {
                            console.log('Media: ' + media.toFixed(1) + '\nAluno(a) reprovado.')
                        }
                        
                    }
                })
            })
        })
    })
})