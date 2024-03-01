from fastapi import APIRouter
from models.registro import Search
from db import ConexionDB
app_search = APIRouter()

@app_search.post("")
def search(info:Search):
    datos = info.model_dump()
    query = """Select celular, dinero from users where cedula = %(cedula)s"""
    result = ConexionDB.make_query(query, datos)
    if result:
        return {"mensaje": "Numero de Cedula Encontrado"}
    return {"mensaje": "Numero de Cedula no Encontrado"}
