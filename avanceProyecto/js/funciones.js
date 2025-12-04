function Comprobar() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellidoP = document.getElementById("apellip").value.trim();
    var apellidoM = document.getElementById("apellim").value.trim();
    var nombreE = document.getElementById("nombreE").value.trim();
    var apellidoPE = document.getElementById("apellipE").value.trim(); // Corregido ID
    var apellidoME = document.getElementById("apellimE").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var NumeroE = document.getElementById("numeroemp").value.trim();
    var curp = document.getElementById("curp").value.trim().toUpperCase();
    var curpE = document.getElementById("curpE").value.trim().toUpperCase();
    var correoi = document.getElementById("correoi").value.trim();
    var correop = document.getElementById("correop").value.trim();
    var fechanac = document.getElementById("fechanac").value;
    var fechanacE = document.getElementById("fechanacE").value;
    var generoE = document.getElementById("genero").value;
    var cp = document.getElementById("CP").value; 
    var rh = document.getElementById("rh").value; 
    var errorTipo = document.getElementById("tsangre").value;
    var horaE = document.getElementById("horaE").value;
    var horaS = document.getElementById("horaS").value;

    
    // Selects
    var gruposel = document.getElementById("gruposel").value;
    var estadosel = document.getElementById("estado").value;
    var delegacion = document.getElementById("delegacion").value;
    var entidadext = document.getElementById("entidadext").value.trim();
    var escolaridad = document.getElementById("escolaridad").value;
    var ocupac = document.getElementById("ocupac").value;
    var estadoC = document.getElementById("estadoC").value;

    var esValido = true;

    if (!comprobarletra(nombre, apellidoP, apellidoM, nombreE, apellidoPE, apellidoME)) {
        esValido = false;
    }else if (!comprobarlongitud(nombre, apellidoP, apellidoM, nombreE, apellidoPE, apellidoME)) {
        esValido = false;
    } else if (!comprobarnumeros(telefono, NumeroE)) {
        esValido = false;
    }else if (!comprobarcorreo(correoi, correop)) {
        esValido = false;
    }else if (!comprobarcurp(curp, curpE)) { 
        esValido = false;
    }else if (!comprobarsele(gruposel, estadosel, delegacion, entidadext)) {
        esValido = false;
    }else if(!validarcorreoIns(correoi)){
        esValido = false;
    }else if(!comprobarFechas(fechanac,fechanacE)){
        esValido =false;
    }else if(!comprobarGenero(generoE)){
        esValido = false; 
    }else if(!comprobarCP(cp)){
        esValido = false; 
    }else if(!comprobarRH(rh)){
        esValido = false; 
    }else if(!comprobarTipoSangre(errorTipo)){
        esValido = false; 
    }else if(!validarCENDI()){
        esValido = false; 
    }
    else if(!validarhora(horaE, horaS)){
        esValido = false;
    } else if(!comprobarSelecE(escolaridad,ocupac,estadoC)){
        esValido=false;
    }
    else if(esValido){
        alert("Hola " + nombreE + " verifica que los siguientes datos sean correctos: " + "\nNombre: " + nombreE + "\nPrimer apellido: " + apellidoPE + "\nSegundo Apellido : " + apellidoME + "\nCURP: " + curpE + "\nGénero: " + generoE + "\nNombre del nino: "+nombre+"\nApellido Paterno del nino: "+apellidoP+"\nApellido Materno nino: "+apellidoM+"\nCurp del nino: "+curp+"\nGrupo sanguineo: "+errorTipo+"\nRH: "+rh+"\ntelefono: "+telefono+"\nCorreo institucional: "+correoi+"\nCorreo Personal: "+ correop+"\nNumrero Empleado: "+numEmple); 
    }
    else{
        alert("Hubo algún error en el formulario.");
    }
    
     return esValido;
}

