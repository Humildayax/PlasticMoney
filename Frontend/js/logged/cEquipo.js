function add_equipo() {
    url = `${base_url}admin/addEquipo`
    body = {
        id: document.getElementById("idEquipo").value,
        descripcion: document.getElementById("descripcionEquipo").value,
        cantBod: document.getElementById("cantBodegaEquipo").value,
        cantUso: document.getElementById("cantUsoEquipo").value,
        tipo: document.querySelector('input[type ="radio"]:checked').value
    }
    console.log(body);
    makeRequest("POST", url, (code, response) => {
        if (code == 200) {
            datos = JSON.parse(response)
            location.href = "./rEquipos.html"
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