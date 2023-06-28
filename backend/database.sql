
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

INSERT INTO user (fullname, email, phone, city, hashedPassword, admin)
VALUES
  ('John Doe', 'john.doe@example.com', '1234567890', 'New York', '$argon2id$v=19$m=19456,t=2,p=1$vvakCosUkyOkLzeryb3Ahg$8mfwLBB4Wqv7sDLSoRDSuKqADfnC/cSVo8wHvOnLdLI', 0);

INSERT INTO os (os, version)
VALUES ('iOS', '14');

INSERT INTO brand (brand)
VALUES ('Apple');

INSERT INTO model (model, indice)
VALUES ('Apple', '');

INSERT INTO color (color)
VALUES ('Noir');

INSERT INTO memory (memory, val_m)
VALUES ('8RAM', '50');

INSERT INTO storage (storage, val_s)
VALUES ('32', '50');

INSERT INTO state (state, ponderation)
VALUES ('Good', '50');

INSERT INTO category (category, val_min, val_max)
VALUES ('3-B', '165', '255');

INSERT INTO network (network)
VALUES ('4G');

INSERT INTO screen_size (size)
VALUES ('6');

INSERT INTO phone (os_id, brand_id, model_id, color_id, memory_id, storage_id, state_id, category_id, charger, network_id, screen_size_id)
VALUES (1, 1, 1, 1, 1, 1,  1, 1, true, 1, 1  );

SET foreign_key_checks = 1;

