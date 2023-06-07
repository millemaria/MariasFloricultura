const promocaoArea = document.querySelector('.promocao')

const filtro = (produto, categoria) => {
    const secaoProd = produto.filter(flor => flor.categoria == categoria)
    return secaoProd
}

const promocao = (listaProdutos) => {
    const secaoPromocao = filtro(listaProdutos, 'Promoção')
    
    const itemPromocao = secaoPromocao.map((flor) => {
        return `
        <article class="item-promocao">

            <div class="imgPromocao">
                <img src="${flor.imagem}" alt="${flor.nome}">
            </div>
            <div class="infoPromocao">
                <h4 class="nomeProduto">${flor.nome}</h4>
                <p>${flor.descricao}</p>
                <span class="valorAntigo">De: R$ ${flor.valor.toFixed(2).replace('.', ',')}</span>
                <span class="valorAtual">Por: R$ ${flor.valorPromocional.toFixed(2).replace('.', ',')}</span>
                <span class="spanButton">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-basket-shopping"></i>
                </span>

            </div>

        </article>
        `
    }).join('')
    
    promocaoArea.innerHTML = itemPromocao
}

(async () => {

    const flores = await flowesAPI()
    setTimeout(() => {
        promocao(flores)
        anuncio(flores)
    }, 1000)
})()