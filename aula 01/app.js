//Comentário em linha
/*
    Comentário 
    em 
    bloco.
*/

//Permite exibir uma mensagem no terminal
console.log('Testando o Node.JS')

//Import da biblioteca qe permite a entrada de dados via teclado
var readLine = require('readline')

//Criamos uma variável que vai ser especialista na entrada de dados via teclado
var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

//CallBack -> função que permite que na própria linha de programação
//seja uma variável, processamento possa acontecer um retorno  de dados
//automaticamente, sem sair desse processamento

//Cria uma interação com o usuário para entrada de dados
//Após o usuário digitar o conteúdo, a variável entradaDados permite
//retornar o conteúdo digitado para ser utilizado.
//Isso acontece através de uma função de CallBack
entradaDados.question('Favor digitar seu nome: \n', function(nome){
    console.log('Bem vinda ' + nome + ', ao servidor Node.JS!')
})
