from pydantic import BaseModel
from typing import Optional

from pymysql import DATE

class User(BaseModel):
    cedula: str
    celular: str
    dinero: str

class Search(BaseModel):
    cedula: str

class Update(BaseModel):
    cedula: str
    celular: str | None = 'blank'
    dinero: str | None = 'blank'
