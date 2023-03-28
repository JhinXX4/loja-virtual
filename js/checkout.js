function buscaItens(){
    var itens = [
    {
        nome: "Fone JBL",
        quantidade: 1,
        imagem: "img/JBL_JR310_Product Image_Hero_Red.webp",
        preco: 450.50,

    },    
    
];
  return itens;
}



function renderItem(item){
    var container = document.querySelector(".items-container");
    var divItem = document.createElement("div");
    var imagem = document.createElement("img");
    var titulo = document.createElement("h3");
    var preco = document.createElement("span");
    var qtd = document.createElement("span");
    var tituloNode = document.createTextNode(item.nome);
    var formataDinheiro = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    });

    preco.appendChild(document.createTextNode(formataDinheiro.format(item.preco)))
    preco.classList.add("preco");

    qtd.appendChild(document.createTextNode(`Qtd: ${item.quantidade}`));

    titulo.appendChild(tituloNode);

    imagem.setAttribute("src",item.imagem);

    divItem.classList.add("item");
    divItem.appendChild(imagem);
    divItem.appendChild(titulo);
    divItem.appendChild(qtd);
    divItem.appendChild(preco);

    container.appendChild(divItem);
}
function calculaFrete(){
    return 50.98;
}

function main() {
    const itens = buscaItens();
    const frete = calculaFrete();
    const linkItens = document.querySelector("a[href= '#items']");
    const itensTotal = document.getElementById("itens-total");
    const freteTotal = document.getElementById("frete-total");
    const totalPedido = document.getElementById("pedido-total");

    const formataDinheiro = new Intl.NumberFormat("pt-br",
    {
        style: "currency",
        currency: "BRL"
    });
    const quantidadeItens = itens.reduce(function(valorAnterior, item){
        return valorAnterior + item.quantidade;
    },0);
    
    const subTotalItens = itens.reduce(function(valorAnterio, item){
        return valorAnterio + (item.quantidade * item.preco);
    },0);

    console.log(itens)
    totalPedido.innerHTML = formataDinheiro.format(frete + subTotalItens);
    freteTotal.innerHTML = formataDinheiro.format(frete);
    itensTotal.innerHTML = formataDinheiro.format(subTotalItens);
    linkItens.innerHTML = `${quantidadeItens} ${quantidadeItens === 1 ? "Item" : "Itens"}`;

    for(var item of itens){
        renderItem(item);
    }
}