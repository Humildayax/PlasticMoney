function login_fn() {
    url = `${base_url}login`;
    body = {
        cedula: document.getElementById("cedIngresar").value,
        passwd: document.getElementById("passIngresar").value,
        tipo: document.querySelector('input[type ="radio"]:checked').value
    };
    console.log(body);
    makeRequest("POST", url, (code, response) => {
        if (code == 200) {
            datos = JSON.parse(response);
            console.log(datos);
            if(datos.mensaje == "login correcto"){
                sessionStorage.setItem("name", datos.usuario.nombre)
                sessionStorage.setItem("tipo", datos.usuario.tipo)
                location.href = "./logged/logged.html";
            }else{
                alert(datos.mensaje);
            }
        } else {
            console.log("error en la peticion ", code);
        }
    }, JSON.stringify(body));

};