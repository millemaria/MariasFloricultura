const promocaoArea = document.querySelector('.promocao')
const anuncioArea = document.querySelector('.anuncio')
const cestaArea = document.querySelector('.cesta')
const tropicalArea = document.querySelector('.tropical')


const filtro = (produto, categoria) => {
    const secaoProd = produto.filter(flor => flor.categoria == categoria)
    return secaoProd
}

const promocao = (listaProdutos) => {
    const secaoPromocao = filtro(listaProdutos, 'Promoção')

    const itemPromocao = secaoPromocao.map((produto) => {
        return `
        <article class="item-promocao">
            <div class="imgPromocao">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="infoPromocao">
                <a href="assets/html/itemPage.html?id=${produto.id}">
                    <h4 class="nomeProduto">${produto.nome}</h4>
                </a>
                <p>${produto.descricao}</p>
                <span class="valorAntigo">De: R$ ${produto.valor.toFixed(2).replace('.', ',')}</span>
                <span class="valorAtual">Por: R$ ${produto.valorPromocional.toFixed(2).replace('.', ',')}</span>
                <span class="spanButton">
                    <i class="fa-solid fa-heart desejo"></i>
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
                    <a href="assets/html/itemPage.html?id=${produto.id}">
                        <h4 class="title-anuncio">${produto.nome}</h4>
                    </a>
                    <p class="descricao-anuncio">
                        ${produto.descricao}
                    </p>

                    <div class="info-anuncio2">
                        <p>R$ ${produto.valor.toFixed(2).replace('.', ',')}</p>
                        <div class="qtd">
                            <button>+</button>
                            <span>1</span>
                            <button>-</button>
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

const cesta = (listaProdutos) => {
    const secCesta = filtro(listaProdutos, 'Cestas')

    const itemCesta = secCesta.map((produto) => {
        return `
        <article class="item-cesta">
            <div class="img-cesta">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="info-cesta">
                <a href="assets/html/itemPage.html?id=${produto.id}">
                <h4>${produto.nome}</h4>
                </a>
                <p>${produto.descricao}</p>
                <span id="valor-produto-cesta">R$ ${produto.valor.toFixed(2).replace('.', ',')}</span>
                <div class="info-cesta2">
                    <div class="qtd">
                        <button>+</button>
                        <span>1</span>
                        <button>-</button>
                    </div>
                    <i class="fa-solid fa-basket-shopping"></i>
                </div>
            </div>
        </article>
                `
    }).join('')

    cestaArea.innerHTML = itemCesta

}

const tropical = (listaProdutos) => {

    const secaoTropical = filtro(listaProdutos, 'Catálogo Tropical')

    const itemTropical = secaoTropical.map((produto) => {
        return `
        <article class="item-tropical">
            <div class="img-tropical">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="info-tropical">
                <a href="assets/html/itemPage.html?id=${produto.id}">
                    <h4>${produto.nome}</h4>
                </a>
                <p>${produto.descricao}</p>
                <span class="valor-tropical">R$ ${produto.valor.toFixed(2).replace('.', ',')}</span>
                <span class="btn-span">
                    <i class="fa-solid fa-heart desejo"></i>
                    <i class="fa-solid fa-basket-shopping"></i>
                </span>
                </div>
        </article>
        `
    }).join('')

    tropicalArea.innerHTML = itemTropical

}

// const adicionarAoCarrinho = () => {
//     const teste = document.querySelectorAll('.desejo')
//     teste.forEach(e => {
//         e.addEventListener('click', () => {
//             alert("Item adicionado a lista de desejos!")
//         })
//     })
// }

(async () => {

    const flores = await flowesAPI()
    setTimeout(() => {
        promocao(flores)
        anuncio(flores)
        cesta(flores)
        tropical(flores)
    }, 1000)
})()