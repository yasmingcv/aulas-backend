/************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar números ímpares e pares
 * Data: 15/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
*************************************************************************************************/

const calcularPar = function (inicial, final) {
    let numeroInicial = inicial
    let numeroFinal = final
    let quantidade = 0
    let status

    if (numeroInicial < 0 || numeroInicial > 500) {
        console.log('O número inicial deve estar entre 0 e 500.')
        status = 'erro'
    } else if (numeroFinal < 100 || numeroFinal > 1000) {
        console.log('O número final deve estar entre 100 e 1000.')
        status = 'erro'
    } else if (isNaN(numeroInicial) || isNaN(numeroFinal) || numeroInicial == '' || numeroFinal == '') {
        console.log('Por favor, digite um número válido.')
        status = 'erro'
    } else {
        console.log('Números pares:')
        while (numeroInicial <= numeroFinal) {
            if (numeroInicial % 2 == 0) {
                console.log(numeroInicial)
                quantidade++
            }
            numeroInicial++
        }
        console.log('Quantidade de números pares encontrados: ' + quantidade + '\n')
    }
    return status
}

const calcularImpar = function (inicial, final) {
    let numeroInicial = inicial
    let numeroFinal = final
    let quantidade = 0
    let status

    if (numeroInicial < 0 || numeroInicial > 500) {
        console.log('O número inicial deve estar entre 0 e 500.')
        status = 'erro'
    } else if (numeroFinal < 100 || numeroFinal > 1000) {
        console.log('O número final deve estar entre 100 e 1000.')
        status = 'erro'
    } else if (isNaN(numeroInicial) || isNaN(numeroFinal) || numeroInicial == '' || numeroFinal == '') {
        console.log('Por favor, digite um número válido.')
        status = 'erro'
    } else {
        console.log('Números ímpares:')
        while (numeroInicial <= numeroFinal) {
            if (numeroInicial % 2 != 0) {
                console.log(numeroInicial)
                quantidade++
            }
            numeroInicial++
        }
        console.log('Quantidade de números ímpares encontrados: ' + quantidade + '\n')
    }
    return status
}

module.exports = {
    calcularPar,
    calcularImpar
}

