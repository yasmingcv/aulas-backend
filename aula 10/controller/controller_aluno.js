/*****************************************************************************************
 * Objetivo: Responsável pela regra de negócios referente ao CRUD de alunos
 * Data: 14/04/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 ****************************************************************************************/

//CRUD

//Import do arquio DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/DAO/alunoDAO.js')

//Insere um novo aluno
const inserirAluno = function (dadosAluno) {

}

//Atualizar um aluno existente
const atualizarAluno = function (dadosAluno) {

}

//Excluir um aluno existente
const deletarAluno = function (id) {

}

//Retorna a lista de todos os alunos
const getAlunos = async function () {
    let dadosAlunosJSON = {}

    //Chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }

}

//Retorna o aluno filtrando pelo ID
const getBuscarAlunoID = async function (id) {
    let dadosAlunoJSON = {}

    let dadosAluno = await alunoDAO.selectByIdAluno(id)

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJSON.aluno = dadosAluno
        return dadosAlunoJSON
    } else {
        return false
    }
}

const getBuscarAlunoNome = async function (nome) {
    let dadosAlunosJSON = {}
     
    let dadosAluno = await alunoDAO.selectByNameAluno(nome)

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome
}