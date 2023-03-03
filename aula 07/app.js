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

/******************************************************************
 * JSON é composto por chave (atributo) e valor
 * chave: valor
 * {nome: 'José', celular:'11948303519', email:'jose@gmail.com}
 ******************************************************************/


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

    if (listaProdutos.indexOf('PC') >= 0) {
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
    if (indice >= 0) {
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

    if (indice >= 0) {
        novaLista.splice(indice, 1)
        status = novaLista
    } else {
        status = false
    }
    return status
}

const listagemProdutos = function () {
    // Forma número 1 de criar um JSON e já atribuir chaves e valores:
    // let listProdutosJSON = {produtos: listaProdutos, clientes: listaNomes}
    // let listProdutosJSON = {}

    // Forma número 2 de criar um JSON, onde as chaves e valores são atribuidas no decorrer do projeto
    // listProdutosJSON.produtos = listaProdutos
    // listProdutosJSON.clientes = listaNomes

    //Extraindo valores de um JSON e ARRAY
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1])
    // console.log(listProdutosJSON.clientes[5])

    let listProdutosJSON = {}
    let listProdutosArray = [
        { nome: 'Monitor', quantidade: 300, marca: 'Dell', valor: 1000, codigo: '1' },
        { nome: 'Monitor', quantidade: 280, marca: 'LG', valor: 1300, codigo: '2' },
        { nome: 'Teclado', quantidade: 800, marca: 'Dell', valor: 200, codigo: '3' },
        { nome: 'Teclado', quantidade: 360, marca: 'LG', valor: 230, codigo: '4' },
        { nome: 'Teclado', quantidade: 80, marca: 'Logitech', valor: 120, codigo: '5' },
        { nome: 'Teclado', quantidade: 100, marca: 'Razer', valor: 1230, codigo: '6' },
        { nome: 'Mouse', quantidade: 790, marca: 'Dell', valor: 115, codigo: '7' },
        { nome: 'Mouse', quantidade: 25, marca: 'Razer', valor: 800, codigo: '8' }
    ]

    //Arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']

    //Arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4k', 'IPS']
    let listModelosTeclado = ['Mecânico', 'Semi-mecânico', 'Membrana', 'Óptico']

    //Adiciona o array de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray

    //Adicionar cores ao monitor Dell
    listProdutosJSON.produtos[0].cores = listCoresDellArray

    //Adicionar cores ao monitor LG
    listProdutosJSON.produtos[1].cores = listCoresLgArray

    //Teclado Dell
    listProdutosJSON.produtos[2].cores = listCoresDellArray

    //Teclado LG, Logitech e Razer
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray

    //Mouse Dell e Razer
    listProdutosJSON.produtos[6].cores = listCoresDellArray
    listProdutosJSON.produtos[7].cores = listCoresMouseArray


    //Modelos:


    //Adicionar modelos aos monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor
    listProdutosJSON.produtos[1].modelos = listModelosMonitor

    //Adicionar modelos aos teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado
    listProdutosJSON.produtos[3].modelos = listModelosTeclado
    listProdutosJSON.produtos[4].modelos = listModelosTeclado
    listProdutosJSON.produtos[5].modelos = listModelosTeclado

    console.log(listProdutosJSON.produtos)

    // console.log('Nome: ' + listProdutosJSON.produtos[1].nome)
    // console.log('Marca: ' + listProdutosJSON.produtos[1].marca)
    // console.log('Valor: ' + listProdutosJSON.produtos[1].valor)
    // console.log('Cor: ' + listProdutosJSON.produtos[1].cores[1])
    // console.log('Modelo: ' + listProdutosJSON.produtos[1].modelos[1])

    /*********************Desafio*********************/

    //Percorre o Array de produtos para listar os itens
    listProdutosJSON.produtos.forEach(function (itemProduto) {
        console.log('Nome: ' + itemProduto.nome)
        console.log('Marca: ' + itemProduto.marca)
        console.log('Valor: ' + itemProduto.valor)

        //Tratamento de erro para quando não existir Array de cores 
        if (itemProduto.cores != undefined) {
            //Percorre o Array de cores que está dentro do Array de produtos
            console.log('Cores:')
            itemProduto.cores.forEach(function (itemCor) {
                console.log('   ' + itemCor)
            })
        }

        //Tratamento de erro para quando não existir Array de modelos
        if (itemProduto.modelos != undefined) {
            //Percorre o Array de modelos que está dentro do Array de produtos
            console.log('Modelos:')
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('   ' + itemModelo)
            })
        }
        console.log('--------------')
    })
}

listagemProdutos()