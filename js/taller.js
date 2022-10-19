const indexedDB = window.indexedDB;

if(indexedDB){
    let db;

    const conexion = indexedDB.open('tallerSpeedy', 1)

    conexion.onsuccess = () =>{
        db = conexion.result;
        console.log("La BD está abierta", db);
    }

    conexion.onupgradeneeded = (e) =>{
        db = e.target.result
        console.log("BD creada", db)
        const coleccionObjetos = db.createObjectStore("Taller", {
            keyPath: 'clave'
        })
    }

    conexion.onerror = (error) =>{
        console.log("Error", error)
    }

}


