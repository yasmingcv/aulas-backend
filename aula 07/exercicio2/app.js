/************************************************************************************************
 * Objetivo: Exercício para gerenciar uma tabuada
 * Data: 15/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
*************************************************************************************************/

var calculoTabuada = require('./modulo/tabuada.js')

var readLine = require('readline')

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite a tabuada inicial (entre 2 e 100)\n', function (tInicial) {
    let tabuadaInicial = tInicial

    entradaDados.question('Digite a tabuada final (entre 2 e 100)\n', function (tFinal) {
        let tabuadaFinal = tFinal

        entradaDados.question('Digite o número inicial do multiplicador (entre 1 e 50)\n', function (mInicial) {
            let multiplicadorInicial = mInicial

            entradaDados.question('Digite o número final do multiplicador (entre 1 e 50)\n', function (mFinal){
                let multiplicadorFinal = mFinal

                let resultado
                resultado = calculoTabuada.calcularTabuada(tabuadaInicial, tabuadaFinal, multiplicadorInicial, multiplicadorFinal)
                
                if (resultado == 'erro'){
                    entradaDados.close()
                }

            })
        })

    })
})