function capturaDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var caja = document.getElementById("caja").value;
    var color = document.getElementById("color").value;
    var nombreAvatar = document.getElementById("nombreAvatar");
    var apellidoAvatar  = document.getElementById("apellidoAvatar");
    var edadAvatar  = document.getElementById("edadAvatar");
    var fechaAvatar  = document.getElementById("fechaAvatar");
    var generoAvatar  = document.getElementById("generoAvatar");
    var emailAvatar  = document.getElementById("emailAvatar");
    var descripcionAvatar = document.getElementById("descripcionAvatar");
    var colorAvatar = document.getElementById("colorAvatar");
    var selector = document.getElementById("avatar");
    selector.className = '';

    nombreAvatar.textContent = nombre;
    apellidoAvatar.textContent = apellido;
    edadAvatar.textContent = edad;
    fechaAvatar.textContent = fecha;
    emailAvatar.textContent = email;
    descripcionAvatar.textContent = caja;

    if (genero == "1") {
        document.getElementById("img1").src="img/imgAvatar1.gif";
        generoAvatar.textContent = "Femenino";
    } else if (genero == "2"){
        document.getElementById("img1").src="img/imgAvatar2.jpg";
        generoAvatar.textContent = "Masculino";
    } else if (genero == "3"){
        document.getElementById("img1").src="img/imgAvatar3.gif";
        generoAvatar.textContent = "Otro";
    }else{
        document.getElementById("img1").src="img/imgAvatar.jpg";
        generoAvatar.textContent = "";
    }

    switch (color) {
        case "1":
            selector.classList.add("Azul");
            colorAvatar.textContent = "Azul";
            break;
        case "2":
            selector.classList.add("Rojo");
            colorAvatar.textContent = "Rojo";
            break;
        case "3":
            selector.classList.add("Negro");
            colorAvatar.textContent = "Negro";
            break;
    }

    document.getElementById("nombre").value ="";
    document.getElementById("apellido").value ="";
    document.getElementById("edad").value ="";
    document.getElementById("fecha").value ="";
    document.getElementById("genero").value ="";
    document.getElementById("email").value ="";
    document.getElementById("caja").value ="";
    document.getElementById("color").value ="";
}

function chat() {
    var selector = document.getElementById("btnChat");
    selector.classList.toggle("active");

    var selector2 = document.getElementById("formchat");
    selector2.classList.toggle("active");
}

function enviarMensaje() {
    var nombrechat = document.getElementById("nombrechat").value;

    alert ("Señor/a " + nombrechat + " el mensaje ha sido enviados con satisfacción.")
}