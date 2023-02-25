function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        alert("ERRO! INFORME CORRETAMENTE OS DADOS")

    } else {

        var idade = ano - Number(fano.value)
        var fase = " "
        fsex = document.getElementsByName("radsex")

        var genero = fsex[0].checked ? "m" : "f"
        var gen = genero == "m" ? "Homem" : "Mulher"
        var img = document.createElement("img")
        img.setAttribute("id", "pic")

        if (idade >= 0 && idade <= 10) {
            fase = "crianca"
        } else if (idade < 21) {
            fase = "jovem"
        } else if (idade < 50) {
            fase = "adulto"
        } else {
            fase = "idoso"
        }

        img.setAttribute("src", `./img/foto-${fase}-${genero}.png`)

        res.innerHTML = `<p>Você é ${gen} e em ${ano} você completa ${idade} anos de idade!</p>`
        res.appendChild(img)

    }
}