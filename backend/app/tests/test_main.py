import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


class TestGetResponseGood:
    def test_get_root(self):
        response = client.get("/")
        assert response.status_code == 200


class TestMetricMacronutrientsEndpoint:
    def test_macronutrients(self):
        data = {
            "age": 35,
            "gender": "male",
            "height": 175.0,
            "weight": 68.0,
            "activity_level": "moderate",
            "is_metric": True,
        }

        response = client.post("/api/macronutrients", json=data)

        assert response.status_code == 200
        expected_response = {
            "age": 35,
            "gender": "male",
            "height": 175.0,
            "weight": 68.0,
            "activity_level": "moderate",
            "is_metric": True,
            "height_us": None,  # None for metric units
        }
        assert response.json() == expected_response


class TestUSMacronutrientsEndpoint:
    def test_macronutrients(self):
        data = {
            "age": 35,
            "gender": "male",
            "height_us": {"feet": 5, "inches": 9},
            "weight": 150.0,
            "activity_level": "moderate",
            "is_metric": False,
        }

        response = client.post("/api/macronutrients", json=data)

        assert response.status_code == 200
        expected_response = {
            "age": 35,
            "gender": "male",
            "height": 69,  # total inches
            "weight": 150.0,
            "activity_level": "moderate",
            "is_metric": False,
            "height_us": {"feet": 5, "inches": 9},
        }
        assert response.json() == expected_response
