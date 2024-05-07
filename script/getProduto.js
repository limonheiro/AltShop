export default async function getProduto(id) {
    // const produtosFetch = await fetch(`http://localhost:3000/produtos/${id}`)
    const produtosFetch = await fetch(`https://alt-shop-sage.vercel.app/api/produtos/${id}`)
    const produtosFetchJson = await produtosFetch.json()
    return produtosFetchJson
}