function contar() {
    var inicio = parseInt(document.querySelector('#txtn').value);
    var fim = parseInt(document.querySelector('#txtf').value);
    var passo = parseInt(document.querySelector('#txtp').value);
    var res = document.querySelector('#res'); 
    
    if (inicio < fim && passo > 0) { // Garante que os valores são válidos
        let resultado = "Contando: <br>";
        for (let i = inicio; i <= fim; i += passo) {
            resultado += `${i}  \u{2620} `;
        }
       
        res.innerHTML = resultado
    } else {
        //res.innerHTML = "Impossível contar! Verifique os valores de início, fim e passo.";
        window.alert('[ERRO] Dados Invalidos')
        return;
    }
}