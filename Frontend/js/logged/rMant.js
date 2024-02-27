url = `${base_url}admin/getMantenimiento`;

makeRequest("GET", url, (code, response) => {
    if(code == 200){
        datos = JSON.parse(response)
        mant = datos.mant;
        html = "";
        console.log(mant);
        if(mant.length > 0){
            for(let i = 0; i < mant.length; i++){
                html += `
                <div class="col-md-5 m-4">
                 <div class="card text-center">
                    <div class="card-body">
                        <h3 class="card-title text-uppercase">
                          ${mant[i].descripcion}
                        </h3>
                        <p class="border m-2">Fecha de Ejecucion: ${mant[i].fechaEjecucion}</p>
                        <p class="border m-2">Hora de Inicio: ${mant[i].horaInicio}</p>
                        <p class="border m-2">Hora de Finalizacion: ${mant[i].horaFinal}</p>
                        <p class="border m-2">Tiempo de Ejecucion: ${mant[i].tiempoEjec}</p>
                        <p class="border m-2">Identificacion del Empleado: ${mant[i].id}</p>
                        <p class="border m-2">Tipo de Mantenimiento: ${mant[i].tipo}</p>
                        <p class="border m-2">Ubicacion: ${mant[i].ubicacion}</p>
                        <p class="border m-2">Identificador del Equipo: ${mant[i].idEquipo}</p>`
                        if(sessionStorage.getItem("tipo") != 1){
                            html += `
                            <a href="./eMant.html" onclick="id_session(${mant[i].idMant})" class="btn btn-outline-secondary">Editar Mantenimiento</a>
                            <a onclick="delete_mant(${mant[i].idMant})" class="btn btn-outline-danger">Eliminar Mantenimiento</a>`
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
                    <h4>No hay ningun mantenimiento registrado hasta ahora</h4>
                    <div class="d-flex d-grid gap-2 d-md-block">
                    <a href="./crudEquipos.html" class="btn btn-outline-primary m-4">Gestionar Equipos</a>
                    <a href="./crudUsers.html" class="btn btn-outline-primary m-4">Gestionar Usuarios</a>
                    </div>
                </div>
            </div>
          </div>`;
        }
        document.getElementById("tabla-mant").innerHTML = html;
        console.log(datos);
    }
});

function delete_mant(id){
    url = `${base_url}admin/deleteMant/${id}`;
    makeRequest("DELETE", url, (code, response) => {
        if(code == 200){
            datos = JSON.parse(response)
            location.reload()
        }
    })
}

function id_session(id){
    idMant = sessionStorage.setItem("idMant", id);
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