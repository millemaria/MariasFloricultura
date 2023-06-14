const tropicalArea2 = document.querySelector('.tropical2')
const buqueArea = document.querySelector('.buques')
const boxArea = document.querySelector('.box')


const filtro = (produto, categoria) => {
    const secaoProd = produto.filter(flor => flor.categoria == categoria)
    return secaoProd
}

const tropicalOutraMetade = (listaProdutos) => {

    const secaoTropical = filtro(listaProdutos, 'Tropical Catalog')

    let item = ''

    secaoTropical.forEach((produto, index) => {
        index > 7 ?
            item += `        
            <article class="item-tropical">
                <div class="img-tropical">
                    <img src="../${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="info-tropical">
                    <a href="./itempage-Inglês.html?id=${produto.id}">
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

}

const buque = (listaProdutos) => {
    const secaoBuque = filtro(listaProdutos, 'bouquets')

    const itemBuque = secaoBuque.map((produto) => {
        return `
        <article class="item-buque">
            <div class="img-buque">
                <img src="../${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="info-buque">
                <a href="./itempage-Inglês.html?id=${produto.id}">
                    <h4>${produto.nome}</h4>
                </a>
                <p>${produto.descricao}</p>
                <span class="valor-buque">BRL ${produto.valor.toFixed(2).replace('.', ',')}</span>
                <span class="btn-span">
                    <i class="fa-solid fa-heart desejo"></i>
                    <i class="fa-solid fa-basket-shopping carrinho"></i>
                </span>
                </div>
        </article>
        `
    }).join('')

    buqueArea.innerHTML = itemBuque
}

const box = (listaProdutos) => {
    const secaobox = filtro(listaProdutos, 'Box')

    const itembox = secaobox.map((produto) => {
        return `
        <article class="item-box">
            <div class="img-box">
                <img src="../${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="info-box">
                <a href="./itempage-Inglês.html?id=${produto.id}">
                    <h4>${produto.nome}</h4>
                </a>
                <p>${produto.descricao}</p>
                <span class="valor-box">BRL ${produto.valor.toFixed(2).replace('.', ',')}</span>
                <span class="btn-span">
                    <i class="fa-solid fa-heart desejo"></i>
                    <i class="fa-solid fa-basket-shopping carrinho"></i>
                </span>
                </div>
        </article>
        `
    }).join('')

    boxArea.innerHTML = itembox

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
        tropicalOutraMetade(flores)
        buque(flores)
        box(flores)
        adicionarAListaDeDesejos()
        adicionarAoCarrinho()
    }, 1000)
})()