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
const bodyParser = require('body-parser')


//Import ddo arquivo no modulo (funções)
const estadosCidades = require('./modulo/estados_cidades.js')

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
app.get('/estados', cors(), async function (request, response, next) {


    //Chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da requisição
    if (estados) {
        response.status(200)
        response.json(estados)
    } else {
        response.status(500)
    }
})

//EndPoint: Lista os dados do estado filtrando pela sigla do estado
app.get('/estado/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstado = {}

    //Recebe a sigla do etado que será enviada pela URL da requisição
    let siglaEstado = request.params.uf

    //Tratamento para validação de entrada de dados incorreta
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = 'Não foi possível processar pois os dados e entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter dois dígitos.'
    } else {

        //Chama a função para retornar os dados do estado
        let estado = estadosCidades.getDadosEstado(siglaEstado)

        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstado)

    next()
})

//EndPoint: Mostra a capital do estado filtrando pela sigla
app.get('/capital/:uf', cors(), async function (request, response, next) {
    let statusCode
    let capitalEstado = {}

    //Recebe a sigla do etado que será enviada pela URL da requisição
    let siglaEstado = request.params.uf

    //Tratamento para validação de entrada de dados incorreta
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        capitalEstado.message = 'Não foi possível processar pois os dados e entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter dois dígitos.'
    } else {
        let capital = estadosCidades.getCapitalEstado(siglaEstado)

        if (capital) {
            statusCode = 200
            capitalEstado = capital
        } else {
            statusCode = 404
        }

    }

    response.status(statusCode)
    response.json(capitalEstado)

    next()
})

//EndPoint: Retorna os estados de uma região
app.get('/regiao/:regiao', cors(), async function (request, response, next) {
    let statusCode
    let regiaoEstados = {}

    let regiaoEstado = request.params.regiao

    if (regiaoEstado == '' || regiaoEstado == undefined || !isNaN(regiaoEstado)) {
        statusCode = 400
        regiaoEstados.message = 'Não foi possível processar pois os dados e entrada (região) não podem ser processados.'
    } else {
        let regiao = estadosCidades.getEstadosRegiao(regiaoEstado)

        if (regiao) {
            statusCode = 200
            regiaoEstados = regiao
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(regiaoEstados)

    next()

})

//EndPoint: Lista as capitais do Brasil
app.get('/capitais', cors(), async function (request, response, next){
    let statusCode
    let capitaisPais = {}

    let capitais = estadosCidades.getCapitalPais()

    if(capitais){
        statusCode = 200
        capitaisPais = capitais
    } else {
        statusCode = 500
    }

    response.status(statusCode)
    response.json(capitaisPais)

    next()
})

//EndPoint: Lista as cidades de um estado filtrando pela sigla
app.get('/cidades/:uf', cors(), async function (request, response, next){
    let statusCode
    let cidadesEstado = {}

    let siglaEstado = request.params.uf

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        cidadesEstado.message = 'Não foi possível processar pois os dados e entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter dois dígitos.'
    } else {
        let cidades = estadosCidades.getCidades(siglaEstado)

        if(cidades){
            statusCode = 200
            cidadesEstado = cidades
        } else {
            statusCode = 404
        }

    }

    response.status(statusCode)
    response.json(cidadesEstado)

    next()
})

//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.')
})





