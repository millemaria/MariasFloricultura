const body = document.querySelector('body')

getNumberURL = () => {
    var query = location.search.slice(1);
    var id = query.split("=");
    return id[1];
};

const getItem = (listaProduto, id) => {
    const item = listaProduto.filter(item => item.id == id)
    body.innerHTML = `<img src="/${item[0].imagem}" alt="${item[0].nome}">`
}

(async () => {

    const flores = await flowesAPI()
    setTimeout(() => {
        getItem(flores, getNumberURL())
    }, 1000)
})()