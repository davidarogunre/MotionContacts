FROM python:3.10

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip3 install -r /code/requirements.txt

COPY ./ /code/

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]