from pydantic import BaseModel

class UserInfo(BaseModel):
    age: int
    gender: str
    height: float
    weight: float
    activity_level: str
    is_metric: bool
