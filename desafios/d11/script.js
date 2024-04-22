function desconto() {
    let produto = prompt('Qual produto esta comprando?')
    let valor = parseFloat(prompt('Qual o valor do produto?'))
    if (isNaN(valor)){
        alert('Coloque um valor valido do produto')
        return;
    }
    let promoçao = valor / 10
    
    res.innerHTML = (`O preço original era de R$ ${valor.toFixed(2)}, <br>
    Voce acaba de ganhar um desconto de ${promoçao.toFixed(2)}R$ nos 10% de desconto. <br>
    No fim, voce acaba de pagar ${(valor - promoçao).toFixed(2)} no produto ${produto}.`)
}
    