function comprobarletra(Nombre, ApellidoP, ApellidoM, NombreE, ApellidoPE, ApellidoME) {
    var teclasletras = /^[A-Za-záÁéÉíÍóÓúÚüÜ\s]+$/;
    var valido = true;

    // Campos del niño
    if (!teclasletras.test(Nombre)) {
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("errornom").style.display = "block";
        valido = false;
    } else {
        document.getElementById("nombre").style.borderColor = "green";
        document.getElementById("errornom").style.display = "none";
    }

    if (!teclasletras.test(ApellidoP)) {
        document.getElementById("apellip").style.borderColor = "red";
        document.getElementById("errorapp").style.display = "block";
        valido = false;
    } else {
        document.getElementById("apellip").style.borderColor = "green";
        document.getElementById("errorapp").style.display = "none";
    }

    if (!teclasletras.test(ApellidoM)) {
        document.getElementById("apellim").style.borderColor = "red";
        document.getElementById("errorapm").style.display = "block";
        valido = false;
    } else {
        document.getElementById("apellim").style.borderColor = "green";
        document.getElementById("errorapm").style.display = "none";
    }

    // Campos del empleado
    if (!teclasletras.test(NombreE)) {
        document.getElementById("nombreE").style.borderColor = "red";
        document.getElementById("errornomE").style.display = "block";
        valido = false;
    } else {
        document.getElementById("nombreE").style.borderColor = "green";
        document.getElementById("errornomE").style.display = "none";
    }

    if (!teclasletras.test(ApellidoPE)) {
        document.getElementById("apellipE").style.borderColor = "red";
        document.getElementById("errorappE").style.display = "block";
        valido = false;
    } else {
        document.getElementById("apellipE").style.borderColor = "green";
        document.getElementById("errorappE").style.display = "none";
    }

    if (!teclasletras.test(ApellidoME)) {
        document.getElementById("apellimE").style.borderColor = "red";
        document.getElementById("errorapmE").style.display = "block";
        valido = false;
    } else {
        document.getElementById("apellimE").style.borderColor = "green";
        document.getElementById("errorapmE").style.display = "none";
    }

    return valido;
}

function comprobarnumeros(Telefono, numEmple) {
    var teclasnumeros = /^\d+$/; 
    var valido = true;

    document.getElementById("errortel").style.display = "none";
    document.getElementById("errornumE").style.display = "none";

    if (!teclasnumeros.test(Telefono) || Telefono.length !== 10) { 
        document.getElementById("telefono").style.borderColor = "red";
        document.getElementById("errortel").style.display = "block";
        valido = false;
    } else {
        document.getElementById("telefono").style.borderColor = "green";
    }

    if (!teclasnumeros.test(numEmple) && numEmple.length>3 && numEmple<8) { 
        document.getElementById("numeroemp").style.borderColor = "red";
        document.getElementById("errornumE").style.display = "block";
        valido = false;
    } else {
        document.getElementById("numeroemp").style.borderColor = "green";
    }


    return valido;
}

function comprobarcorreo(CorreoIns, CorreoPer) {
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    var valido = true;

    // Correo Institucional
    if (!regexCorreo.test(CorreoIns)) {
        document.getElementById("correoi").style.borderColor = "red";
        valido = false;
    } else {
        document.getElementById("correoi").style.borderColor = "green";
    }

    // Correo Personal
    if (!regexCorreo.test(CorreoPer)) {
        document.getElementById("correop").style.borderColor = "red";
        valido = false;
    } else {
        document.getElementById("correop").style.borderColor = "green";
    }

    return valido;
}

function comprobarcurp(curp, curpE) {
    document.getElementById("Errorcurp1").style.display = "none";
    document.getElementById("Errorcurp2").style.display = "none";
    document.getElementById("Errorcurpe1").style.display = "none";
    document.getElementById("Errorcurpe2").style.display = "none";
    
    var longitudcurp = 18;
    var formatocurp = /^[A-Z]{4}\d{6}[HM](AS|BC|BS|CC|CH|CL|CM|CS|DF|DG|GT|GR|HG|JC|MC|MN|MS|NE|NL|NT|OC|PL|QR|QT|SL|SP|SR|TC|TL|TS|VZ|YN|ZS)[A-Z]{3}[0-9A-Z]\d$/;
    var valido = true;

    if (curp.length !== longitudcurp) {
        document.getElementById("Errorcurp2").style.display = "block";
        document.getElementById("curp").style.borderColor = "red";
        valido = false;
    } else if (!formatocurp.test(curp)) {
        document.getElementById("Errorcurp1").style.display = "block";
        document.getElementById("curp").style.borderColor = "red";
        valido = false;
    } else {
        document.getElementById("curp").style.borderColor = "green";
    }

    // Curp empleado
    if (curpE.length !== longitudcurp) {
        document.getElementById("Errorcurpe2").style.display = "block";
        document.getElementById("curpE").style.borderColor = "red";
        valido = false;
    } else if (!formatocurp.test(curpE)) {
        document.getElementById("Errorcurpe1").style.display = "block";
        document.getElementById("curpE").style.borderColor = "red";
        valido = false;
    } else {
        document.getElementById("curpE").style.borderColor = "green";
    }

    return valido;
}

