/************************************************************************************************
 * Objetivo: Arquivo de funçâoes para cálculo de uma tabuada
 * Data: 15/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
*************************************************************************************************/


const calcularTabuada = function (tInicial, tFinal, mInicial, mFinal) {
    let tabuadaInicial = tInicial
    let tabuadaFinal = tFinal
    let multiplicadorInicial = mInicial
    let multiplicadorFinal = mFinal
    let resultado


    if (tabuadaInicial == '' || tabuadaFinal == '' || multiplicadorInicial == '' || multiplicadorFinal == '') {
        console.log('ERRO: Nenhum valor pode estar vazio.')
        return 'erro'
    } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(multiplicadorInicial) || isNaN(multiplicadorFinal)) {
        console.log('ERRO: Todos os valores devem ser números.')
        return 'erro'
    } else if (tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100) {
        console.log('ERRO: Os valores da tabuada inicial e final devem ser entre 0 e 100')
        return 'erro'
    } else if (multiplicadorInicial < 1 || multiplicadorInicial > 50 || multiplicadorFinal < 1 || multiplicadorFinal > 50) {
        console.log('ERRO: O multiplicador inicial e final devem estar entre 1 e 50')
        return 'erro'
    } else {
        while (tabuadaInicial <= tabuadaFinal) {
            console.log('\nTabuada do ' + tabuadaInicial + '\n')
            let contador = multiplicadorInicial

            while (contador <= multiplicadorFinal) {
                resultado = tabuadaInicial * contador

                console.log(tabuadaInicial + ' x ' + contador + ' = ' + resultado)

                contador++
            }

            tabuadaInicial++
        }
    }



}


module.exports = {
    calcularTabuada
} 