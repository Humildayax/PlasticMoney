function register_em() {
    url = `${base_url}registro`
    body = {
        cedula: document.getElementById("cedIngresar").value,
        nombres: document.getElementById("nombreIngresar").value,
        apellidos: document.getElementById("apellidoIngresar").value,
        cargo: document.getElementById("cargoIngresar").value,
        direccion: document.getElementById("direccionIngresar").value,
        telefono: document.getElementById("telIngresar").value,
        celular: document.getElementById("celIngresar").value,
        correo: document.getElementById("correoIngresar").value,
        passwd: document.getElementById("passIngresar").value,
        tipo: "empleado"
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