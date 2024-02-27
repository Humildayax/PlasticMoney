import uvicorn
from fastapi import FastAPI
from routes.registro import app_registro
from routes.login import app_login
from routes.administrador import app_admin
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Mi aplicacion", version="1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(app_registro, prefix="/registro")
app.include_router(app_login, prefix="/login")
app.include_router(app_admin, prefix="/admin")

@app.get("/")
def initial_app():
    return {"mensaje" : "Backend Running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=4443)
