USE s430678_DPRPProjekt;

CREATE TABLE IF NOT EXISTS users
(
  id INT AUTO_INCREMENT NOT NULL,
  login VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(30) NOT NULL,
  name VARCHAR(100),
  surname VARCHAR(100),
  birthDate TIMESTAMP,
  isDeleted BOOLEAN DEFAULT FALSE,
  role INT NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InooDB CHARSET=utf8;

CREATE TABLE IF NOT EXISTS roles
(
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InooDB CHARSET=utf8;

ALTER TABLE users
ADD CONSTRAINT fkUsersRoles
FOREIGN KEY (roles)
REFERENCES roles(id);

INSERT INTO roles (name) VALUES ('admin') , ('user');
INSERT INTO users (login, password, name, surname, birthDate,role)
  VALUES ('user1', 'password1', 'Krzysztof', 'Czerwiński', '21-10-1997', 2),
  ('user2', 'password2', 'Krzysztof', 'Popławski', '01-05-1997', 2);
