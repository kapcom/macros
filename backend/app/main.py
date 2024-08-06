import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.routers import macronutrients

app = FastAPI()

# Use an environment variable to determine the directory
frontend_directory = os.getenv('FRONTEND_DIRECTORY', 'frontend/build')

# Serve the frontend static files
app.mount("/", StaticFiles(directory=frontend_directory, html=True), name="static")

# Include the macronutrients router
app.include_router(macronutrients.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
