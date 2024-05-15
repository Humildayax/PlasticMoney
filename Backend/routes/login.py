from fastapi import APIRouter
from models.registro import Login
from db import ConexionDB
app_login = APIRouter()

@app_login.post("")
def search(info:Login):
    datos = info.model_dump()
    query = """update users set activa = 1 where cedula = %(cedula)s"""
    result = ConexionDB.make_query(query, datos)
    return {"Mensaje": f"Bienvenido, {datos['cedula']}"}