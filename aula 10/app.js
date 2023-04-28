/*****************************************************************************************
 * Objetivo: API para integração entre back e banco de dados (GET, POST, PUT, DELETE).
 * Data: 14/04/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 ****************************************************************************************/

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria o objeto app conforme a classe do express
const app = express()

//Permissões do cors
app.use((request, response, next) => {
    //Define quem poderá acessar a API (* - Todos)
    response.header('Access-Control-Allow-Origin', '*')
    //Define quais métodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao cors
    app.use(cors())

    next()
})

//CRUD (Create, Read, Update, Delete)

/**************************************************************************************
 * Objetivo: API de controle de ALUNOS
 * Data: 14/04/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 *************************************************************************************/

/*
Instalação do PRISMA no projeto (biblioteca para conexão com BD)
    npm install prisma --save
    npx prisma
    npx prisma init
    npm install @prisma/client --save

    ------------------------------------

    npx prisma migrate dev
*/

//Define que os dados que irão chegar no body da requisição serão no padrão JSON
const bodyParserJSON = bodyParser.json()

//Import do arquivo da controller que irá solicitar a model os dados do BD
var controllerAluno = require('./controller/controller_aluno.js')

//EndPoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    let nome = request.query.nome

    //Verifica se o usuário passou o nome e executa a função de buscar o aluno pelo nome
    if (nome) {
        //Recebe os dados da controller
        let dadosAluno = await controllerAluno.getBuscarAlunoNome(nome)

        response.json(dadosAluno)
        response.status(dadosAluno.status)

    } 
    
    //Se o usuário não passou o nome, executa a função de listar todos os alunos
    else {

        //Recebe os dados da controller do aluno
        let dadosAluno = await controllerAluno.getAlunos()

        response.json(dadosAluno)
        response.status(dadosAluno.status)
    }



})

//EndPoint: retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let id = request.params.id

    dadosAluno = await controllerAluno.getBuscarAlunoID(id)

    response.json(dadosAluno)
    response.status(dadosAluno.status)
})

//EndPoint: insere um dado novo
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function (request, response) {

    //Recebe os dados encaminhados na requisição
    let dadosBody = request.body

    let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

    response.status(resultDadosAluno.status)
    response.json(resultDadosAluno)

})

//EndPoint: atualiza um aluno existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

//EndPoint: exclui um aluno, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

app.listen(8080, function () {
    console.log('Servidor aguardando requisiçõs na porta 8080')
})
