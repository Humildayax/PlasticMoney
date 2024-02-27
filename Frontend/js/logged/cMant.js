function add_mant() {
    url = `${base_url}admin/addMant`
    body = {
        fechaEjecucion: document.getElementById("ejecMant").value,
        horaInicio: document.getElementById("horaInicioMant").value,
        horaFinal: document.getElementById("horaFinalMant").value,
        id: document.getElementById("idMant").value,
        tipo: document.getElementById("tipoMant").value,
        ubicacion: document.getElementById("ubicacionMant").value,
        descripcion: document.getElementById("descripcionMant").value,
        idEquipo: document.getElementById("idEquipoMant").value
    }
    console.log(body);
    makeRequest("POST", url, (code, response) => {
        if (code == 200) {
            datos = JSON.parse(response)
            location.href = "./rMant.html"
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