from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    contacts = relationship("Contacts", back_populates="owner")

class Contacts(Base):
    __tablename__= "contacts"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    phonenumber = Column(String)
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner= relationship("User", back_populates="contacts")


    
