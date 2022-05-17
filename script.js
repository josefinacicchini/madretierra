const form = document.querySelector('.mail form');

function validacion(e){
    e.preventDefault();
    console.log("in");
    const mensaje = document.querySelector('.mensaje').value;
    if (mensaje.length === 0){
        alert("Debes escribir un mensaje")
    }

    const nombre = document.querySelector('.nombre').value;
    if (nombre.length === 0){
        alert("Debes completar el nombre")
    }

    const email = document.querySelector('.email').value;
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegExp.test(email)){
        alert("La dirección de email " + email + " es incorrecta.");
    }
}
    

form.addEventListener('submit', validacion);
