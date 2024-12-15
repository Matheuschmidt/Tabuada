function tabuada(){
    var num = document.querySelector('#txtnumero');
    var res = document.querySelector('#txtres');
    var c = 1;

    var nValue = num.value;
    
    res.innerHTML = `Tabuada do ${nValue}: <br/>`

      while(c <= 10){
        res.innerHTML += `${nValue} x ${c} = ${nValue * c} <br/>`;
        c++;
    }
}