from fastapi import APIRouter
from models.registro import Usuario
from db import ConexionDB
app_registro = APIRouter()

TIPOS_USUARIO = {
    "invitado": 1,
    "empleado" : 2,
    "administrador": 3
}


@app_registro.post("/")
def registro(info:Usuario):
    datos = info.dict()
    tipo = datos["tipo"]
    datos["tipo"] = TIPOS_USUARIO[tipo]

    query = """insert into users (nombres, apellidos, correo, contraseña,
    cedula, cargo, direccion, telefono, celular, tipo) 
    values (%(nombres)s, %(apellidos)s, %(correo)s, %(passwd)s, 
    %(cedula)s, %(cargo)s, %(direccion)s, %(telefono)s, %(celular)s,
    %(tipo)s)"""
    ConexionDB.make_query(query, datos)
    return {"datos":datos}


              