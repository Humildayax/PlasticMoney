from fastapi import APIRouter
from models.registro import User
from db import ConexionDB
app_register = APIRouter()

@app_register.post("")
def search(info:User):
    datos = info.model_dump()

    query = """insert into users (cedula, celular, dinero)
    values (%(cedula)s, %(celular)s, %(dinero)s)"""
    ConexionDB.make_query(query, datos)
    return {"datos":datos}
