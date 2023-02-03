/*********************************************************************************************
 * Objetivo:  Realizar cálculos com entrada de dois valores com as 4 operações matemáticas.
 * Autora: Yasmin Gonçalves
 * Data: 30/01/2023
 * Versão: 1.0
 ********************************************************************************************/

var readLine = require('readline')

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Escolha uma operação matemática:\n1. Somar\n2. Subtrair\n3. Multiplicar\n4. Dividir\n', function (operacao) {
    let operacaoEscolhida = operacao

    if (Number(operacaoEscolhida) > 4 || Number(operacaoEscolhida) <= 0 || isNaN(operacaoEscolhida || operacaoEscolhida == '')) {
        console.log('Digite o número referente a operação escolhida (entre 1 e 4)')
    } else {
        entradaDados.question('Digite o valor 1:\n', function (valor1) {
            let primeiroValor = valor1.replace(",", ".")

            entradaDados.question('Digite o valor 2:\n', function (valor2) {
                let segundoValor = valor2.replace(",", ".")
                let resultado

                //Tratamento de erros
                if (primeiroValor == '' || segundoValor == '' || isNaN(primeiroValor) || isNaN(segundoValor)) {
                    console.log('Digite um valor válido.')

                } else {
                    //Soma
                    if (operacaoEscolhida == 1) {
                        resultado = Number(primeiroValor) + Number(segundoValor)
                        console.log(resultado)
                        //Subtração
                    } else if (operacaoEscolhida == 2) {
                        resultado = Number(primeiroValor) - Number(segundoValor)
                        console.log(resultado)
                        //Multiplicação
                    } else if (operacaoEscolhida == 3) {
                        resultado = Number(primeiroValor) * Number(segundoValor)
                        console.log(resultado)
                        //Divisão
                    } else {
                        if (Number(segundoValor) == 0) {
                            console.log('ERRO: O divisor não pode ser igual a 0')
                        } else {
                            resultado = Number(primeiroValor) / Number(segundoValor)
                            console.log(resultado)
                        }
                    }
                }
            })
        })
    }
})