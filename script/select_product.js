let produtosIdCarrinho = []

if (localStorage.getItem('carrinho')) {
    produtosIdCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    console.log(produtosIdCarrinho)
    popUpCarrinho()
} else {
    localStorage.setItem('carrinho', JSON.stringify([]))
}

export default function setProdutoCarrinho() {


    const produtos = document.querySelectorAll('.product')
    produtos.forEach(produto => {
        produto.addEventListener('click', () => {
            // produtosIdCarrinho.push(produto.getAttribute('data-code'))
            produtosIdCarrinho[produto.getAttribute('data-code')] ? produtosIdCarrinho[produto.getAttribute('data-code')] += 1 : produtosIdCarrinho[produto.getAttribute('data-code')] = 1

            popUpCarrinho()



        })

    });
}

function popUpCarrinho() {

    const popUp = document.querySelector('.quantidade')
    const quantidadeProdutos = Object.values(produtosIdCarrinho).reduce((acc, quant) => acc + quant, 0)

    if (quantidadeProdutos > 0) {
        popUp.style.display = 'block'
        popUp.innerHTML = ''
        popUp.innerHTML += `<p>${quantidadeProdutos}</p>`
        localStorage.setItem('carrinho', JSON.stringify(produtosIdCarrinho))
    } else {
        popUp.style.display = 'none'
        localStorage.setItem('carrinho', [])
    }
}