function comprobarlongitud(Nombre, ApellidoP, ApellidoM, NombreE, ApellidoPE, ApellidoME) {
    var longnombresmax = 30;
    var longnombremin = 2;
    var valido = true;

    // Campos a validar: [ID, valor, ID_Error_Longitud]
    var campos = [
        ["nombre", Nombre, "errornom2"],
        ["apellip", ApellidoP, "errorapp2"],
        ["apellim", ApellidoM, "errorapm2"],
        ["nombreE", NombreE, "errornomE2"],
        ["apellipE", ApellidoPE, "errorappE2"],
        ["apellimE", ApellidoME, "errorapmE2"],
    ];

    campos.forEach(campo => {
        var id = campo[0];
        var valor = campo[1];
        var idError = campo[2];

        document.getElementById(idError).style.display = "none";

        if (valor.length > longnombresmax || valor.length < longnombremin) {
            document.getElementById(id).style.borderColor = "red";
            document.getElementById(idError).style.display = "block";
            valido = false;
        } else {
            if (document.getElementById(id).style.borderColor !== "red") {
                 document.getElementById(id).style.borderColor = "green";
            }
        }
    });

    return valido;
}

function comprobarsele(gruposel, estadosel, delegacionsel, entidadext){
    document.getElementById("errorgrupo").style.display="none";
    document.getElementById("errorestados").style.display="none";
    document.getElementById("errordeleg").style.display="none";
    var valido = true;

    if(gruposel == 0){
        document.getElementById("gruposel").style.borderColor="red";
        document.getElementById("errorgrupo").style.display="block";
        valido = false;
    }else{
        document.getElementById("gruposel").style.borderColor="green";
    }
    
    if(estadosel == 0){
        document.getElementById("estado").style.borderColor="red";
        document.getElementById("errorestados").style.display="block";
        valido = false;
    }
    else{
        document.getElementById("estado").style.borderColor="green";
        
        if(estadosel == 7){ 
            if(delegacionsel == "0"){
                document.getElementById("delegacion").style.borderColor="red";
                document.getElementById("errordeleg").style.display="block";
                valido = false;
            } else {
                document.getElementById("delegacion").style.borderColor="green";
            }
        }
        else{ 
            if(entidadext === ""){
                document.getElementById("entidadext").style.borderColor="red";
                valido = false;
            } else {
                document.getElementById("entidadext").style.borderColor="green";
            }
        }
    }
    
    return valido;
}

function comprobarest() {
    var estadosel = document.getElementById("estado").value;
    var entidad1 = document.getElementById("Entidad1"); // Contiene el select de Delegaciones (CDMX)
    var entidad2 = document.getElementById("Entidad2"); 

    document.getElementById("errordeleg").style.display="none";
    document.getElementById("entidadext").style.borderColor="";
    document.getElementById("delegacion").style.borderColor="";

    if (estadosel == 7) { // Ciudad de México
        entidad1.style.display = "block";
        entidad2.style.display = "none";
        document.getElementById("delegacion").required = true;
        document.getElementById("entidadext").required = false;
        document.getElementById("entidadext").value = ""; // Limpiar el campo no visible
    } else if (estadosel != 0) { // Otro estado
        entidad1.style.display = "none";
        entidad2.style.display = "block";
        document.getElementById("delegacion").required = false;
        document.getElementById("entidadext").required = true;
        document.getElementById("delegacion").value = "0";
    } else {
        entidad1.style.display = "none";
        entidad2.style.display = "none";
        document.getElementById("delegacion").required = false;
        document.getElementById("entidadext").required = false;
        document.getElementById("entidadext").value = "";
        document.getElementById("delegacion").value = "0";
    }
}

