export default async function excluirProduto(id) {

    // await fetch(`http://localhost:3000/produtos/${id}`, {
    await fetch(`https://668ec034bf9912d4c92f9bbc.mockapi.io/produtos/produtos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}