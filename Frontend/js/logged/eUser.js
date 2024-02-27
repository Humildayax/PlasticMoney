id = sessionStorage.getItem("idUser");
url = `${base_url}admin/getUser/${id}`;

makeRequest("GET", url, (code, response) => {
    if(code == 200){
        datos = JSON.parse(response)
        usuarios = datos.usuarios;
        console.log(usuarios);
        document.getElementById("cedIngresar").value = usuarios[0].cedula;
        document.getElementById("nombreIngresar").value = usuarios[0].nombres;
        document.getElementById("apellidoIngresar").value = usuarios[0].apellidos;
        document.getElementById("cargoIngresar").value = usuarios[0].cargo;
        document.getElementById("direccionIngresar").value = usuarios[0].direccion;
        document.getElementById("telIngresar").value = usuarios[0].telefono;
        document.getElementById("celIngresar").value = usuarios[0].celular;
        document.getElementById("correoIngresar").value = usuarios[0].correo;
        document.getElementById("passIngresar").value = usuarios[0].passwd;
        if(usuarios[0].tipo == 3){
            document.getElementById("flexRadioAdmin").checked = true;
        }else if(usuarios[0].tipo == 2){
            document.getElementById("flexRadioEmpleado").checked = true;
        }else if(usuarios[0].tipo == 1){
            document.getElementById("flexRadioInvitado").checked = true;
        }
    }
});

function update_user(id) {
    id = sessionStorage.getItem("idUser");
    url = `${base_url}admin/updateUser/${id}`;
    body = {
        id,
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