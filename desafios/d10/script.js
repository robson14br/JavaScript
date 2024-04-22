function calcular() {
    let a = parseFloat(prompt('Digete o valor de a'))
    let b = parseFloat(prompt('Digete o valor de b'))    
    let c = parseFloat(prompt('Digete o valor de c'))
    if (isNaN(a , b , c)) {
        alert('Favor digitar um numero valido')
    }
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        alert('Não existem raízes reais pois o delta é negativo.')}
    
    res.innerHTML = (`Resolvendo Bhaskara<br>
    A equaçao atual é a ${a}x<sup>2</sup>+${b}x+${c}=0<br>
    O calculo realizado sera &#916 = ${b}<sup>2</sup> - 4 . ${a} . ${c}<br>
    O valor calculado foi de &#916 = ${delta}
    `)
}
  
    