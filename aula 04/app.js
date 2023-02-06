/************************************************************************************************
 * Objetivo: Projeto para realizar cálculos matemáticos (Somar, Subtrair, Multiplicar e Dividir) 
 * Data: 03/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
*************************************************************************************************/

//Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js')

var readLine = require('readline')


var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Valor 1: \n', function (numero1) {
    let valor1 = numero1.replace(',', '.')

    entradaDados.question('Valor 2: \n', function (numero2) {
        let valor2 = numero2.replace(',', '.')

        entradaDados.question('Escolha uma operação matemática: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function (tipoCalculo) {
            let operacao = tipoCalculo.toUpperCase()
            let resultado

            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possível calcular se algum dado estiver em branco.')
                entradaDados.close()
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível calcular se os valores digitados não forem números.')
                entradaDados.close()
            } else {

                //toUpperCase -> converte uma string em maiusculo.
                //toLowerCase -> converte uma string em minusculo.


                //Chama a função para calcular os valores (função que nós criamos.)
                resultado = matematica.calculadora(valor1, valor2, operacao)

                if (resultado === false) {
                    entradaDados.close()
                } else {
                    console.log(resultado)
                }

            }
        })
    })
})