/*****************************************************************************************
 * Objetivo: Responsável pela regra de negócios referente ao CRUD de alunos
 * Data: 14/04/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 ****************************************************************************************/

//CRUD

//Import do arquivo de configurações das variáveis, constantes e funções globais
var message = require('./modulo/config.js')

//Import do arquio DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/DAO/alunoDAO.js')

//Insere um novo aluno
const inserirAluno = async function (dadosAluno) {
    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (
        dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS //400
    }
    else {
        //Envia os dados para a model inserir no banco de dados
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //Valida se o BD inseriu corretamente os dados
        if (resultDadosAluno) {
            //Chama a função que vai encontrar o ID gerado após o insert
            let novoAluno = await alunoDAO.selectLastId()
            let dadosAlunoJSON = {}

            dadosAlunoJSON.status = message.SUCCESS_CREATED_ITEM.status //201
            dadosAlunoJSON.aluno = novoAluno

            return dadosAlunoJSON

        } else {
            return message.ERROR_INTERNAL_SERVER //500
        }
    }
}

//Atualizar um aluno existente
const atualizarAluno = async function (dadosAluno, idAluno) {
    if (
        dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS //400

        //Validação de ID incorreto ou não informado
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID //400

    } else {
        //Adiciona o ID do aluno no JSON dos dados
        dadosAluno.id = idAluno

        let statusId = await alunoDAO.selectByIdAluno(idAluno)

        if (statusId) {

            let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno)
            let dadosAlunoJSON = {}

            if (resultDadosAluno) {
                let alunoID = await getBuscarAlunoID(idAluno)

                dadosAlunoJSON.status = message.SUCCESS_UPDATED_ITEM.status
                dadosAlunoJSON.aluno = alunoID.aluno[0]

                return dadosAlunoJSON //200

            } else {
                return message.ERROR_INTERNAL_SERVER //500
            }
        } else {
            return message.ERROR_NOT_FOUND
        }
    }
}

//Excluir um aluno existente
const deletarAluno = async function (id) {

    if (id == ' ' || id == undefined || isNaN(id) || id == null) {
        return message.ERROR_INVALID_ID

    } else {
        let buscarById = await getBuscarAlunoID(id)

        //Verifica se o aluno existe, se não existir, envia o retorno da função (getBuscarAlunoID)
        if (buscarById.status == 404) {
            return buscarById

            //Se o aluno existir, prossegue e deleta o aluno
        } else {
            let resultDadosAluno = await alunoDAO.deleteAluno(id)

            if (resultDadosAluno) {
                return message.SUCCESS_DELETED_ITEM //200
            } else {
                return message.ERROR_INTERNAL_SERVER //500
            }
        }
    }
}

//Retorna a lista de todos os alunos
const getAlunos = async function () {
    let dadosAlunosJSON = {}

    //Chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.status = message.SUCCESS_REQUEST.status
        dadosAlunosJSON.message = message.SUCCESS_REQUEST
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return message.ERROR_NOT_FOUND
    }

}

//Retorna o aluno filtrando pelo ID
const getBuscarAlunoID = async function (id) {

    //Verifica se o usuário digitou corretamente
    if (id == '' || isNaN(id) || id == undefined) {
        return message.ERROR_INVALID_ID
    } else {
        let dadosAlunoJSON = {}
        let dadosAluno = await alunoDAO.selectByIdAluno(id)

        if (dadosAluno) {
            //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
            dadosAlunoJSON.status = message.SUCCESS_REQUEST.status
            dadosAlunoJSON.message = message.SUCCESS_REQUEST
            dadosAlunoJSON.aluno = dadosAluno
            return dadosAlunoJSON
        } else {
            return message.ERROR_NOT_FOUND
        }
    }
}

//Retorna o aluno filtrando pelo nome
const getBuscarAlunoNome = async function (nome) {
    let dadosAlunosJSON = {}

    //Verifica se o usuário digitou corretamente
    if (nome == undefined || nome == '' || !isNaN(nome)) {
        return message.ERROR_REQUIRED_FIELDS
    }

    let dadosAluno = await alunoDAO.selectByNameAluno(nome)

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return message.ERROR_NOT_FOUND
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}