from fastapi import APIRouter
from app.models import UserInfo
from pydantic import BaseModel

router = APIRouter()

class MacronutrientInput(BaseModel):
    age: int
    gender: str
    height: float
    weight: float
    activity_level: str

@router.post("/macronutrients")
async def calculate_macronutrients(input: MacronutrientInput):
    return input.dict()
