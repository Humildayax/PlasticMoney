from fastapi import APIRouter
from models.registro import Login
from db import ConexionDB
app_disconnect = APIRouter()

@app_disconnect.post("")
def search(info:Login):
    datos = info.model_dump()
    query = """update users set activa = 0 where cedula = %(cedula)s"""
    ConexionDB.make_query(query, datos)
    return {"Mensaje": "Desconectado"}