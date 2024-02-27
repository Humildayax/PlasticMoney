function add_user() {
    url = `${base_url}admin/addUser`
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
        tipo: document.querySelector('input[type ="radio"]:checked').value 
    }
    console.log(body);
    makeRequest("POST", url, (code, response) => {
        if (code == 200) {
            datos = JSON.parse(response)
            location.href = "./rUsers.html"
        } else {
            console.log("error en la peticion ", code)
        }
    }, JSON.stringify(body))

}

let tipo = sessionStorage.getItem("tipo");

if(tipo == 2){
    let crearUser = document.getElementById("crearUser");
    crearUser.className = "dropdown-item nav-link disabled";
    let crearEquipo = document.getElementById("crearEquipo");
    crearEquipo.className = "dropdown-item nav-link disabled"
}else if(tipo == 1){
    let crearUser = document.getElementById("crearUser");
    crearUser.className = "dropdown-item nav-link disabled";
    let crearEquipo = document.getElementById("crearEquipo");
    crearEquipo.className = "dropdown-item nav-link disabled"
    let crearMant = document.getElementById("crearMant");
    crearMant.className = "dropdown-item nav-link disabled"
}