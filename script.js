function load(){

    var hora = window.document.getElementById('hora')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horário = data.getHours()
    hora.innerHTML = `Agora são ${horário} horas!`

    if(horário < 6){
        //Boa Madrugada
        img.src = 'madrugada.png'
        document.body.style.background = '#17201f'
    }else if(horário < 12){
        //Bom dia!
        img.src = 'manhã.png'
        document.body.style.background = '#d8cec2'
    }else if(horário < 18){
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#bf9467'
    }else{
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#001620'
    }
}