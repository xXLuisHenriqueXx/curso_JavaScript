function horas(){
    var diaMsg = document.getElementById('msg')
    var diaImg = document.getElementById('foto') 
    var data = new Date()
    var hora = data.getHours()
    var section = document.getElementById('corpo')

    diaMsg.innerHTML = `No momento são, ${hora} horas.`

    if(hora >= 5 && hora < 12){
        diaMsg.innerHTML += '<p>Bom dia!!</p>'
        diaImg.src = '/Aula_EX12/ex_014/imagens/manha.png'
        section.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18) {
        diaMsg.innerHTML += '<p>Boa tarde!!</p>'
        diaImg.src = '/Aula_EX12/ex_014/imagens/tarde.png'
        section.style.background = '#da8761'

    } else {
        diaMsg.innerHTML += '<p>Boa noite!!</p>'
        diaImg.src = '/Aula_EX12/ex_014/imagens/noite.png'
        section.style.background = '#403263'
    }
}