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
const { request, response } = require('express')

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

    //EndPoint: retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async, function(request, response){

    })

    //EndPoint: retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async, function(request, response){
        
    })

    //EndPoint: insere um dado novo
    app.post('/v1/lion-school/aluno', cors(), async, function(request, response){
        
    })

    //EndPoint: atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async, function(request, response){
        
    })

    //EndPoint: exclui um aluno, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async, function(request, response){
        
    })

    app.listen(8080, function (){
        console.log('Servidor aguardando requisiçõs na porta 8080')
    })
