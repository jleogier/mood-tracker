-- SET TIME ZONE 'America/Los Angeles';

CREATE TABLE moods (
    id INT PRIMARY KEY NOT NULL,
    email TEXT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    mood TEXT NULL
);