function converter() {
    let celsius = parseFloat(window.prompt('Digite aqui a temperatura em C(celsius)'))

    if (isNaN(celsius)) {
        window.alert('Digite um valor valido')
        return;
    }
    let fahrenheit  =  celsius * 1.8 + 32
    let kelvin = celsius + 273.15
    res.innerHTML = (`A temperatura de ${celsius}C, corresponde a...<br>${kelvin.toFixed(2)}K (Kelvin)<br>${fahrenheit.toFixed(2)}F(Fahrenheit)`)
}
