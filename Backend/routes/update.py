from fastapi import APIRouter
from models.registro import User
from db import ConexionDB
app_update = APIRouter()

@app_update.post("/")
def search(info:User):
    datos = info.dict()

    query = """update users set dinero = %(dinero)s where cedula = %(cedula)s"""
    ConexionDB.make_query(query, datos)
    return {"datos":datos}