function carregar() {
    var msg = document.getElementById('msg')
    var img = document.querySelectorAll('#imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`
        if( hora >= 0 && hora <12 ){ //bom dia
            img.src = 'dia.png'   
            document.body.style.background = '#edd9ce'
        } else if (hora >= 12 && hora <= 18 ) { //boa tarde
            img.src = 'tarde.png'
            document.body.style.background = '#f9c300'
        } else { //boa noite
            img.src = 'noite.png'
            document.body.style.background = '#5a757c'
        }

}