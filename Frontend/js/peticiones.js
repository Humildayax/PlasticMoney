base_url = "http://localhost:4443/"

function makeRequest(tipo, url, callback, body = null) {
    var xhttp = new XMLHttpRequest();
    xhttp.open(tipo, url, true)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            callback(this.status, this.response)
        }
    };
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.send(body);
}