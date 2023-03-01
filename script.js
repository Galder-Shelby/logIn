function validateForm( ) {

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value
    if ( name == "GALDER " && password=="070805" ) {
        //alert("usuario y contraseña validos")
        window.open('Valentines.html');
    } else {
        alert("intente de nuevo");
    }

};