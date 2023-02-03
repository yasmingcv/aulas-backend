/**************************************************************************************
 * Objetivo: Arquivo de funções para cálculos matemáticos.
 * Data: 03/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0  
 **************************************************************************************/

//Função para realizar cálculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR.)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2
    } else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {
            return false
        } else {
            resultado = valor1 / valor2
        }
    } else {
        return false
    }
    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined) {
        return false
    } else {
        return resultado
    }
}

//Permite adicionar uma function no escopo global (public)
//As functions que não estiverem aqui no exports, serão tratadas apenas como escopo local (private)
module.exports = {
    calculadora
}