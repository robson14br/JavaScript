function converter() {
    let valor = parseFloat(window.prompt('Digite aqui quanto voce tem na carteira em R$'))
    let dolhoje = parseFloat(window.prompt('Quanto o dolar custa agora?'))
    if (isNaN(valor)) {
        window.alert('Digite aqui um numero valido');
        return;
    }
    let dolar = valor / dolhoje
    
    res.innerHTML = (`Emtao voce tem ${valor}R$, e com o valor do dolar a ${dolhoje}, entao voce tem ${dolar.toFixed(2)}Dol `)


}