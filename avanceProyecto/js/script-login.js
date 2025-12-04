function validarPassword(pass) { 
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return regex.test(pass);
}

function validarCorreoIPN(correo){
    const regex = /^[a-z]{1}[a-z]+[0-9]{4}@ipn\.mx$/i;
    return regex.test(correo);
}

$(document).ready(function(){

    $("#btnAcceso").click(function(){

        let user = $("#usuarioAcceso").val().trim();
        let pass = $("#passwordAcceso").val().trim();

        $("#err_usuarioAcc").text("");
        $("#err_passwordAcc").text("");

        let ok = true;

        if(user === ""){
            $("#err_usuarioAcc").text("El usuario es obligatorio.");
            ok = false;
        } 
        else if(!validarCorreoIPN(user)){
            $("#err_usuarioAcc").text("Debe ser un correo IPN válido (ej: jlopez2001@ipn.mx).");
            ok = false;
        }

        if(!validarPassword(pass)){
            $("#err_passwordAcc").text("Debe tener 6+, 1 mayúscula, 1 número y 1 símbolo.");
            ok = false;
        }

        if(ok){ 
            alert("Inicio de sesión correcto.");
            window.location.href = "Exito.html";
        }
    });

    $("#btnAdmin").click(function(){

        let user = $("#usuarioAdmin").val().trim();
        let pass = $("#passwordAdmin").val().trim();

        $("#err_usuarioAdm").text("");
        $("#err_passwordAdm").text("");

        let ok = true;

        if(user === ""){
            $("#err_usuarioAdm").text("Usuario obligatorio.");
            ok = false;
        }
        else if(!validarCorreoIPN(user)){
            $("#err_usuarioAdm").text("Correo IPN no válido.");
            ok = false;
        }

        if(!validarPassword(pass)){
            $("#err_passwordAdm").text("Debe tener 6+, 1 mayúscula, 1 número y 1 símbolo.");
            ok = false;
        }

        if(ok){
            alert("Acceso administrador correcto.");
            window.location.href = "Exito.html";
        }
    });


});
