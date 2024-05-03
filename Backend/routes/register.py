from fastapi import APIRouter
from models.registro import Register
from db import ConexionDB
app_register = APIRouter()

@app_register.post("")
def search(info:Register):
    datos = info.model_dump()
    query = """insert into users (cedula, celular)
    values (%(cedula)s, %(celular)s)"""
    ConexionDB.make_query(query, datos)
    return {"Registrado": datos}
