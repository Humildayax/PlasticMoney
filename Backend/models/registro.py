from pydantic import BaseModel
from typing import Optional

from pymysql import DATE

class Usuario(BaseModel):
    id: Optional [str]
    cedula: str
    nombres: str
    apellidos: str
    correo: str
    passwd: str
    cargo: Optional [str]
    direccion: Optional [str]
    telefono: Optional [str]
    celular: Optional [str]
    tipo: str

class User(BaseModel):
    id: Optional [str]
    cedula: str
    celular: str
    dinero: str

class Search(BaseModel):
    cedula: str

class Mant(BaseModel):
    idmantenimiento: Optional [str]
    fechaEjecucion: str
    horaInicio: int
    horaFinal: int
    tiempoEjec: Optional [int]
    id: str
    tipo: str
    ubicacion: str
    descripcion: str
    idEquipo: str

class Equipo(BaseModel):
    idEquipo: Optional [str]
    id: str
    descripcion: str
    cantUso: str
    cantBod: str
    tipo: str

