from fastapi import APIRouter
from models.registro import Login
from db import ConexionDB
app_search = APIRouter()

@app_search.post("")
def search(info:Login):
    datos = info.model_dump()
    query = """Select celular, dinero from users where cedula = %(cedula)s and activa = 1"""
    result = ConexionDB.make_query(query, datos)
    if result:
        celular, dinero = result[0]
        return {"celular": f"{celular}", "dinero": f"{dinero}"}
    return {"mensaje": "Numero de Cedula Encontrado"}
