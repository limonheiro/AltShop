export default async function getProduto(id) {
    // const produtosFetch = await fetch(`http://localhost:3000/produtos/${id}`)
    const produtosFetch = await fetch(`https://668ec034bf9912d4c92f9bbc.mockapi.io/produtos/produtos/${id}`)
    const produtosFetchJson = await produtosFetch.json()
    return produtosFetchJson
}