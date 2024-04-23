function verificar() {
    let preçoAnterior = parseFloat(prompt('Quanto o produto custava?'))
    let preçoAtual = parseFloat(prompt('Quanto o produto custa hoje?'))
    let diferença = preçoAtual - preçoAnterior;
    let porcentagem = (diferença / preçoAnterior) * 100;
    if (isNaN(preçoAnterior , preçoAtual)) {
        alert('Favor digitar um numero valido')
        return;
    }

    if (preçoAnterior > preçoAtual ) {
        diferença = preçoAnterior - preçoAtual;
        porcentagem = -porcentagem;
        res.innerHTML = (`<p>Analisando os valores informados<br>
        O produto custava R$ ${preçoAnterior.toFixed(2)} e agora custa R$ ${preçoAtual.toFixed(2)}.<br>
        O preço caiu R$ ${diferença.toFixed(2)} em relaçao ao preço anterior.<br>
        Uma variaçao de ${porcentagem.toFixed(2)}% pra baixo `);
    } else {
        res.innerHTML = (`<p>Analisando os valores informados<br>
        O produto custava R$ ${preçoAnterior.toFixed(2)} e agora custa R$ ${preçoAtual.toFixed(2)}.<br>
        O preço subiu R$ ${diferença.toFixed(2)} em relaçao ao preço anterior.<br>
        Uma variaçao de ${porcentagem.toFixed(2)}% pra cima `);
    }

}