# tests/test_main.py
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_calculate_macronutrients():
    response = client.post("/calculate", json={"age": 25, "gender": "male", "height": 175, "weight": 70})
    assert response.status_code == 200
    assert response.json() == {
        "message": "Macronutrients calculated successfully",
        "data": {
            "age": 25,
            "gender": "male",
            "height": 175,
            "weight": 70
        }
    }
