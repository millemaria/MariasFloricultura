const finalizar = document.querySelector('#finalizarCompra')

finalizar.addEventListener('click', () => {
    const dados = document.querySelector('.dados')

    dados.classList.toggle('hide')
})