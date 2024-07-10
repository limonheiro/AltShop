export default async function getProduto(id) {
    // const produtosFetch = await fetch(`http://localhost:3000/produtos/${id}`)
    const produtosFetch = await fetch(`https://my-json-server.typicode.com/limonheiro/AltShop/produtos/${id}`)
    const produtosFetchJson = await produtosFetch.json()
    return produtosFetchJson
}