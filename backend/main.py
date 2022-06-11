from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

import crud, models, schemas
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=engine)
 
app = FastAPI()
origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



@app.post('/users/', response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code = 400, detail="Email already registered")
    return crud.create_user(db=db, user=user)