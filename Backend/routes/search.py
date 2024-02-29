from fastapi import APIRouter
from models.registro import Search
from db import ConexionDB
app_search = APIRouter()

@app_search.post("/")
def search(info:Search):
    datos = info.dict()
    query = """Select celular, dinero from users where cedula = %(cedula)s"""
    result = ConexionDB.make_query(query, datos)
    if result:
        datosUser = {"celular" : result[0][1],
                     "dinero" : result[0][10]}
        return {"mensaje":"Bienvenido", "Usuario" : datosUser}
    return {"mensaje": "Numero de Cedula no Encontrado"}
