const promocaoArea = document.querySelector('.promocao')
const anuncioArea = document.querySelector('.anuncio')
const cestaArea = document.querySelector('.cesta')
const tropicalArea = document.querySelector('.tropical')
const tropicalArea2 = document.querySelector('.tropical2')


const filtro = (produto, categoria) => {
    const secaoProd = produto.filter(flor => flor.categoria == categoria)
    return secaoProd
}

const promocao = (listaProdutos) => {
    const secaoPromocao = filtro(listaProdutos, 'Promotion')

    const itemPromocao = secaoPromocao.map((produto) => {
        return `
        <article class="item-promocao">
            <div class="imgPromocao">
                <img src="..${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="infoPromocao">
                <a href="assets/html/itempage-Inglês.html?id=${produto.id}">
                    <h4 class="nomeProduto">${produto.nome}</h4>
                </a>
                <p>${produto.descricao}</p>
                <span class="valorAntigo">De: BRL ${produto.valor.toFixed(2).replace('.', ',')}</span>
                <span class="valorAtual">Por: BRL ${produto.valorPromocional.toFixed(2).replace('.', ',')}</span>
                <span class="spanButton">
                    <i class="fa-solid fa-heart desejo"></i>
                    <i class="fa-solid fa-basket-shopping carrinho"></i>
                </span>
                    
            </div>
                
        </article>
        `
    }).join('')

    promocaoArea.innerHTML = itemPromocao
}

const anuncio = (listaProdutos) => {
    const secaoAnuncio = filtro(listaProdutos, 'Announcement')

    const itemAnuncio = secaoAnuncio.map((produto) => {
        return `
            <article class="item-anuncio">
                <div class="img-anuncio">
                    <img src="..${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="info-anuncio">
                    <a href="assets/html/itempage-Inglês.html?id=${produto.id}">
                        <h4 class="title-anuncio">${produto.nome}</h4>
                    </a>
                    <p class="descricao-anuncio">
                        ${produto.descricao}
                    </p>

                    <div class="info-anuncio2">
                        <p>BRL ${produto.valor.toFixed(2).replace('.', ',')}</p>
                        <div class="qtd">
                            <button>+</button>
                            <span>1</span>
                            <button>-</button>
                        </div>

                        <button id="btn-anuncio-compra">Comprar</button>
                        <i class="fa-solid fa-basket-shopping carrinho"></i>
                    </div>
                </div>
            </article>
        `
    })

    anuncioArea.innerHTML = itemAnuncio
}

const cesta = (listaProdutos) => {
    const secCesta = filtro(listaProdutos, 'baskets')

    const itemCesta = secCesta.map((produto) => {
        return `
        <article class="item-cesta">
            <div class="img-cesta">
                <img src="..${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="info-cesta">
                <a href="assets/html/itempage-Inglês.html?id=${produto.id}">
                <h4>${produto.nome}</h4>
                </a>
                <p>${produto.descricao}</p>
                <span id="valor-produto-cesta">BRL ${produto.valor.toFixed(2).replace('.', ',')}</span>
                <div class="info-cesta2">
                    <div class="qtd">
                        <button>+</button>
                        <span>1</span>
                        <button>-</button>
                    </div>
                    <i class="fa-solid fa-basket-shopping carrinho"></i>
                </div>
            </div>
        </article>
                `
    }).join('')

    cestaArea.innerHTML = itemCesta
}

const tropical = (listaProdutos) => {

    const secaoTropical = filtro(listaProdutos, 'Tropical Catalog')

    const itemTropical = secaoTropical.map((produto) => {
        return `
        <article class="item-tropical">
            <div class="img-tropical">
                <img src="..${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="info-tropical">
                <a href="assets/html/itempage-Inglês.html?id=${produto.id}">
                    <h4>${produto.nome}</h4>
                </a>
                <p>${produto.descricao}</p>
                <span class="valor-tropical">BRL ${produto.valor.toFixed(2).replace('.', ',')}</span>
                <span class="btn-span">
                    <i class="fa-solid fa-heart desejo"></i>
                    <i class="fa-solid fa-basket-shopping carrinho"></i>
                </span>
                </div>
        </article>
        `
    }).join('')

    tropicalArea.innerHTML = itemTropical



}

const tropicalMetade = (listaProdutos) => {

    const secaoTropical = filtro(listaProdutos, 'Tropical Catalog')

    let item = ''

    secaoTropical.forEach((produto, index) => {
        index <= 7 ?
            item += `        
            <article class="item-tropical">
                <div class="img-tropical">
                    <img src="..${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="info-tropical">
                    <a href="assets/html/itempage-Inglês.html?id=${produto.id}">
                        <h4>${produto.nome}</h4>
                    </a>
                    <p>${produto.descricao}</p>
                    <span class="valor-tropical">BRL ${produto.valor.toFixed(2).replace('.', ',')}</span>
                    <span class="btn-span">
                        <i class="fa-solid fa-heart desejo"></i>
                        <i class="fa-solid fa-basket-shopping carrinho"></i>
                    </span>
                    </div>
            </article>
                ` :
        ''
    });

    tropicalArea.innerHTML = item

    const botao = `
    <a href="./index2- Inglês.html">
    <button id="saiba-mais">know more
    </button>
    </a>
    `

    tropicalArea.innerHTML += botao
}

const tropicalOutraMetade = (listaProdutos) => {

    const secaoTropical = filtro(listaProdutos, 'Tropical Catalog')

    let item = ''

    secaoTropical.forEach((produto, index) => {
        index <= 7 ?
            item += `        
            <article class="item-tropical">
                <div class="img-tropical">
                    <img src="..${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="info-tropical">
                    <a href="assets/html/itempage-Inglês.html?id=${produto.id}">
                        <h4>${produto.nome}</h4>
                    </a>
                    <p>${produto.descricao}</p>
                    <span class="valor-tropical">BRL ${produto.valor.toFixed(2).replace('.', ',')}</span>
                    <span class="btn-span">
                        <i class="fa-solid fa-heart desejo"></i>
                        <i class="fa-solid fa-basket-shopping carrinho"></i>
                    </span>
                    </div>
            </article>
                ` :
        ''
    });

    tropicalArea2.innerHTML = item

    const botao = `
    <a href="./index2- Inglês.html">
    <button id="saiba-mais">know more
    </button>
    </a>
    `

    tropicalArea2.innerHTML += botao

}

const adicionarAListaDeDesejos = () => {
    const teste = document.querySelectorAll('.desejo')
    teste.forEach(e => {
        e.addEventListener('click', () => {
            alert("Item adicionado a lista de desejos!")
        })
    })
}

const adicionarAoCarrinho = () => {
    const teste = document.querySelectorAll('.carrinho')
    teste.forEach(e => {
        e.addEventListener('click', () => {
            alert("Item adicionado ao carrinho!")
        })
    })
}

(async () => {

    const flores = await flowersAPIIngles()
    setTimeout(() => {
        promocao(flores)
        anuncio(flores)
        cesta(flores)
        tropicalMetade(flores)
        adicionarAListaDeDesejos()
        adicionarAoCarrinho()
    }, 1000)
})()