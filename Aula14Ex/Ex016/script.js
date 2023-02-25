function contagem() {

    var ini = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")
    res.innerHTML = " "

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert("Preencha todos os campos para prosseguir")

    } else if (Number(passo.value) <= 0) {

        alert("O passo deve ser maior que zero!")
        passo.value = " "

    } else {

        var i = Number(ini.value)

        if(Number(ini.value) > Number(fim.value)){

            for (i; i >= Number(fim.value); i -= Number(passo.value)) {

                res.innerHTML = i-Number(passo.value) < Number(fim.value)? res.outerText+` ${i} &#127937;` : res.outerText+` ${i} &#128073;`

            }

        }else{

            for (i; i <= Number(fim.value); i += Number(passo.value)) {

                res.innerHTML = i+Number(passo.value) > Number(fim.value)? res.outerText+` ${i} &#127937;` : res.outerText+` ${i} &#128073;`

            }
        }

        ini.value = " "
        fim.value = " "
        passo.value = " "

    }

}