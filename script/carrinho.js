import getProduto from "./getProduto.js"
import { produtosIdCarrinho } from "./select_product.js"

const pop_up = document.querySelector('.carrinho_popup')

export default async function carregando_carrinho() {
    const products_carrinho = document.querySelector('.products_carrinho')
    products_carrinho.innerHTML = ''
    const carrinho_produtos = localStorage.getItem('carrinho')
    const produtos = JSON.parse(carrinho_produtos)
    const precoHTML = document.querySelector('.preco_carrinho')
    let precoTotal = 0

    if (JSON.stringify(produtosIdCarrinho) === JSON.stringify(produtos) && products_carrinho.innerHTML === '') {
        Object.entries(produtos).forEach(async ([id, quantidade]) => {
            const p = await getProduto(id)
           
            if( p.quantidade === quantidade){
                console.log(document.querySelector(`[data-code='${id}']`))
            }
            products_carrinho.innerHTML += `
            <div class="product_carrinho">
                <img  src="${p[0].image}" alt="">
                <div class="describe_product_popup">
                    <p>${p[0].nome}</p>
                    <p>$ ${p[0].preco}</p>
                </div>
            </div>
            `
            const valorTotalItem = Number(p[0].preco) * Number(quantidade)

            precoTotal += valorTotalItem
            precoHTML.childNodes[3].innerText = `$ ${precoTotal}`

        })
    }
}

const carrinho = document.querySelector('.carrinho')
carrinho.addEventListener('click', () => {
    if (pop_up.style.display === 'grid') {
        pop_up.style.display = 'none'
    } else {
        pop_up.style.display = 'grid'
    }

})


// export default {carregando_carrinho}