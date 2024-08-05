# routers/macronutrients.py
from fastapi import APIRouter
from app.models import UserInfo

router = APIRouter()


@router.post("/calculate")
async def calculate_macronutrients(user_info: UserInfo):
    # Add logic to calculate macronutrients here, rn just returning input data
    return {"message": "Macronutrients calculated successfully", "data": user_info}