function limpiar() {
    document.querySelector('form').reset();
    comprobarest(); // Para resetear la visibilidad de los campos de entidad/delegación
    // Opcional: limpiar los bordes y mensajes de error
    var elements = document.querySelectorAll('.form-control, .form-select');
    elements.forEach(function(el) {
        el.style.borderColor = '';
    });
    var errorLabels = document.querySelectorAll('label[id^="error"], label[id^="Errorcurp"]');
    errorLabels.forEach(function(el) {
        el.style.display = 'none';
    });
}

function comprobarFechas(fechanac, fechanacE){
    document.getElementById("ErrorfechanacFE1").style.display= "none";
    document.getElementById("ErrorfechanacFE2").style.display= "none";
    document.getElementById("ErrorfechanacF1").style.display= "none";
    document.getElementById("ErrorfechanacF2").style.display= "none";
    const fechanacimiento = new Date(fechanac);
    const fechanacimientoE = new Date(fechanacE);
    const fechahoy = new Date();
    var validarE=true;
    var validarN=true;
    var validarF;

    fechahoy.setHours(0,0,0,0);
    fechanacimiento.setHours(0,0,0,0);
    fechanacimientoE.setHours(0,0,0,0);
    var edadempe=false;
    if(fechanacimientoE.getTime()>fechahoy.getTime()){
        document.getElementById("ErrorfechanacFE1").style.display= "block";
        validarE = false;
        edadempe = true;
    }

    if(fechanacimiento.getTime()>fechahoy.getTime()){
        document.getElementById("ErrorfechanacF1").style.display= "block";
        validarN = false;
    }

    var edadE = fechahoy.getFullYear() - fechanacimientoE.getFullYear();
    var mesE = fechahoy.getMonth() - fechanacimientoE.getMonth();
    var edadN = fechahoy.getFullYear() - fechanacimiento.getFullYear();
    var mesN =fechahoy.getFullYear() - fechanacimiento.getMonth();

    if(mesN<0)
    {
        edadN--;
    }
    if(mesE < 0){
        edadE--;
    }

    if(edadN > 6 && edadN != null){
        document.getElementById("ErrorfechanacF2").style.display= "block";
        validarN =false;
    }

    if(edadE < 18 && edadE != null && edadempe==false){
        document.getElementById("ErrorfechanacFE2").style.display= "block";
        validarE = false;
    }
    if(!validarN){
        document.getElementById("fechanac").style.borderColor="red";
    }
    else{
        document.getElementById("fechanac").style.borderColor="green";
    }
    if(!validarE){
        document.getElementById("fechanacE").style.borderColor="red";
    }
    else{
        document.getElementById("fechanacE").style.borderColor="green";
    }
    if(validarN && validarE)
    {
        validarF= true;
    }
    else{
        validarF=false;
    }
    return validarF;
}
function validarcorreoIns(correo){
    var formatocorreo=/^[\w.-]+@ipn\.mx$/;
    document.getElementById("Errorcorreoi").style.display="none";
    
    var validar = true;

    if(!formatocorreo.test(correo)){
        document.getElementById("Errorcorreoi").style.display="block";
        document.getElementById("correoi").style.borderColor="red";
        validar = false;
    }
    else{
        document.getElementById("correoi").style.borderColor="green";
    }
    return validar;
}

function comprobarGenero(genero) {
    var valido = true;
    
    var errorLabel = document.getElementById("errorgenero"); 
    var selectGenero = document.getElementById("genero");

    if (genero === "" || genero === null) {
        selectGenero.style.borderColor = "red";
        if(errorLabel) errorLabel.style.display = "block"; 
        valido = false;
    } else {
        selectGenero.style.borderColor = "green";
        if(errorLabel) errorLabel.style.display = "none"; 
    }

    return valido;
}

