function tabuada(){
    var num = document.querySelector('#txtnumero');
    var res = document.querySelector('#txtres');
    var c = 1;

    var nValue = num.value;
    
    if (nValue == ""){
        res.innerHTML = "É necessário inserir um número para continuar com a tabuada.";
    }else{
        res.innerHTML = `Tabuada do ${nValue}: <br/>`
        while(c <= 10){
            res.innerHTML += `${nValue} x ${c} = ${nValue * c} <br/>`;
            c++;
       }
    }
}