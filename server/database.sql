CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    status VARCHAR(255),
    createdAt integer,
    lastUpdatedAt integer
)