# models.py
from pydantic import BaseModel


class UserInfo(BaseModel):
    age: int
    gender: str
    height: float
    weight: float
