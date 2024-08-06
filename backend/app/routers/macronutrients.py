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
    is_metric: bool = False

@router.post("/api/macronutrients")
async def calculate_macronutrients(input: MacronutrientInput):
    return input.dict()
