CREATE DATABASE bancosolar;

DROP TABLE IF EXISTS transferencias;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
id SERIAL PRIMARY KEY, 
nombre VARCHAR(50),
balance FLOAT CHECK (balance >= 0));


CREATE TABLE transferencias (
  id SERIAL PRIMARY KEY, 
  emisor INT, 
  receptor INT, 
  monto FLOAT, 
  fecha TIMESTAMP, 
  FOREIGN KEY (emisor) 
    REFERENCES usuarios(id) 
    ON DELETE CASCADE, 
  FOREIGN KEY (receptor) 
    REFERENCES usuarios(id) 
    ON DELETE CASCADE
);

--seeders
INSERT INTO usuarios (nombre, balance) 
VALUES 
('Alice', 1000), 
('Bob', 500), 
('Charlie', 1500), 
('Diana', 2000), 
('Eve', 2500);

select * from usuarios;
select * from transferencias;

