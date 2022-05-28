from pydantic import BaseModel

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
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    contacts: list[Contact] = []

    class Config:
        orm_mode = True