const formulario = document.querySelector("#formulario")
const removerProduto = document.querySelector('#formulario_remover')

const adicionar = document.querySelector(".adicionar")
const remover = document.querySelector(".remover")

adicionar.addEventListener('click', () => {
    removerProduto.style.display = 'none'
    formulario.style.display = 'flex'
})

remover.addEventListener('click', () => {
    removerProduto.style.display = 'flex'
    formulario.style.display = 'none'
 })
 
formulario.addEventListener('submit', async function (event) {
    event.preventDefault()

    const nome = document.querySelector("#nome")
    const image = document.querySelector("#image")
    const preco = document.querySelector("#preço")
    const quantidade = document.querySelector("#quantidade")

    const novoProduto = {
        'nome': nome.value,
        'image': image.value,
        "preço": preco.value,
        "quantidade": quantidade.value
    }

    await fetch('http://localhost:3000/produtos', {
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

    await fetch(`http://localhost:3000/produtos/${idProduto.value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })



    await alert('arquivo deletado!');
})