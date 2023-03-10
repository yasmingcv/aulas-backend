/***************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de estados e cidades
 * Autora: Yasmin
 * Data: 10/03/2023
 * Versão: 1.0
 ***************************************************************************/

/*
 * Express - dependência para realizar requisições de API pelo protocolo HTTP
 *      npm install express --save
 * 
 * Cors - dependência para gerenciar permissões de requisição da API
 *      npm install cors --save
 * 
 * Body-parser - dependência que gerencia o corpo das requisições
 *      npm install body-parser --save
 */

//Import das dependências do projeto

//Dependência para criar as requisições da API
const express = require('express')
//Dependência para gerenciar as permissões da API
const cors = require('cors')
//Dependência para gerenciar o corpo das requisições da API


//Cria um objeto com as caracteristicas do express
const app = express()

app.use((request, response, next) => {
    //API publica - fica disponível para utilização de qualquer aplicação ('*')
    //API privada - somente o IP informado poderá consumir dados da API ('número do IP')
    //Define se a API será púlica ou privada
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})

//EndPoints
    //async - estabelece um status de aguarde, assim que eu processar te devolvo os dados
        //Obs: se não usar o async a requisição é perdida, pois front acha que a API
        //está fora do ar

//EndPoint para listar todos os estados
app.get('/estados', cors(), async function(request, response, next){
    const estadosCidades = require('./modulo/estados_cidades.js')
    let estados = estadosCidades.getListaDeEstados()
    response.status(200)
    response.json(estados)
})

//
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.')
})  





