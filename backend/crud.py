from sqlalchemy.orm import Session
from passlib.hash import pbkdf2_sha256
import models, schemas

def get_user(db:Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db:Session, email:str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db:Session, skip:int = 0, limit:int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db:Session, user:schemas.UserCreate):
    hashed_password = pbkdf2_sha256.hash(user.password)
    db_user = models.User(name=user.name,email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_contacts(db:Session, skip: int = 0, limit: int = 100):
    return db.query(models.Contacts).offset(skip).limit(limit)

def create_user_contacts(db: Session, user:schemas.ContactCreate, user_id:int):
    db_contact = models.Contacts(**contact.dict(), owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
