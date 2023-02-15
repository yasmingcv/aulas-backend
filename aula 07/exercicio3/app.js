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

entradaDados.question('Digite o número inicial:\n', function(inicial){
    let numeroInicial = inicial

    entradaDados.question('DIgite o número final:\n', function(final){
        let numeroFinal = final
    })
})