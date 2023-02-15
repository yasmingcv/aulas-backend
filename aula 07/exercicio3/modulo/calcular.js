/************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar números ímpares e pares
 * Data: 15/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
*************************************************************************************************/

const calcularParEImpar = function (inicial, final) {
    let numeroInicial = inicial
    let numeroFinal = final
    let resto

    while (numeroInicial <= numeroFinal) {
        resto = numeroInicial % 2

        while (resto == 0) {
            console.log(numeroInicial)
            numeroInicial++
            while (resto != 0) {
                console.log(numeroInicial)
                numeroInicial++
            }

        }



    }
}

calcularParEImpar(1, 100)
