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
const insertAluno = async function (dadosAluno) {

    //Script SQL para inserir dados
    let sql = `insert into tbl_aluno (
                    nome,
                    rg,
                    cpf,
                    data_nascimento,
                    email
                ) values (
                    '${dadosAluno.nome}',
                    '${dadosAluno.rg}',
                    '${dadosAluno.cpf}',
                    '${dadosAluno.data_nascimento}',
                    '${dadosAluno.email}'
                )`

    //Executa o scriptSQL do BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus){
        return true
    } else {
        return false
    }


}

//Atualizar dados do aluno no banco de dados
const updateAluno = async function (dadosAluno) {

    //Script SQL para atualizar os dados no BD
    let sql = `update tbl_aluno set 
                    nome = '${dadosAluno.nome}',
                    rg = '${dadosAluno.rg}',
                    cpf = '${dadosAluno.cpf}',
                    data_nascimento = '${dadosAluno.data_nascimento}',
                    email = '${dadosAluno.email}'

                    where id = ${dadosAluno.id}
    `

    //Executa o script no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus){
        return true 
    } else {
        return false
    }

}

//Deletar dados do aluno no banco de dados
const deleteAluno = async function (id) {
    let sql = `delete from tbl_aluno where id = ${id}`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus) {
        return true 
    } else {
        return false
    }
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

//Retornar o aluno filtrando pelo nome
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
    selectByNameAluno,
    insertAluno,
    updateAluno,
    deleteAluno
}