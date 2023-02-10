/************************************************************************************************
 * Objetivo: Exercício para calcular a média dos alunos 
 * Data: 10/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
*************************************************************************************************/

var calculoMedia = require('./modulo/calculoMedia.js')

var readLine = require('readline')

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entradaDados.question('Nome do aluno (a):\n', function (aluno) {
//     let nomeAluno = aluno

//     entradaDados.question('Digite seu sexo (feminino ou masculino):\n', function (sexo1) {
//         let sexoAluno = sexo1


//         entradaDados.question('Nome do (a) professor (a):\n', function (professor) {
//             let nomeProfessor = professor

//             entradaDados.question('Digite o sexo do (a) professor (a) (feminino ou masculino):\n', function (sexo2) {
//                 let sexoProfessor = sexo2

//                 entradaDados.question('Digite o nome do curso:\n', function (curso) {
//                     let nomeCurso = curso

//                     entradaDados.question('Digite a disciplina do curso:\n', function (disciplina) {
//                         let nomeDisciplina = disciplina


//Entrada de notas
entradaDados.question('Digite a primeira nota:\n', function (primeiraNota) {
    let valor1 = primeiraNota

    entradaDados.question('Digite a segunda nota:\n', function (segundaNota) {
        let valor2 = segundaNota

        entradaDados.question('Digite a terceira nota:\n', function (terceiraNota) {
            let valor3 = terceiraNota

            entradaDados.question('Digite a quarta nota:\n', function (quartaNota) {
                let valor4 = quartaNota
                let resultado

                resultado = calculoMedia.calcularMedia(valor1, valor2, valor3, valor4)
                //console.log(resultado)

                if (resultado == true) {
                    entradaDados.question('Digite a nota do exame:\n', function (exame) {
                        let notaExame = exame
                        let exameNecessario
                        exameNecessario = calculoMedia.calcularMediaExame(valor1, valor2, valor3, valor4, notaExame)
                    })
                }
            })
        })
    })
})
//                     })
//                 })
//             })
//         })
//     })
// })


//


