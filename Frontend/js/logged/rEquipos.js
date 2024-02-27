url = `${base_url}admin/getEquipos`;

makeRequest("GET", url, (code, response) => {
    if(code == 200){
        datos = JSON.parse(response)
        equipos = datos.equipos;
        html = "";
        console.log(equipos);
        if(equipos.length > 0){
            for(let i = 0; i < equipos.length; i++){
                if(equipos[i].tipo == "p"){
                    equipos[i].tipo = "Preventivo";
                }else if(equipos[i].tipo == "c"){
                    equipos[i].tipo = "Correctivo";
                }
                html += `
                <div class="col-md-5 m-4">
                 <div class="card text-center">
                    <div class="card-body">
                        <h3 class="card-title text-uppercase">
                          ${equipos[i].id}
                        </h3>
                        <p class="border m-2">${equipos[i].descripcion}</p>
                        <p class="border m-2">Cantidad en Uso: ${equipos[i].cantUso}</p>
                        <p class="border m-2">Cantidad en Bodega: ${equipos[i].cantBod}</p>
                        <p class="border m-2">Tipo: ${equipos[i].tipo}</p>`
                        if(sessionStorage.getItem("tipo") == 3){
                            html += `
                            <a href="./eEquipo.html" onclick="id_session(${equipos[i].idEquipo})" class="btn btn-outline-secondary">Editar Equipo</a>
                            <a onclick="delete_equipo(${equipos[i].idEquipo})" class="btn btn-outline-danger">Eliminar Equipo</a>`
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
                    <h4>No hay ningun equipo registrado hasta ahora</h4>
                    <div class="d-flex d-grid gap-2 d-md-block">
                        <a href="./rUsers.html" class="btn btn-outline-primary m-4">Gestionar Usuarios</a>
                        <a href="./rMant.html" class="btn btn-outline-primary m-4">Gestionar Mantenimientos</a>
                    </div>
                </div>
            </div>
          </div>`;
        }
        document.getElementById("tabla-equipos").innerHTML = html;
        console.log(datos);
    }
});

function delete_equipo(id){
    url = `${base_url}admin/deleteEquipo/${id}`;
    makeRequest("DELETE", url, (code, response) => {
        if(code == 200){
            datos = JSON.parse(response)
            location.reload()
        }
    })
}

function id_session(id){
    idEquipo = sessionStorage.setItem("idEquipo", id);
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