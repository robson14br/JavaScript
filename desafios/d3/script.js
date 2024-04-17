function start() {
    let entrada = window.prompt('Digite seu número');
    let numero = Number(entrada);

    if (!isNaN(numero)) { // Verifica se a conversão para número foi bem-sucedida
        window.alert(`Antes do ${numero}, temos o número ${numero - 1}. ` +
                     `Depois do número ${numero}, temos o número ${numero + 1}`);
    } else {
        window.alert('Por favor, digite um número válido.'); // Alerta se não for um número
    }
}