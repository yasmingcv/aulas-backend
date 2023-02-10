/**************************************************************************************
 * Objetivo: Arquivo de funções para cálculo de média.
 * Data: 10/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0  
 **************************************************************************************/

const calcularMedia = function (primeiraNota, segundaNota, terceiraNota, quartaNota) {
    let nota1 = Number(primeiraNota)
    let nota2 = Number(segundaNota)
    let nota3 = Number(terceiraNota)
    let nota4 = Number(quartaNota)


    if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('ERRO: Digite uma nota válida (entre 0 e 100).')
    } else if (nota1 == '' || nota2 == '' || nota4 == '') {
        console.log('ERRO: Digite um valor.')
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: Digite um valor válido')
    } else {
        let resultado = (nota1 + nota2 + nota3 + nota4) / 4
        if (resultado >= 70) {
            console.log(resultado + ' Aprovado')
        } else if (resultado >= 50 && resultado <= 69) {
            return true
        } else {
            console.log(resultado + ' Reprovado')
        }
    }
}

const calcularMediaExame = function (primeiraNota, segundaNota, terceiraNota, quartaNota, exame) {
    let nota1 = Number(primeiraNota)
    let nota2 = Number(segundaNota)
    let nota3 = Number(terceiraNota)
    let nota4 = Number(quartaNota)
    let notaExame = Number(exame)


    let mediaComExame

    mediaComExame = (nota1 + nota2 + nota3 + nota4 + notaExame) / 5
    console.log(mediaComExame)
}

module.exports = {
    calcularMedia,
    calcularMediaExame
}
