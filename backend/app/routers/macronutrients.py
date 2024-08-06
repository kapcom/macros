from fastapi import APIRouter
from pydantic import BaseModel, Field, root_validator

router = APIRouter()


class HeightUS(BaseModel):
    feet: int
    inches: int


class MacronutrientInput(BaseModel):
    age: int
    gender: str
    height: float = Field(None, description="Height in cm if is_metric is True, otherwise None")
    height_us: HeightUS = Field(
        None, description="Height in feet and inches if is_metric is False, otherwise None"
    )
    weight: float
    activity_level: str
    is_metric: bool = False

    @root_validator(pre=True)
    def validate_height(cls, values):
        is_metric = values.get("is_metric", False)
        if is_metric:
            if values.get("height") is None:
                raise ValueError("Height in cm must be provided when is_metric is True")
        else:
            if values.get("height_us") is None:
                raise ValueError(
                    "Height in feet and inches must be provided when is_metric is False"
                )
            feet = values["height_us"].get("feet", 0)
            inches = values["height_us"].get("inches", 0)
            values["height"] = feet * 12 + inches
        return values


@router.post("/api/macronutrients")
async def calculate_macronutrients(input: MacronutrientInput):
    return input.dict()
