from fastapi import APIRouter
from models.registro import Update
from db import ConexionDB
app_update = APIRouter()

@app_update.post("")
def search(info:Update):
    datos = info.model_dump()
    if datos["celular"] == "blank":
        query = """update users set dinero = %(dinero)s where cedula = %(cedula)s"""
    elif datos["dinero"] == "blank":
        query = """update users set celular = %(celular)s where cedula = %(cedula)s"""
    else:
        query = """update users set dinero = %(dinero)s, celular = %(celular)s where cedula = %(cedula)s"""
    ConexionDB.make_query(query, datos)
    return {"datos":datos}
