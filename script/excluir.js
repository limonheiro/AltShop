import excluirProduto from "./excluir_produto.js";

export default async function excluir() {
    const botoesDeletar = document.querySelectorAll('.deletar_produto')

    botoesDeletar.forEach(botaoDeletar => {
        botaoDeletar.addEventListener('click', () => {
            excluirProduto(botaoDeletar.parentElement.getAttribute('data-code'))
        })
    });

}

