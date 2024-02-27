from fastapi import APIRouter
from models.registro import Equipo, Usuario, Mant
from db import ConexionDB
app_admin = APIRouter()

TIPOS_EQUIPO = {
    "preventivo": "p",
    "correctivo" : "c"
}

TIPOS_USUARIO = {
    "invitado": 1,
    "empleado" : 2,
    "administrador": 3
}

###################################### CREATE #################################

@app_admin.post("/addMant")
def addMant(info:Mant):
        datos = info.dict()
        inicio = datos["horaInicio"]
        final = datos["horaFinal"]
        ejec = final-inicio
        datos["tiempoEjec"] = ejec

        query = """insert into mantenimientos (fechaEjecucion, horaInicio,
        horaFinal, tiempoEjec, id, tipo, ubicacion, descripcion, idEquipo)
        values(%(fechaEjecucion)s, %(horaInicio)s, %(horaFinal)s, 
        %(tiempoEjec)s, %(id)s, %(tipo)s, %(ubicacion)s, 
        %(descripcion)s, %(idEquipo)s)"""
        ConexionDB.make_query(query, datos)

        return {"datos":datos}

@app_admin.post("/addEquipo")
def addEquipo(info:Equipo):
        datos = info.dict()
        tipo = datos["tipo"].lower()
        datos["tipo"] = TIPOS_EQUIPO[tipo]

        query = """insert into equipos_mant (id, descripcion, cantUso,
        cantBod, tipo) values (%(id)s, %(descripcion)s, %(cantUso)s,
        %(cantBod)s, %(tipo)s)"""
        ConexionDB.make_query(query, datos)
        return {"datos":datos}

@app_admin.post("/addUser")
def addUser(info:Usuario):
        datos = info.dict()
        tipo = datos["tipo"].lower()
        datos["tipo"] = TIPOS_USUARIO[tipo]

        query = """insert into users (nombres, apellidos, correo, contraseña,
        cedula, cargo, direccion, telefono, celular, tipo) 
        values (%(nombres)s, %(apellidos)s, %(correo)s, %(passwd)s, 
        %(cedula)s, %(cargo)s, %(direccion)s, %(telefono)s, %(celular)s,
        %(tipo)s)"""
        ConexionDB.make_query(query, datos)
        return {"datos":datos}

###################################### READ #################################

@app_admin.get("/getUsers")
def getUsers():
        query = """Select * from users"""
        result = ConexionDB.make_query(query)
        users = []
        for r in result:
            temp = {"id": r[0], 
                    "nombres": r[1], 
                    "apellidos" : r[2],
                    "correo": r[3],
                    "cedula": r[5],
                    "cargo" : r[6],
                    "direccion" : r[7],
                    "telefono": r[8],
                    "celular" : r[9],
                    "tipo": r[10]}
        
            users.append(temp)
        return {"mensaje" : "Consulta correcta", "usuarios" : users}

@app_admin.get("/getEquipos")
def getEquipos():
        query = """Select * from equipos_mant"""
        result = ConexionDB.make_query(query)
        equipos = []
        for r in result:
            temp = {"idEquipo": r[0],
                    "id": r[1], 
                    "descripcion": r[2], 
                    "cantUso": r[3],
                    "cantBod": r[4],
                    "tipo" : r[5]}
        
            equipos.append(temp)
        return {"mensaje" : "Consulta correcta", "equipos" : equipos}

@app_admin.get("/getMantenimiento")
def getMant():
        query = """Select * from mantenimientos"""
        result = ConexionDB.make_query(query)
        mant = []
        for r in result:
            temp = {"idMant": r[0],
                    "fechaEjecucion": r[1], 
                    "horaInicio": r[2], 
                    "horaFinal": r[3],
                    "tiempoEjec": r[4],
                    "id" : r[5],
                    "tipo": r[6],
                    "ubicacion": r[7],
                    "descripcion": r[8],
                    "idEquipo": r[9],}
        
            mant.append(temp)
        return {"mensaje" : "Consulta correcta", "mant" : mant}

###################################### UPDATE #################################

@app_admin.get("/getUser/{id}")
def getUsers(id: str):
        print(id)
        query = """Select * from users where id = %s"""
        result = ConexionDB.make_query(query, id)
        users = []
        for r in result:
            temp = {"id": r[0], 
                    "nombres": r[1], 
                    "apellidos" : r[2],
                    "correo": r[3],
                    "cedula": r[5],
                    "cargo" : r[6],
                    "direccion" : r[7],
                    "telefono": r[8],
                    "celular" : r[9],
                    "tipo": r[10]}
        
            users.append(temp)
        return {"mensaje" : "Consulta correcta", "usuarios" : users}

