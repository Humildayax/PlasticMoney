import uvicorn
from fastapi import FastAPI
from routes.register import app_register
from routes.search import app_search
from routes.update import app_update
from routes.disconnect import app_disconnect
from routes.login import app_login
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="PlasticMoney", version="1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(app_register, prefix="/register")
app.include_router(app_login, prefix="/login")
app.include_router(app_search, prefix="/search")
app.include_router(app_update, prefix="/update")
app.include_router(app_disconnect, prefix="/disconnect")



@app.get("/")
def initial_app():
    return {"mensaje" : "Backend Running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=4443)
