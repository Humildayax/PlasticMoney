from fastapi import APIRouter
from models.registro import Update
from db import ConexionDB
app_update = APIRouter()

@app_update.post("")
def search(info:Update):
    datos = info.model_dump()
    query = """update users set dinero = dinero + %(dinero)s where activa = 1"""
    ConexionDB.make_query(query, datos)
