const adicionarCartao = document.querySelector('#adicionarCartao')
const pagamento = document.querySelector('#formaDePagamento')
const salvar = document.querySelector('#cadastroDados')
const finalizar = document.querySelector('#finalizarCompra')
const dados = document.querySelector('.dados')
const areaCartao = document.querySelector('.cadastroCartao')


finalizar.addEventListener('click', () => {
    dados.classList.toggle('hide')
})

salvar.addEventListener('click', () => {
    formaPagamento(pagamento.value)
})

const formaPagamento = (formaPagamento) => {
    if (formaPagamento == 1) {
        alert('Pagar ao ato da entrega, somente ao entregador! ')
    } else if (formaPagamento == 2) {
        cartao()
    } else if (formaPagamento == 3) {
        alert('O código de barras será enviado ao seu E-mail, pedido confirmado após pagamento em até 30 minutos!')
    } else if (formaPagamento == 4) {
        alert('O boleto será enviado ao seu E-mail, pedido confirmado após pagamento em até 30 minutos!')
    } else {
        alert('Escolha uma forma de pagamento!')
    }
}

const cartao = () => {

    dados.classList.toggle('hide')
    areaCartao.classList.toggle('hide')

    adicionarCartao = document.querySelector('#adicionarCartao')

}


adicionarCartao.addEventListener('click', () => {
    alert('Compra realizada com sucesso!')
    areaCartao.classList.toggle('hide')
})