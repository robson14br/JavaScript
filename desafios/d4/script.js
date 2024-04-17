/*function comprar(){
    let produto = window.prompt('Qual o produto adiquirido')
    let preco = window.prompt('Qual o valor do produto')
    let meuDinheiro = window.prompt('Quanto em dinheiro deu para pagar o produto')
    
    if ( produto  <= 0) {
        window.alert('Digite por favor')

    } else{
        window.alert(`Voce comprou um  que custou ${preco}.
        Deu ${meuDinheiro} e vai receber de troco ${meuDinheiro-preco}
        Volte sempre!`)
     }
}
*/
  
function comprar() {
    let produto = window.prompt('Qual o produto adquirido?');
    let preco = Number(window.prompt('Qual o valor do produto?'));
    let meuDinheiro = Number(window.prompt('Quanto em dinheiro você deu para pagar o produto?'));

    // Verificação se os valores são numéricos e positivos
    if (isNaN(preco) || preco <= 0 || isNaN(meuDinheiro) || meuDinheiro < preco) {
        window.alert('Por favor, digite valores válidos. O preço deve ser positivo e o dinheiro dado deve ser suficiente para cobrir o preço.');
    } else {
        let troco = meuDinheiro - preco;
        window.alert(`Você comprou um(a) ${produto} que custou R$ ${preco.toFixed(2)}. 
Deu R$ ${meuDinheiro.toFixed(2)} em dinheiro e vai receber de troco R$ ${troco.toFixed(2)}. 
Volte sempre!`);
    }
}