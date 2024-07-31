from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse
from pydantic import BaseModel

app = FastAPI()

class UserInput(BaseModel):
    age: int
    gender: str
    height: float
    weight: float

@app.get("/", response_class=HTMLResponse)
async def read_form():
    return """
    <html>
        <head>
            <title>Macronutrients Calculator</title>
        </head>
        <body>
            <h1>Macronutrients Calculator</h1>
            <form action="/submit" method="post">
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required><br><br>
                <label for="gender">Gender:</label>
                <input type="text" id="gender" name="gender" required><br><br>
                <label for="height">Height (cm):</label>
                <input type="number" id="height" name="height" required><br><br>
                <label for="weight">Weight (kg):</label>
                <input type="number" id="weight" name="weight" required><br><br>
                <input type="submit" value="Calculate">
            </form>
        </body>
    </html>
    """

@app.post("/submit")
async def handle_form(age: int = Form(...), gender: str = Form(...), height: float = Form(...), weight: float = Form(...)):
    return {
        "age": age,
        "gender": gender,
        "height": height,
        "weight": weight
    }
