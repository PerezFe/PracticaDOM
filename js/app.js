function cambiarTitulo(){
    console.log("Desde la funcion cambiar titulo");
    //buscar del html el elemento que me interesa
    let titulo = document.querySelector("h1");
    // let titulo = document.getElementsByTagName("h1");
    console.log(titulo)
    titulo.innerHTML = "Titulo Nuevo"
}

