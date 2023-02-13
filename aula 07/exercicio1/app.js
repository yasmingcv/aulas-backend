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

entradaDados.question('Nome do aluno (a):\n', function (aluno) {
    let nomeAluno = aluno

    entradaDados.question('Digite o sexo do (a) aluno (a):\n1 - Feminino\n2 - Masculino:\n', function (sexo1) {
        let sexoAluno = sexo1

        entradaDados.question('Nome do (a) professor (a):\n', function (professor) {
            let nomeProfessor = professor

            entradaDados.question('Digite o sexo do (a) professor (a): \n1 - Feminino\n2 - Masculino:\n', function (sexo2) {
                let sexoProfessor = sexo2

                entradaDados.question('Digite o nome do curso:\n', function (curso) {
                    let nomeCurso = curso

                    entradaDados.question('Digite a disciplina do curso:\n', function (disciplina) {
                        let nomeDisciplina = disciplina

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

                                        let generoAluno = calculoMedia.sexAluno(sexoAluno)
                                        let generoProfessor = calculoMedia.sexProfessor(sexoProfessor)

                                        resultado = calculoMedia.calcularMedia(sexoAluno, valor1, valor2, valor3, valor4)

                                        //exame
                                        if (resultado == 'exame') {
                                            entradaDados.question('\nVocê ficou de exame.\nDigite a nota do exame:\n', function (exame) {
                                                let notaExame = exame
                                                let exameNecessario
                                                exameNecessario = calculoMedia.calcularMediaExame(sexoAluno, valor1, valor2, valor3, valor4, notaExame)

                                                console.log('Alun' + calculoMedia.sexAluno(sexoAluno) + ' ' + exameNecessario + calculoMedia.sexAluno(sexoAluno))
                                            })

                                        } else {
                                            console.log('\n------------------RELATÓRIO------------------\n')
                                            console.log('Alun' + generoAluno + ' ' + nomeAluno + ' ' + resultado + generoAluno + ' na disciplina ' + nomeDisciplina)
                                            console.log('Curso: ' + nomeCurso)
                                            console.log(generoProfessor + nomeProfessor)
                                            console.log('Notas d' + generoAluno + ' alun' + generoAluno + ': ' + valor1 + ', ' + valor2 + ', ' + valor3 + ', ' + valor4)
                                            //arrumar:
                                            console.log('Média final: ' + calculoMedia.calcularMedia.resultado)

                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


//


