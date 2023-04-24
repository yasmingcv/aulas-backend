/*****************************************************************************************
 * Objetivo: Responsável pela manipiulação de dados dos alunos no banco de dados
 * Data: 14/04/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 ****************************************************************************************/

//CRUD (Create, Read, Update, Delete)

//Import da biblioteca PrismaClient
var { PrismaClient } = require('@prisma/client')

//Instancia a classe PrismaClient
var prisma = new PrismaClient()

//Inserir dados do aluno no banco de dados
const insertAluno = function (dadosAluno) {

}

//Atualizar dados do aluno no banco de dados
const updateAluno = function (id) {

}

//Deletar dados do aluno no banco de dados
const deleteAluno = function (id) {

}

//Retornar todos os alunos do banco de dados
const selectAllAlunos = async function () {

    //ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe(sql) -> permite interpretar uma ***variável*** como sendo um script sql
    //$queryRaw('select * from tbl_aluno') -> permite interpretar o script sql direto no método

    //result set - rs (resultado)
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }

}

//Retornar o aluno filtrando pelo ID
const selectByIdAluno = async function (id) {
    let sql = 'select * from tbl_aluno where id = ' + id

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

const selectByNameAluno = async function (name) {
    let sql = `select * from tbl_aluno where nome like '%${name}%'`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno
}