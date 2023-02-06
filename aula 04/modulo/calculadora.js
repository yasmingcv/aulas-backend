/**************************************************************************************
 * Objetivo: Arquivo de funções para cálculos matemáticos.
 * Data: 03/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0  
 **************************************************************************************/

//Função para realizar cálculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR.)

//Forma 1 de criar uma função (é o método mais tradicional)
/*function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2
    } else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {
            console.log('ERRO: Não é possível realizar a divisão por 0')
            status = false
        } else {
            resultado = valor1 / valor2
        }
    } else {
        status = false
    }
    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined || status == false) {
        return false
    } else {
        return resultado
    }
}*/

//Forma 2 de criar uma função (método mais utilizado por programadores (JS))
const calculadora = function (numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2
    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2
    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2
    // } else if (operacao == 'DIVIDIR') {
    //     if (valor2 == 0) {
    //         console.log('ERRO: Não é possível realizar a divisão por 0')
    //         status = false
    //     } else {
    //         resultado = valor1 / valor2
    //     }
    // } else {
    //     console.log('ERRO: Não é possível realizar a divisão por 0')
    //     status = false
    // }

    switch (operacao) {
        case 'SOMAR':
            resultado = somar(valor1, valor2)
            break
        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2)
            break
        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2)
            break
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não é possível realizar a divisão por 0')
                status = false
            } else {
                resultado = dividir(valor1, valor2)
                break

            }

        //Permite entrar nessa opção sempre que nenhum dos cases forem válidos.
        default:
            console.log('ERRO: Não é possível realizar a divisão por 0')
            status = false
    }

    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined || status == false) {
        return false
    } else {
        return resultado.toFixed(2)
    }
}

//Forma 3 de criar uma função (arrow function)
const somar       = (valor1, valor2) => Number(valor1) + Number(valor2)
const subtrair    = (valor1, valor2) => Number(valor1) - Number(valor2)
const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2)
const dividir     = (valor1, valor2) => Number(valor1) / Number(valor2)



//Permite adicionar uma function no escopo global (public)
//As functions que não estiverem aqui no exports, serão tratadas apenas como escopo local (private)
module.exports = {
    calculadora
}