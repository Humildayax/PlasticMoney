function register_ad() {
    url = `${base_url}registro`
    body = {
        cedula: document.getElementById("cedIngresar").value,
        nombres: document.getElementById("nombreIngresar").value,
        apellidos: document.getElementById("apellidoIngresar").value,
        direccion: document.getElementById("direccionIngresar").value,
        telefono: document.getElementById("telIngresar").value,
        celular: document.getElementById("celIngresar").value,
        correo: document.getElementById("correoIngresar").value,
        passwd: document.getElementById("passIngresar").value,
        tipo: "administrador"
    }
    console.log(body);
    makeRequest("POST", url, (code, response) => {
        if (code == 200) {
            datos = JSON.parse(response)
            location.href = "./ingresar.html"
        } else {
            console.log("error en la peticion ", code)
        }
    }, JSON.stringify(body))

}