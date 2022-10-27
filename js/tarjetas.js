function enviar(){

    localStorage.nombre = document.getElementById("nombres").value;
    localStorage.tipo = document.getElementById("tipo").value;
    localStorage.fechCad = document.getElementById("fechCad").value;
    localStorage.monto = document.getElementById("monto").value;
    localStorage.fechCort = document.getElementById("fechCort").value;


    var name = document.getElementById("nombre");
    var tip = document.getElementById("tip");
    var cad = document.getElementById("cad");
    var mont = document.getElementById("mont");
    var cort = document.getElementById("cort");


    name.innerHTML = nombre;
    tip.innerHTML = tipo;
    cad.innerHTML = fechCad;
    mont.innerHTML = monto;
    cort.innerHTML = cort;
    



   /* if(nombre == "" || tipo == "" || fechCad == "" || monto == "" ||  fechCort == "") {

        alert("Rellene los espacios en blanco");


    }else{

    }*/
}
