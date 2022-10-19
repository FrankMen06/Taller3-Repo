function guardarDatos(){
    localStorage.nombre = document.getElementById("nombres").value;
    localStorage.dui = document.getElementById("dui").value;
    localStorage.marca = document.getElementById("marca").value;
    localStorage.modelo = document.getElementById("modelo").value;
    localStorage.anio = document.getElementById("anio").value;
    localStorage.color = document.getElementById("color").value;
    localStorage.placa = document.getElementById("placa").value;
    localStorage.falla = document.getElementById("falla").value;

    const fecha = new Date();

    if ((localStorage.nombre != undefined) && (localStorage.dui != undefined) && (localStorage.nit != undefined) && (localStorage.marca != undefined) && (localStorage.modelo != undefined) && (localStorage.anio != undefined) && (localStorage.color != undefined) && (localStorage.placa != undefined) && (localStorage.falla != undefined)) {
        document.getElementById("name").innerHTML = localStorage.nombre ;
        document.getElementById("dUI").innerHTML = localStorage.dui ;
        document.getElementById("nIT").innerHTML = localStorage.nit ;
        document.getElementById("marcA").innerHTML = localStorage.marca ;
        document.getElementById("modeLO").innerHTML = localStorage.modelo ;
        document.getElementById("aniO").innerHTML = localStorage.anio ;
        document.getElementById("colOR").innerHTML = localStorage.color ;
        document.getElementById("plaCA").innerHTML = localStorage.placa ;
        document.getElementById("faLLA").innerHTML = localStorage.falla ;
        document.getElementById("ingreso").innerHTML = fecha; 
        
    } else {
        document.getElementById("datos").innerHTML = "No hay Datos";
    }

}
