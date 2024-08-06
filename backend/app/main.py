from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.routers import macronutrients

app = FastAPI()

# Include the macronutrients router with an optional prefix
app.include_router(macronutrients.router, prefix="/api")

# Serve the frontend static files
app.mount("/", StaticFiles(directory="../frontend/build", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
