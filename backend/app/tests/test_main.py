import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

class TestGetResponseGood:
    def test_get_root(self):
        response = client.get("/")
        assert response.status_code == 200

class TestMacronutrientsEndpoint:
    def test_macronutrients(self):
        data = {
            "age": 35,
            "gender": "male",
            "height": 175.0,
            "weight": 68.0,
            "activity_level": "moderate",
            "is_metric": True
        }

        response = client.post("/api/macronutrients", json=data)

        assert response.status_code == 200
        assert response.json() == data
