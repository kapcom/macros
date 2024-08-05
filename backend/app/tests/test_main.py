import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

class TestGetResponseGood:
    def test_get_root(self):
        response = client.get("/")
        assert response.status_code == 200
