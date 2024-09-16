const imagemVisualizacao = document.getElementById('imagem-visualizacao')

const verdeCipreste = {
    nome: 'verde-cipreste',//nome da cor
    pasta: 'imagens-verde-cipreste',//nome da pasta
}
const azulInverno = {
    nome: 'azul-inverno',//nome da cor
    pasta: 'imagens-azul-inverno',//nome da pasta
}
const meiaNoite = {
    nome: 'meia-noite',//nome da cor
    pasta: 'imagens-meia-noite',//nome da pasta
}
const estelar = {
    nome: 'estelar',//nome da cor
    pasta: 'imagens-estelar',//nome da pasta
}
const rosaClaro = {
    nome: 'rosa-claro',//nome da cor
    pasta: 'imagens-rosa-claro',//nome da pasta
}

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro]

let imagemSelecionada = 1

function trocarImagem(){
    //pegar o id da opção selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    //função chartAt() retorna o caractere especificado a partir de uma sting => 0-imagem => charAt(0) => 0
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`
}
    