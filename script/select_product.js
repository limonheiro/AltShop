import carregando_carrinho from "./carrinho.js"

let produtosIdCarrinho = {}

if (localStorage.getItem('carrinho')) {
    produtosIdCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    popUpCarrinho()
    await carregando_carrinho()
} else {
    localStorage.setItem('carrinho', JSON.stringify([]))
}

function avisoQuantidade() {
    const dialog = document.querySelector('dialog')
    const fecharDialog = document.querySelector('.erro')
    dialog.showModal()
    fecharDialog.addEventListener('click', () => {
        dialog.close()
    })
}

function produtoCarrinho(produto) {
    produto.addEventListener('click', () => {
        if (produtosIdCarrinho[produto.getAttribute('data-code')]) {

            const quantidadeTotal = parseInt(produto.querySelector('.describe_product').getAttribute('data-quantidade'))
            console.log(quantidadeTotal)
            if (quantidadeTotal > produtosIdCarrinho[produto.getAttribute('data-code')]) {
                produtosIdCarrinho[produto.getAttribute('data-code')] += 1
            } else {
                avisoQuantidade()
                // console.log(produto.classList.add('disable'))
                produtosIdCarrinho[produto.getAttribute('data-code')] = quantidadeTotal
            }

        } else {
            produtosIdCarrinho[produto.getAttribute('data-code')] = 1
        }
        popUpCarrinho()
        carregando_carrinho()
    })
}

export default function setProdutoCarrinho() {
    const produtos = document.querySelectorAll('.product')
    produtos.forEach(produto => {
        produtoCarrinho(produto)
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

export { setProdutoCarrinho, produtosIdCarrinho }