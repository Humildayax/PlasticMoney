from fastapi import APIRouter
from models.registro import Login
from db import ConexionDB
app_login = APIRouter()

TIPOS_USUARIO = {
    "invitado": 1,
    "empleado" : 2,
    "administrador": 3
}

@app_login.post("/")
def login(info:Login):
    datos = info.dict()
    tipo = datos["tipo"].lower()
    datos["tipo"] = TIPOS_USUARIO[tipo]

    query = """Select * from users where cedula = %(cedula)s and contraseña = %(passwd)s and tipo = %(tipo)s"""
    result = ConexionDB.make_query(query, datos)
    if result:
        datosUser = {"nombre" : result[0][1],
                     "tipo" : result[0][10]}
        return {"mensaje":"login correcto", "usuario" : datosUser}
    return {"mensaje": "Datos de login incorrectos"}

