export default async function excluirProduto(id) {
    await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}