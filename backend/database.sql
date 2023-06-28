SET foreign_key_checks = 0;
DROP TABLE IF EXISTS user;

USE db_hackathon2;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  fullname VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(50),
  city VARCHAR(100),
  hashedPassword VARCHAR(100) NOT NULL,
  admin BOOL DEFAULT 0,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;


INSERT INTO user (fullname, email, phone, city, hashedPassword, admin)
VALUES
('John Doe', 'john.dove@example.com', '1234567890', 'New York', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('John Doe', 'john.doe@example.com', '1234567890', 'New York', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0);

SET foreign_key_checks = 1;