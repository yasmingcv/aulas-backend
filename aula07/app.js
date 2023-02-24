/******************************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 ******************************************************************/

// [ ] - representa objeto do tipo array.
// { } - representa objeto do tipo JSON.

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória']


const exibindoDados = function () {
    //Verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes))

    //Verifica o tipo de dados dos itens do array
    console.log(typeof (listaNomes[0]))

    //Exibe o conteúdo de um índice
    console.log(listaNomes[0])

    //Exibe todos os itens do array
    console.log(listaNomes)

    //Table - Permite visualizar o conteúdo do array em formato de tabela
    console.table(listaNomes)

    console.log('O nome do aluno é: ' + listaNomes[0])

    //Mostra a quantidade de elementos dentro do array
    console.log(listaNomes.length)

    //Percorrendo o array com while
    console.log('\n--- Exemplo com o while ---')
    let cont = 0 //start
    let qtdItens = listaNomes.length //stop

    while (cont < qtdItens) {
        console.log('O nome do aluno é: ' + listaNomes[cont])
        cont++
    }

    //Percorrendo array com for
    console.log('\n--- Exemplo com for ---')
    for (cont = 0; cont < qtdItens; cont++) {
        console.log('O nome do aluno é: ' + listaNomes[cont])
    }

    //Percorrendo array com for each
    console.log('\n--- Exemplo com for each ---')
    listaNomes.forEach(function (nome) {
        console.log('O nome do aluno é: ' + nome)
    })
}

const manipulandoDados = function () {
    //push - adiciona novos itens no final do Array, preservando os elementos anteriores
    listaProdutos.push('Memória')
    listaProdutos.push('WebCam', 'Gabinete', 'Fone')
    console.table(listaProdutos)
     
    //unshift - adiciona novos itens no início do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'Placa Mãe', 'SSD')
    console.table(listaProdutos)

    //pop - remove o último item do Array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - remove o item do início do Array, re-organizando todos os elementos
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - permite criar uma cópia do Array
    const novosProdutos = listaProdutos.slice()
    console.table(novosProdutos)

    //indexOf - permite buscar dentro de um Array um item
        //Se o retorno for -1, o item não foi encontrado
        //Se o retorno for maior ou igual a 0, ele foi encontrado e retorna o índice
    console.log(listaProdutos.indexOf('PC'))

    if(listaProdutos.indexOf('PC') >= 0){
        console.log('Item encontrado')
    } else {
        console.log('Item não encontrado.')
    }
}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - permite apagar um ou mais itens de um Array através do índice
        //Se for informado somente o índice ele irá apagar todos os itens para baixo
        //Para limitar a quantidade de itens a serem apagados, devemos informar como segundo parâmetro
    if(indice >= 0){
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }
    return status
}

const removerItem = function (lista, nomeItem) {
    let novaLista = lista.slice()
    let nome = nomeItem
    let indice = novaLista.indexOf(nome)
    let status

    if(indice >= 0){
        novaLista.splice(indice, 1)
        status = novaLista
    } else {
        status = false
    } 
    return status
}

// manipulandoDados()
// console.table(listaProdutos)
// console.log(removerProduto('Monitor'))
// console.table(listaProdutos)

console.table(listaProdutos)
console.table(removerItem(listaProdutos, 'Gabinete'))
// console.table(novaLista)