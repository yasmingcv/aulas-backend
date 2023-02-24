/************************************************************************************************
 * Objetivo: Exercício para gerenciar números pares e ímpares
 * Data: 15/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
*************************************************************************************************/

var calcular = require('./modulo/calcular.js')

var readLine = require('readline')

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número inicial:\n', function (inicial) {
    let numeroInicial = inicial

    entradaDados.question('DIgite o número final:\n', function (final) {
        let numeroFinal = final

        entradaDados.question('\nO que você deseja? (Digite o número correspondente)\n1 - Números pares\n2 - Números ímpares\n3 - Ambos\n', function (escolha) {
            let escolhaCalculo = escolha

            if (escolhaCalculo == '' || isNaN(escolhaCalculo)) {
                console.log('Digite uma opção válida.')
                entradaDados.close()
            } else if (escolhaCalculo <= 0 || escolhaCalculo > 3) {
                console.log('Digite uma opção válida')
                entradaDados.close()
            } else {
                if (escolhaCalculo == 1) {
                    let calculoPar = calcular.calcularPar(numeroInicial, numeroFinal)
                    if (calculoPar == 'erro') {
                        entradaDados.close()
                    }
                } else if (escolhaCalculo == 2) {
                    let calculoImpar = calcular.calcularImpar(numeroInicial, numeroFinal)
                    if (calculoImpar == 'erro') {
                        entradaDados.close()
                    }
                } else if (escolhaCalculo == 3) {
                    let calculoPar = calcular.calcularPar(numeroInicial, numeroFinal)
                    let calculoImpar = calcular.calcularImpar(numeroInicial, numeroFinal)
                    if (calculoPar == 'erro' || calculoImpar == 'erro') {
                        entradaDados.close()
                    }
                }
            }
        })
    })
})