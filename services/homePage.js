const promocaoArea = document.querySelector('.promocao')
const anuncioArea = document.querySelector('.anuncio')


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

const anuncio = (listaProdutos) => {
    const secaoAnuncio = filtro(listaProdutos, 'Anúncio')

    const itemAnuncio = secaoAnuncio.map((produto) => {
        return `
        <article class="item-anuncio">
            <div class="img-anuncio">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="info-anuncio">
                <h4 class="title-anuncio">${produto.nome}</h4>
                <p>
                ${produto.descricao}
                </p>

                <div class="info-anuncio2">
                    <p>R$ ${produto.valor.toFixed(2).replace('.', ',')}</p>
                    <div class="qtd">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button id="btn-anuncio-compra">Comprar</button>
                    <i class="fa-solid fa-basket-shopping"></i>
                </div>
            </div>
        </article>
        `
    })

    anuncioArea.innerHTML = itemAnuncio
}


(async () => {

    const flores = await flowesAPI()
    setTimeout(() => {
        promocao(flores)
        anuncio(flores)
    }, 1000)
})()