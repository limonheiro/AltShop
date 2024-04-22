import setProdutoCarrinho from './select_product.js';

const produtosContainer = document.querySelector('.products_container')

async function getProdutos(){
    const produtosFetch = await fetch('http://localhost:3000/produtos')
    const produtosFetchJson = await produtosFetch.json()
    return produtosFetchJson
}

async function carregarProdutos(){
    const listaProdutos = await getProdutos()
    let nome
    produtosContainer.innerHTML = ''
    
    listaProdutos.forEach((produto) => {
        if (produto.nome.length > 24){
            nome  = produto.nome.substring(0,20)+ '...'
        }else{
            nome = produto.nome
        }
        produtosContainer.innerHTML += `
        <div class="product" data-code=${produto.id}>
         <img  src=${produto.image} alt="">
         <div class="describe_product">
             <p>${nome}</p>
             <p>$ ${produto.preço}</p>
         </div>
        </div>
        `
    });
    setProdutoCarrinho()
}

carregarProdutos()
