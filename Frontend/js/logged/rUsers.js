url = `${base_url}admin/getUsers`;

makeRequest("GET", url, (code, response) => {
    if(code == 200){
        datos = JSON.parse(response)
        usuarios = datos.usuarios;
        html = "";
        console.log(usuarios);
        if(usuarios.length > 1){
            for(let i = 0; i < usuarios.length; i++){
                if(usuarios[i].tipo == 1){
                    usuarios[i].tipo = "Invitado";
                }else if(usuarios[i].tipo == 2){
                    usuarios[i].tipo = "Empleado";
                }else if(usuarios[i].tipo == 3){
                    usuarios[i].tipo = "Administrador"
                }
                if(usuarios[i].cargo == null){
                    usuarios[i].cargo = "No Aplica";
                }
                if(usuarios[i].direccion == null){
                    usuarios[i].direccion = "No Aplica";
                }
                if(usuarios[i].telefono == null){
                    usuarios[i].telefono = "No Aplica";
                }
                if(usuarios[i].celular == null){
                    usuarios[i].celular = "No Aplica";
                }
                html += `
                <div class="col-md-5 m-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <h3 class="card-title text-uppercase">
                            ${usuarios[i].nombres} ${usuarios[i].apellidos}
                            </h3>
                            <p class="border m-2">Cedula: ${usuarios[i].cedula}</p>
                            <p class="border m-2">Correo: ${usuarios[i].correo}</p>
                            <p class="border m-2">Cargo: ${usuarios[i].cargo}</p>
                            <p class="border m-2">Direccion: ${usuarios[i].direccion}</p>
                            <p class="border m-2">Telefono: ${usuarios[i].telefono}</p>
                            <p class="border m-2">Celular: ${usuarios[i].celular}</p>
                            <p class="border m-2">${usuarios[i].tipo}</p>`
                            if(sessionStorage.getItem("tipo") == 3){
                                html += `
                                <a onclick="id_session(${usuarios[i].id})" href="./eUser.html" class="btn btn-outline-secondary">Editar Usuario</a>
                                <a onclick="delete_user(${usuarios[i].id})" class="btn btn-outline-danger">Eliminar Usuario</a>`
                            }
                            html += `
                        </div>
                    </div>
                </div>`;
            }
        }else{
            html = `
            <div class="mx-auto pt-4">
            <div class="card text-center">
                <div class="card-body">
                    <h4>No hay ningun usuario registrado hasta ahora</h4>
                    <div class="d-flex d-grid gap-2 d-md-block">
                    <a href="./rEquipos.html" class="btn btn-outline-primary m-4">Gestionar Equipos</a>
                    <a href="./rUsers.html" class="btn btn-outline-primary m-4">Gestionar Usuarios</a>
                    </div>
                </div>
            </div>
          </div>`;
        }
        document.getElementById("tabla-users").innerHTML = html;
        console.log(datos);
    }
});

function delete_user(id){
    url = `${base_url}admin/deleteUser/${id}`;
    makeRequest("DELETE", url, (code, response) => {
        if(code == 200){
            datos = JSON.parse(response)
            location.reload()
        }
    });
}

function id_session(id){
    idUser = sessionStorage.setItem("idUser", id);
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

