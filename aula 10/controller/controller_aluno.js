/*****************************************************************************************
 * Objetivo: Responsável pela regra de negócios referente ao CRUD de alunos
 * Data: 14/04/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 ****************************************************************************************/

//CRUD

//Import do arquivo de configurações das variáveis, constantes e funções globais
var messages = require('./modulo/config.js')

//Import do arquio DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/DAO/alunoDAO.js')

//Insere um novo aluno
const inserirAluno = async function (dadosAluno) {
    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (
        dadosAluno.nome            == '' || dadosAluno.nome            == undefined || dadosAluno.nome.length            > 100 ||
        dadosAluno.rg              == '' || dadosAluno.rg              == undefined || dadosAluno.rg.length              > 15  ||
        dadosAluno.cpf             == '' || dadosAluno.cpf             == undefined || dadosAluno.cpf.length             > 18  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10  ||
        dadosAluno.email           == '' || dadosAluno.email           == undefined || dadosAluno.email.length           > 255
    ) {
        return messages.ERROR_REQUIRED_FIELDS //400
    }
    else {
        //Envia os dados para a model inserir no banco de dados
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //Valida se o BD inseriu corretamente os dados
        if(resultDadosAluno){
            return messages.SUCCESS_CREATED_ITEM //201
        } else { 
            return messages.ERROR_INTERNAL_SERVER //500
        }
    }
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

    //Verifica se o usuário digitou corretamente
    if(id == '' || isNaN(id) || id == undefined){
        return messages.ERROR_REQUIRED_FIELDS
    } else {
        let dadosAluno = await alunoDAO.selectByIdAluno(id)

        if (dadosAluno) {
            //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
            dadosAlunoJSON.aluno = dadosAluno
            return dadosAlunoJSON
        } else {
            return messages.ERROR_NOT_FOUND
        }
    }


}

const getBuscarAlunoNome = async function (nome) {
    let dadosAlunosJSON = {}

    //Verifica se o usuário digitou corretamente
    if(nome == undefined || nome == '' || !isNaN(nome)){
        return messages.ERROR_REQUIRED_FIELDS
    }

    let dadosAluno = await alunoDAO.selectByNameAluno(nome)

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return messages.ERROR_NOT_FOUND
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome,
    inserirAluno
}