function comprobarSelecE(escolaridad, ocupac, estadoC){
    var valido = true;
    document.getElementById("Errorescolar").style.display="none";
    document.getElementById("Errorocupa").style.display="none";
    document.getElementById("Errorestadoc").style.display="none";

    if(escolaridad==0){
        document.getElementById("Errorescolar").style.display="block";
        document.getElementById("escolaridad").style.borderColor="red";
        valido=false;
    }else{
        document.getElementById("escolaridad").style.borderColor="green";
        if(ocupac==0){
            document.getElementById("Errorocupa").style.display="block";
            document.getElementById("ocupac").style.borderColor="red";
            valido = false;
        }
        else{
            document.getElementById("ocupac").style.borderColor="green";
            if(estadoC==0){
                document.getElementById("Errorestadoc").style.display="block";
                document.getElementById("estadoC").style.borderColor="red";
                valido = false;
            }
            else{
                document.getElementById("estadoC").style.borderColor="green";
            }
        }
    }
    return valido;
}




function comprobarRH(rh){
    var formato = /^[+-]$/;
    document.getElementById("Errorrh").style.display = "none";

    if(!formato.test(rh)){
        document.getElementById("rh").style.borderColor = "red";
        document.getElementById("Errorrh").style.display = "block";
        return false;
    }else{
        document.getElementById("rh").style.borderColor = "green";
        return true;
    }
}


function comprobarCP(cp){
    var formato = /^\d{5}$/;
    document.getElementById("Errorcp").style.display = "none";

    if(!formato.test(cp)){
        document.getElementById("CP").style.borderColor = "red";
        document.getElementById("Errorcp").style.display = "block";
        return false;
    }else{
        document.getElementById("CP").style.borderColor = "green";
        return true;
    }
}


function comprobarTipoSangre(tipo){
    var formato = /^(A|B|AB|O)$/;
    document.getElementById("Errortipo").style.display = "none";

    tipo = tipo.toUpperCase().trim();

    if(!formato.test(tipo)){
        document.getElementById("tsangre").style.borderColor = "red";
        document.getElementById("Errortipo").style.display = "block";
        return false;
    }else{
        document.getElementById("tsangre").style.borderColor = "green";
        return true;
    }
}

function validarCENDI() {
    const selectCendi = document.getElementById('CENDI');
    const errorLabel = document.getElementById('errorcendi');

    if (selectCendi.value === "0") {
        errorLabel.style.display = 'block';
        selectCendi.classList.add('is-invalid');
        selectCendi.classList.remove('is-valid');
        return false; 
    } else {
        errorLabel.style.display = 'none';
        selectCendi.classList.remove('is-invalid');
        selectCendi.classList.add('is-valid');
        return true;
    }
}

function validarhora(horaE, horaS){

    document.getElementById("ErrorhoraDiff").style.display="none";
    document.getElementById("ErrorhoraFormato").style.display="none";

    const formatoHora = /^([01]?\d|2[0-3]):[0-5]\d$/;

    var validacion = true;

    if (!formatoHora.test(horaE) || !formatoHora.test(horaS)) {
        validacion = false;
        document.getElementById("ErrorhoraFormato").style.display="block";
        document.getElementById("horaE").style.borderColor="red";
        document.getElementById("horaS").style.borderColor="red";
        return validacion;
    }

    let partesE = horaE.split(":");
    let partesS = horaS.split(":");

    let hora1 = parseInt(partesE[0]);
    let min1  = parseInt(partesE[1]);

    let hora2 = parseInt(partesS[0]);
    let min2  = parseInt(partesS[1]);

    if (hora2 < hora1 || (hora2 === hora1 && min2 < min1)) {
        hora2 = hora2 + 24;
    }

    let total1 = hora1 * 60 + min1;
    let total2 = hora2 * 60 + min2;

    let diferencia = total2 - total1;

    if(diferencia > 600 || diferencia<60) {
        document.getElementById("ErrorhoraDiff").style.display="block";
        document.getElementById("horaE").style.borderColor="red";
        document.getElementById("horaS").style.borderColor="red";
        validacion = false;
    }
    else{
        document.getElementById("horaE").style.borderColor="green";
        document.getElementById("horaS").style.borderColor="green";
    }

    return validacion;
}



