CREATE DATABASE users;

\c users;

CREATE TABLE IF NOT EXISTS glos_users(
id SERIAL UNIQUE PRIMARY KEY,
firstname VARCHAR(45) NOT NULL,
lastname VARCHAR(45) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(12) NOT NULL,
kayak_minair INT NOT NULL DEFAULT '60',
kayak_minwater INT NOT NULL DEFAULT '60',
kayak_maxwind INT NOT NULL DEFAULT '12',
kayak_maxwave INT NOT NULL DEFAULT '3',
swim_minair INT NOT NULL DEFAULT '75',
swim_minwater INT NOT NULL DEFAULT '75',
swim_maxwind INT NOT NULL DEFAULT '12',
swim_maxwave INT NOT NULL DEFAULT '3',
boat_minair INT NOT NULL DEFAULT '50',
boat_minwater INT NOT NULL DEFAULT '50',
boat_maxwind INT NOT NULL DEFAULT '25',
boat_maxwave INT NOT NULL DEFAULT '8',
)

INSERT INTO
glos_users (firstname, lastname, email, password)
VALUES
('Test', 'User', 'test@grandcircus.com', 'testuser')