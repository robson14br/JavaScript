/*function botao1() {
    window.alert('Voce clicou no botao 1')
}
function botao2() {
    window.alert('Voce clicou no botao 2')
}
function botao3() {
    window.alert('Voce clicou no botao 3')
}*/
let botao1 = document.querySelector('#botao1')
let botao2 = document.querySelector('#botao2')
let botao3 = document.querySelector('#botao3')
function exibirAlerta(numero) {
    window.alert('Você clicou no botão ' + numero);
}

// Adicionando listeners aos botões
document.getElementById('botao1').addEventListener('click', function() {
    exibirAlerta(1);
});
document.getElementById('botao2').addEventListener('click', function() {
    exibirAlerta(2);
});
document.getElementById('botao3').addEventListener('click', function() {
    exibirAlerta(3);
});