@app_admin.post("/updateUser/{id}")
def updateUser(info:Usuario):
        datos = info.dict()
        tipo = datos["tipo"].lower()
        datos["tipo"] = TIPOS_USUARIO[tipo]

        query = """update users set nombres = %(nombres)s, 
        apellidos = %(apellidos)s, correo = %(correo)s, contraseña = %(passwd)s,
        cedula = %(cedula)s, cargo = %(cargo)s, direccion = %(direccion)s,
        telefono = %(telefono)s, celular = %(celular)s, tipo = %(tipo)s
        where id = %(id)s"""
        ConexionDB.make_query(query, datos)
        return {"datos":datos}

@app_admin.get("/getEquipo/{idEquipo}")
def getEquipo(idEquipo: str):
        print(idEquipo)
        query = """Select * from equipos_mant where idEquipo = %s"""
        result = ConexionDB.make_query(query, idEquipo)
        equipos = []
        for r in result:
            temp = {"idEquipo": r[0],
                    "id": r[1], 
                    "descripcion": r[2], 
                    "cantUso": r[3],
                    "cantBod": r[4],
                    "tipo" : r[5]}
        
            equipos.append(temp)
        return {"mensaje" : "Consulta correcta", "equipos" : equipos}

@app_admin.post("/updateEquipo/{idEquipo}")
def updateEquipo(info:Equipo):
        datos = info.dict()
        tipo = datos["tipo"].lower()
        datos["tipo"] = TIPOS_EQUIPO[tipo]

        query = """update equipos_mant set id = %(id)s, 
        descripcion = %(descripcion)s, cantUso = %(cantUso)s, 
        cantBod = %(cantBod)s where idEquipo = %(idEquipo)s"""
        ConexionDB.make_query(query, datos)
        return {"datos":datos}

@app_admin.get("/getMant/{idMant}")
def getEquipo(idMant: str):
        print(idMant)
        query = """Select * from mantenimientos where idmantenimiento = %s"""
        result = ConexionDB.make_query(query, idMant)
        mant = []
        for r in result:
            temp = {"idMant": r[0],
                    "fechaEjecucion": r[1], 
                    "horaInicio": r[2], 
                    "horaFinal": r[3],
                    "tiempoEjec": r[4],
                    "id" : r[5],
                    "tipo": r[6],
                    "ubicacion": r[7],
                    "descripcion": r[8],
                    "idEquipo": r[9],}
        
            mant.append(temp)
        return {"mensaje" : "Consulta correcta", "mant" : mant}

@app_admin.post("/updateMant/{idmantenimiento}")
def updateMant(info:Mant):
        datos = info.dict()
        inicio = datos["horaInicio"]
        final = datos["horaFinal"]
        ejec = final-inicio
        datos["tiempoEjec"] = ejec

        query = """update mantenimientos set fechaEjecucion = %(fechaEjecucion)s, 
        horaInicio = %(horaInicio)s, horaFinal = %(horaFinal)s, 
        tiempoEjec = %(tiempoEjec)s, id = %(id)s, tipo = %(tipo)s,
        ubicacion = %(ubicacion)s, descripcion = %(descripcion)s,
        idEquipo = %(idEquipo)s 
        where idmantenimiento = %(idmantenimiento)s"""
        ConexionDB.make_query(query, datos)
        return {"datos":datos}

###################################### DELETE #################################

@app_admin.delete("/deleteEquipo/{id}")
def deleteEquipo(id: str):
        query = """Delete from equipos_mant where idEquipo = %s"""
        ConexionDB.make_query(query, (id,))
        return {"mensaje" : "Equipo eliminado correctamente"}

@app_admin.delete("/deleteMant/{id}")
def deleteMant(id: str):
        query = """Delete from mantenimientos where idmantenimiento = %s"""
        ConexionDB.make_query(query, (id,))
        return {"mensaje" : "mantenimiento eliminado correctamente"}

@app_admin.delete("/deleteUser/{id}")
def deleteUser(id: str):
        query = """Delete from users where id = %s"""
        ConexionDB.make_query(query, (id,))
        return {"mensaje" : "Usuario eliminado correctamente"}
