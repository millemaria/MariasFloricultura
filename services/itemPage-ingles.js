const imagem = document.querySelector('#item-imagem')
const produto = document.querySelector('#produto')
const valor = document.querySelector('#valor')

getNumberURL = () => {
    var query = location.search.slice(1);
    var id = query.split("=");
    return id[1];
};

const getItem = (listaProduto, id) => {
    const item = listaProduto.filter(item => item.id == id)
    // alert(item[0].nome)
    imagem.src = `../${item[0].imagem}`
    imagem.alt = `${item[0].nome}`
    produto.innerHTML = `${item[0].nome}`
    valor.innerHTML = `R$ ${item[0].valor.toFixed(2).replace('.', ',')}`

}

(async () => {

    const flores = await flowersAPIingles()
    setTimeout(() => {
        getItem(flores, getNumberURL())
    }, 1000)
})()