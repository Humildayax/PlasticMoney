idEquipo = sessionStorage.getItem("idEquipo");
url = `${base_url}admin/getEquipo/${idEquipo}`;

makeRequest("GET", url, (code, response) => {
    if(code == 200){
        datos = JSON.parse(response)
        equipos = datos.equipos;
        console.log(equipos);
        document.getElementById("idEquipo").value = equipos[0].id;
        document.getElementById("descripcionEquipo").value = equipos[0].descripcion;
        document.getElementById("cantBodegaEquipo").value = equipos[0].cantBod;
        document.getElementById("cantUsoEquipo").value = equipos[0].cantUso;
        if(equipos[0].tipo == "p"){
            document.getElementById("flexRadioPreventivo").checked = true;
        }else if(equipos[0].tipo == "c"){
            document.getElementById("flexRadioCorrectivo").checked = true;
        }
    }
});

function update_equipo(idEquipo) {
    idEquipo = sessionStorage.getItem("idEquipo");
    url = `${base_url}admin/updateEquipo/${idEquipo}`;
    body = {
        idEquipo,
        id: document.getElementById("idEquipo").value,
        descripcion: document.getElementById("descripcionEquipo").value,
        cantUso: document.getElementById("cantUsoEquipo").value,
        cantBod: document.getElementById("cantBodegaEquipo").value,
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