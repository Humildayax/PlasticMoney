makeRequest("GET", base_url, (code, response) => {
    if (code == 200) {
        datos = JSON.parse(response)
        document.getElementById("prueba").innerText = datos.mensaje
    } else {
        console.log("error en la peticion ", code)
    }
})