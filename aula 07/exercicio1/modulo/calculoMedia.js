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

    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 || nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('ERRO: Digite uma nota válida (entre 0 e 100).')
        return 'erro'
    } else if (nota1 === '' || nota2 === '' || nota3 === '' || nota4 === '') {
        console.log('ERRO: Digite um valor.')
        return 'erro'
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: Digite um valor válido')
        return 'erro'
    } else {
        let resultado = (nota1 + nota2 + nota3 + nota4) / 4

        return resultado
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

    if (notaExame > 100 || notaExame < 0) {
        console.log('ERRO: Digite um valor válido')
        return 'erro'
    } else if (notaExame === '') {
        console.log('ERRO: Digite uma nota válida.')
        return 'erro'
    } else if (isNaN(notaExame)) {
        console.log('ERRO: Digite um valor válido.')
        return 'erro'
    } else {
        return mediaComExame
    }
}

const sexAluno = function (generoAluno) {
    let sexoAluno = generoAluno

    if (sexoAluno > 2) {
        console.log('ERRO: Digite um número válido (1 ou 2)')
        return 'erro'
    } else if (sexoAluno < 1) {
        console.log('ERRO: Digite um número válido (1 ou 2)')
        return 'erro'
    } else if (isNaN(sexoAluno)) {
        console.log('ERRO: Digite um **número** válido (1 ou 2)')
        return 'erro'
    } else {
        if (sexoAluno == 1) {
            sexoAluno = 'a'
            return sexoAluno
        } else {
            sexoAluno = 'o'
            return sexoAluno
        }
    }
}


const sexProfessor = function (generoProfessor) {
    let sexoProfessor = generoProfessor

    if (sexoProfessor > 2) {
        console.log('ERRO: Digite um número válido (1 ou 2)')
        return 'erro'
    } else if (sexoProfessor < 1) {
        console.log('ERRO: Digite um número válido (1 ou 2)')
        return 'erro'
    } else if (isNaN(sexoProfessor)) {
        console.log('ERRO: Digite um **número** válido (1 ou 2)')
        return 'erro'
    } else {
        if (sexoProfessor == 1) {
            sexoProfessor = 'Professora: '
            return sexoProfessor
        } else {
            sexoProfessor = 'Professor: ';
            return sexoProfessor;
        }
    }
}


module.exports = {
    calcularMedia,
    calcularMediaExame,
    sexAluno,
    sexProfessor
}
