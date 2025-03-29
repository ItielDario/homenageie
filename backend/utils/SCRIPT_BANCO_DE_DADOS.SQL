CREATE SCHEMA homenagem_db;
USE homenagem_db;

CREATE TABLE Destinatario (
  desId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  desNome VARCHAR(50) NOT NULL
);

CREATE TABLE Remetente (
  remId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  remEmail VARCHAR(45) NOT NULL,
  remPlano INT NOT NULL,
  remMensagem VARCHAR(201) NULL,
  remMusica VARCHAR(60) NULL,
  desId INT NOT NULL,
  CONSTRAINT fk_remetente_destinatario
    FOREIGN KEY (desId)
    REFERENCES Destinatario (desId)
);

CREATE TABLE Imagem (
  imgId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  imgNome VARCHAR(45) NOT NULL,
  remId INT NOT NULL,
  desId INT NOT NULL,
  CONSTRAINT fk_img_remetente_remetente
    FOREIGN KEY (remId)
    REFERENCES Remetente (remId),
  CONSTRAINT fk_img_remetente_destinatario
    FOREIGN KEY (desId)
    REFERENCES Destinatario (desId)
);
