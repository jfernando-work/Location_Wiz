CREATE TABLE users (
    id INTEGER NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    score INTEGER NOT NULL,
    hashcode TEXT NOT NULL,
    PRIMARY KEY(id)
);