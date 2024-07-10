export default async function excluirProduto(id) {

    // await fetch(`http://localhost:3000/produtos/${id}`, {
    await fetch(`https://my-json-server.typicode.com/limonheiro/AltShop/produtos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}