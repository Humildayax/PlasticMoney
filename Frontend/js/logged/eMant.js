idMant = sessionStorage.getItem("idMant");
url = `${base_url}admin/getMant/${idMant}`;

makeRequest("GET", url, (code, response) => {
    if(code == 200){
        datos = JSON.parse(response)
        mant = datos.mant;
        console.log(mant);
        idMant,
        document.getElementById("ejecMant").value = mant[0].fechaEjecucion
        document.getElementById("horaInicioMant").value = mant[0].horaInicio
        document.getElementById("horaFinalMant").value = mant[0].horaFinal
        document.getElementById("idMant").value = mant[0].id
        document.getElementById("tipoMant").value = mant[0].tipo
        document.getElementById("ubicacionMant").value = mant[0].ubicacion
        document.getElementById("descripcionMant").value = mant[0].descripcion
        document.getElementById("idEquipoMant").value = mant[0].idEquipo
    }
});

function update_mant(idMant) {
    idMant = sessionStorage.getItem("idMant");
    url = `${base_url}admin/updateMant/${idMant}`;
    body = {
        idmantenimiento: idMant,
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