

function converter(){
     // Solicita ao usuário o valor em metros
     const metros = parseFloat(prompt("Digite o valor em metros:"));

     // Verifica se o valor inserido é um número válido
     if (isNaN(metros)) {
         alert("Por favor, insira um número válido.");
         return;
     }
 
     // Converte os metros para outras unidades
     const quilometros = metros / 1000;
     const hectometros = metros / 100;
     const decametros = metros / 10;
     const decimetros = metros * 10;
     const centimetros = metros * 100;
     const milimetros = metros * 1000;
 
     // Mostra os resultados ao usuário
     res.innerHTML = 
     (`Medidas convertidas a partir de ${metros} metros: <br>
     Quilômetros: ${quilometros} km<br>
     Hectômetros: ${hectometros} hm<br>
     Decâmetros: ${decametros} dam<br>
     Decímetros: ${decimetros} dm<br>
     Centímetros: ${centimetros} cm<br>
     Milímetros: ${milimetros} mm`);
 }