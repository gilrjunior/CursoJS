function carregar(){

    var msg = document.getElementById("msg")
    var picture = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`

    if(hora >= 0 && hora < 12){

        picture.src = './img/manhã.png'
        document.body.style.background = "#467302"

    }else if(hora >= 12 && hora <= 18){

        picture.src = './img/tarde.png'
        document.body.style.background = "#D2691E"

    }else{

        picture.src = './img/noite.png'
        document.body.style.background = "#282A3A"

    }

}