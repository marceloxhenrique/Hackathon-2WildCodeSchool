SET foreign_key_checks = 0;
DROP TABLE IF EXISTS user, phone, os, brand, model , color, memory, storage, state, category, network, screen_size;

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

CREATE TABLE os (
  id INT NOT NULL AUTO_INCREMENT,
  os VARCHAR(100) NOT NULL,
  version VARCHAR(50),
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE brand (
  id INT NOT NULL AUTO_INCREMENT,
  brand VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE model (
  id INT NOT NULL AUTO_INCREMENT,
  model VARCHAR(100) NOT NULL,
  indice VARCHAR(50),
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE color (
  id INT NOT NULL AUTO_INCREMENT,
  color VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE memory (
  id INT NOT NULL AUTO_INCREMENT,
  memory VARCHAR(100) NOT NULL,
  val_m VARCHAR(50),
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE storage (
  id INT NOT NULL AUTO_INCREMENT,
  storage VARCHAR(100) NOT NULL,
  val_s VARCHAR(50),
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE state (
  id INT NOT NULL AUTO_INCREMENT,
  state VARCHAR(50) NOT NULL,
  ponderation INT,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE category(
  id INT NOT NULL AUTO_INCREMENT,
  category VARCHAR(100) NOT NULL,
  val_min VARCHAR(100) NOT NULL,
  val_max VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE network (
  id INT NOT NULL AUTO_INCREMENT,
  network VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE screen_size (
  id INT NOT NULL AUTO_INCREMENT,
  size VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE phone (
  id INT NOT NULL AUTO_INCREMENT,
  os_id INT NOT NULL,
  brand_id INT NOT NULL,
  model_id INT NOT NULL,
  color_id INT NOT NULL,
  memory_id INT NOT NULL,
  storage_id INT NOT NULL,
  state_id INT,
  category_id INT,
  charger BOOL,
  network_id INT,
  screen_size_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (os_id) REFERENCES os(id),
  FOREIGN KEY (brand_id) REFERENCES brand(id),
  FOREIGN KEY (model_id) REFERENCES model(id),
  FOREIGN KEY (color_id) REFERENCES color(id),
  FOREIGN KEY (memory_id) REFERENCES memory(id),
  FOREIGN KEY (storage_id) REFERENCES storage(id),
  FOREIGN KEY (state_id) REFERENCES state(id),
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (network_id) REFERENCES network(id),
  FOREIGN KEY (screen_size_id) REFERENCES screen_size(id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

SET foreign_key_checks = 0;


INSERT INTO user (fullname, email, phone, city, hashedPassword, admin)
VALUES
  ('John Doe', 'john.doe@example.com', '1234567890', 'New York', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Jane Smith', 'jane.smith@example.com', '9876543210', 'Los Angeles', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Michael Johnson', 'michael.johnson@example.com', '5551234567', 'Chicago', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Emily Davis', 'emily.davis@example.com', '9871234560', 'San Francisco', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Daniel Wilson', 'daniel.wilson@example.com', '5557890123', 'Seattle', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Sarah Thompson', 'sarah.thompson@example.com', '1237894560', 'Houston', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Christopher Moore', 'christopher.moore@example.com', '5554567890', 'Miami', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Olivia Harris', 'olivia.harris@example.com', '9870123456', 'Dallas', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Matthew Clark', 'matthew.clark@example.com', '5557891230', 'Denver', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0),
  ('Ava Turner', 'ava.turner@example.com', '1230123456', 'Boston', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0);


INSERT INTO phone (os_id, brand_id, model_id, color_id, memory_id, storage_id, state_id, category_id, charger, network_id, screen_size_id)
VALUES
  (1, 1, 1, 1, 1, 1, 1, 1, true, 1, 1),
  (1, 1, 1, 2, 2, 2, 2, 2, false, 2, 2),
  (2, 2, 2, 1, 1, 1, 1, 1, true, 1, 1),
  (2, 2, 2, 2, 2, 2, 2, 2, false, 2, 2),
  (1, 2, 1, 1, 2, 1, 1, 2, true, 2, 1),
  (1, 2, 1, 2, 1, 2, 2, 1, false, 1, 2),
  (2, 1, 2, 1, 2, 1, 2, 2, true, 2, 1),
  (2, 1, 2, 2, 1, 2, 1, 1, false, 1, 2),
  (1, 1, 2, 1, 1, 2, 2, 2, true, 2, 2),
  (2, 2, 1, 2, 2, 1, 1, 1, false, 1, 1);


INSERT INTO os (os, version)
VALUES
  ('Android', '11'),
  ('iOS', '15');

INSERT INTO brand (brand)
VALUES
  ('Samsung'),
  ('Google'),
  ('Huawei'),
  ('OnePlus'),
  ('Xiaomi');

INSERT INTO model (model, indice)
VALUES
  ('Samsung Galaxy', 'S21'),
  ('Google Pixel', '5'),
  ('Huawei P', '40'),
  ('OnePlus', '9'),
  ('Xiaomi Redmi', 'Note 10');

INSERT INTO color (color)
VALUES
  ('Silver'),
  ('Blue'),
  ('Black'),
  ('White'),
  ('Pink');

INSERT INTO memory (memory, val_m)
VALUES
  ('4GB', '25'),
  ('6GB', '35'),
  ('8GB', '50'),
  ('12GB', '70'),
  ('16GB', '90');

INSERT INTO storage (storage, val_s)
VALUES
  ('64GB', '30'),
  ('128GB', '50'),
  ('256GB', '80'),
  ('512GB', '100');

INSERT INTO state (state, ponderation)
VALUES
  ('Excellent', 100),
  ('Good', 80),
  ('Fair', 50),
  ('Poor', 20),
  ('Broken', 0);

INSERT INTO category (category, val_min, val_max)
VALUES
  ('A', '0', '50'),
  ('B', '51', '100'),
  ('C', '101', '150'),
  ('D', '151', '200'),
  ('E', '201', '255');

INSERT INTO network (network)
VALUES
  ('2G'),
  ('3G'),
  ('4G'),
  ('5G');

INSERT INTO screen_size (size)
VALUES
  ('5.5'),
  ('6'),
  ('6.2'),
  ('6.5'),
  ('6.7');

SET foreign_key_checks = 1;
