const promocaoArea = document.querySelector('.promocao')
const anuncioArea = document.querySelector('.anuncio')
const cestaArea = document.querySelector('.cesta')


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
                <img src="/assets/img/img flores/CestadePresente.png" alt="">
            </div>
            <div class="info-cesta">
                <h4>Cesta de Presente Premium Luxury</h4>
                <p>Este disputado Vinho é produzido para o mercado interno argentino, onde é cultuado e se
                    esgota rapidamente, alcançando altíssimos preços em safras antigas. Grande clássico da
                    América do Sul.</p>
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


(async () => {

    const flores = await flowesAPI()
    setTimeout(() => {
        promocao(flores)
        anuncio(flores)
        cesta(flores)
    }, 1000)
})()