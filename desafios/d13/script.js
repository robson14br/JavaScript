function notas() {
    let nome = prompt('Qual e o nome do aluno(a)')
    let nota1 = parseFloat(prompt(`Qual sua primeira nota ${nome}`))
    let nota2 = parseFloat(prompt(`Qual sua primeira nota ${nome}`))
    if (isNaN(nota1 , nota2)){
        alert('Favor digitar notas validas')
    }
    let media = (nota1 + nota2)/2
    if (media < 3) {
        res.innerHTML = (`<p>Analizando a situaçao de ${nome}<br>
        Com as notas ${nota1} e ${nota2} a media é ${media}
        Com a media acima de ${media}, o aluno esta <strong>REPROVADO</strong></p>.`)
        
    } else if (media >= 3 && media <= 6) {
        res.innerHTML = (`<p>Analizando a situaçao de ${nome}<br>
        Com as notas ${nota1} e ${nota2} a media é ${media}
        Com a media acima de ${media}, o aluno esta <strong>RECUPERAÇAO</strong></p>.`)
    } else {
        res.innerHTML = (`<p>Analizando a situaçao de ${nome}<br>
        Com as notas ${nota1} e ${nota2} a media é ${media}
        Com a media acima de ${media}, o aluno esta <strong>APROVADO</strong></p>.`)
    }
} 