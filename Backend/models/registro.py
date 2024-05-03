from pydantic import BaseModel

class Register(BaseModel):
    cedula: str
    celular: str

class Login(BaseModel):
    cedula: str

class Update(BaseModel):
    dinero: float