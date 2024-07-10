import excluirProduto from "../script/excluir_produto.js"



excluirProduto

const adicionarProduto = document.querySelector("#formulario_adicionar")
const removerProduto = document.querySelector('#formulario_remover')
const alterarProduto = document.querySelector("#formulario_alterar")

const adicionar = document.querySelector(".adicionar")
const remover = document.querySelector(".remover")
const alterar = document.querySelector(".alterar")

const inputAlterar = document.querySelector('#id-produto-procurar')

function esconderFormulario() {
    [adicionarProduto, removerProduto, alterarProduto].forEach((formulario) => {
        formulario.style.display = 'none'
    })
}



adicionar.addEventListener('click', () => {
    esconderFormulario()
    adicionarProduto.style.display = 'flex'
})

remover.addEventListener('click', () => {
    esconderFormulario()
    removerProduto.style.display = 'flex'

})

alterar.addEventListener('click', () => {
    esconderFormulario()
    alterarProduto.style.display = 'flex'
})

adicionarProduto.addEventListener('submit', async function (event) {
    event.preventDefault()

    const nome = document.querySelector("#nome")
    const image = document.querySelector("#image")
    const preco = document.querySelector("#preço")
    const quantidade = document.querySelector("#quantidade")

    const novoProduto = {
        'nome': nome.value,
        'image': [image.value],
        "preço": preco.value,
        "quantidade": quantidade.value
    }

    await fetch('https://668ec034bf9912d4c92f9bbc.mockapi.io/produtos/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto)
    })

    nome.value = ''
    image.value = ''
    preco.value = ''
    quantidade.value = ''

    await alert('envio concluído');
})

removerProduto.addEventListener('submit', async function (event) {
    event.preventDefault()

    const idProduto = document.querySelector('#id-produto')

    excluirProduto(idProduto.value)

    await alert('arquivo deletado!');
})

async function buscarProduto(id) {

    try {
        const produto = await fetch(`https://668ec034bf9912d4c92f9bbc.mockapi.io/produtos/produtos/${id}`)
        const produtoJson = await produto.json()

        const nome = document.getElementById("nome-alterar")
        console.log(nome.value)
        if (nome === "") {
            throw Error("Produto não encontrado")
        } else {
            nome.value = produtoJson.nome
            nome.removeAttribute('disabled')

            const imageAlterar = document.getElementById("image-alterar")
            imageAlterar.value = produtoJson.image
            imageAlterar.removeAttribute('disabled')

            const precoAlterar = document.getElementById("preco-alterar")
            precoAlterar.value = produtoJson.preço
            precoAlterar.removeAttribute('disabled')

            const quantidadeAlterar = document.getElementById("quantidade-alterar")
            quantidadeAlterar.value = produtoJson.quantidade
            quantidadeAlterar.removeAttribute('disabled')
        }

    } catch (error) {
        alert(`${error}`)
    }

}

inputAlterar.addEventListener('focusout', () => {
    buscarProduto(inputAlterar.value)
})

alterarProduto.addEventListener('submit', async (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome-alterar").value
    const imageAlterar = document.getElementById("image-alterar").value
    const precoAlterar = document.getElementById("preco-alterar").value
    const quantidadeAlterar = document.getElementById("quantidade-alterar").value

    const produtoAlterado = {
        'nome': nome,
        'image': [imageAlterar],
        "preco": precoAlterar,
        "quantidade": quantidadeAlterar
    }

    await fetch(`https://668ec034bf9912d4c92f9bbc.mockapi.io/produtos/produtos/${inputAlterar.value}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produtoAlterado)
    })

})
