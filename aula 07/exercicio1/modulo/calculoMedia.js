/**************************************************************************************
 * Objetivo: Arquivo de funções para cálculo de média.
 * Data: 10/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0  
 **************************************************************************************/

const calcularMedia = function (generoAluno, primeiraNota, segundaNota, terceiraNota, quartaNota) {
    let sexoDoAluno = generoAluno
    let nota1 = Number(String(primeiraNota))
    let nota2 = Number(String(segundaNota))
    let nota3 = Number(String(terceiraNota))
    let nota4 = Number(String(quartaNota))
    let statusAluno


    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 || nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('ERRO: Digite uma nota válida (entre 0 e 100).')
    } else if (nota1 === '' || nota2 === '' || nota3 === '' || nota4 === '') {
        console.log('ERRO: Digite um valor. snfajfhhj')
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: Digite um valor válido')
    } else {
        let resultado = (nota1 + nota2 + nota3 + nota4) / 4

        if (resultado >= 70) {
            statusAluno = 'aprovad'
        } else if (resultado >= 50 && resultado <= 69) {
            statusAluno = 'exame'           
        } else {
            statusAluno = 'reprovad'          
        }

        return statusAluno
    }
}

const calcularMediaExame = function (generoAluno, primeiraNota, segundaNota, terceiraNota, quartaNota, exame) {
    let sexoDoAluno = generoAluno
    let nota1 = Number(String(primeiraNota))
    let nota2 = Number(String(segundaNota))
    let nota3 = Number(String(terceiraNota))
    let nota4 = Number(String(quartaNota))
    let notaExame = Number(String(exame))
    let statusAluno


    let mediaComExame

    mediaComExame = (nota1 + nota2 + nota3 + nota4 + notaExame) / 5

    if (notaExame > 100 || notaExame < 0) {
        console.log('ERRO: Digite um valor válido')
    } else if (notaExame === '') {
        console.log('ERRO: Digite uma nota válida.')
    } else if (isNaN(notaExame)) {
        console.log('ERRO: Digite um valor válido.')
    } else {
        if (mediaComExame < 60) {
            statusAluno = 'reprovad'
            return statusAluno
        } else {
            statusAluno = 'aprovad'
            return statusAluno
        }
    }

}

const sexAluno = function (generoAluno) {
    let sexoAluno = generoAluno

    if (sexoAluno == 1) {
        sexoAluno = 'a'
        return sexoAluno
    } else {
        sexoAluno = 'o'
        return sexoAluno
    }
}

const sexProfessor = function (generoProfessor) {
    let sexoProfessor = generoProfessor

    if (sexoProfessor == 1) {
        sexoProfessor = 'Professora: '
        return sexoProfessor
    } else {
        sexoProfessor = 'Professor: ';
        return sexoProfessor;
    }
}


module.exports = {
    calcularMedia,
    calcularMediaExame,
    sexAluno,
    sexProfessor
}
