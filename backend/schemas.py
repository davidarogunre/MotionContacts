from pydantic import BaseModel
from typing import Union

class ContactBase(BaseModel):
    name: str
    email: str | None = None

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    name: str
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    contacts: list[Contact] = []

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Union[str, None] = None