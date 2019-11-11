BEGIN;

TRUNCATE users, moods, comments RESTART IDENTITY CASCADE;

INSERT INTO users (id, name, email, username, password)
VALUES
    ('1', 'Jeremy', 'Jeremy.leogier@gmail.com', 'Jeremy', 'Jer3my'),
    ('2', 'Jay', 'Jeremy.leogier@airbnb.com', 'Jay', 'j@y');

INSERT INTO moods (id, mood, user_id, created)
VALUES 
    ('1', good, '1', timestamp),
    ('2', bad, '1', timestamp),
    ('3', bad, '2', timestamp),
    ('4', good, '2', timestamp);

INSERT INTO comments (id, user_id, comment)
VALUES
    ('1', '1', 'Good day, got lots of work done'),
    ('2', '1', 'Bad day, did not get work done'),
    ('3', '2', 'Bad day, angry boss'),
    ('4', '2', 'Good day, happy boss');

COMMIT;