function tabuada(){

     var  num = document.getElementById('num')
     var tab = document.getElementById('seletab')

     if(num.value.length == 0){

        alert("Preencha o campo para prosseguir!")

     }else{

        var n =  Number(num.value)
        tab.textContent = " "

        for(var i = 0; i <= 10; i++){

            var item = document.createElement("option")
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }

     }

}