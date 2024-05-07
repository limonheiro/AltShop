import carrinhoCompra from './carrinho.js';
import excluir from './excluir.js';
import setProdutoCarrinho from './select_product.js';


const produtosContainer = document.querySelector('.products_container')

async function getProdutos() {
    const produtosFetch = await fetch('http://localhost:3000/produtos')
    const produtosFetchJson = await produtosFetch.json()
    return produtosFetchJson
}

async function carregarProdutos() {
    const listaProdutos = await getProdutos()
    let nome
    produtosContainer.innerHTML = ''

    listaProdutos.forEach((produto) => {
        if (produto.nome.length > 24) {
            nome = produto.nome.substring(0, 20) + '...'
        } else {
            nome = produto.nome
        }
        produtosContainer.innerHTML += `
        <div class="product" data-code=${produto.id}>
            <img  src=${produto.image} alt=""/>
            <div class="describe_product" data-quantidade=${produto.quantidade}>
                <p>${nome}</p>
                <p>$ ${produto.preço}</p>
            </div>
            
            <div class="deletar_produto">
                <svg class="delete_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </div>
        
        </div>
        `
    });
    setProdutoCarrinho()
    excluir()
    // carrinhoCompra()
}

carregarProdutos()

