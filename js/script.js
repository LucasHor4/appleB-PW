const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const titulo = document.getElementById('titulo-produto')

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
const opcoesTamanho = ['41 mm','45 mm']

let imagemSelecionada = 1
let tamanhoSelecionado = 1
let corSelecionada = 1


function trocarImagem(){
    //pegar o id da opção selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    //função chartAt() retorna o caractere especificado a partir de uma sting => 0-imagem => charAt(0) => 0
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`
}

function trocarTamanho(){
    //atualizar variavel do tamanho selecionado
    const idOpcaoTamanho = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idOpcaoTamanho.charAt(0)
    //alterar o titulo do produto 
    titulo.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    //mudar tamanho da imagem conforme forem selecionados as opções 41 ou 45  
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    } else{
        imagemVisualizacao.classList.remove('caixa-pequena')   
    }
}

function trocarCor(){
    //atualizar variavel da cor selecionada
    const idOpcaoCor = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idOpcaoCor.charAt(0)
    //trocar o titulo da pag
    titulo.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    
    //trocar nome da cor
    //trocar as imagens com as miniaturas exibidas
    //trocar imagem de visualização
    
}
