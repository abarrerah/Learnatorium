-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `idRole` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idRole`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT NOT NULL,
  `UserName` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `RegistTime` VARCHAR(45) NOT NULL,
  `Bio` VARCHAR(250) NULL,
  `profilePic` VARCHAR(500) NULL,
  `ranking` INT NOT NULL,
  `Role_idRole` INT NOT NULL,
  PRIMARY KEY (`idUser`),
  INDEX `fk_User_Role_idx` (`Role_idRole` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role`
    FOREIGN KEY (`Role_idRole`)
    REFERENCES `mydb`.`Role` (`idRole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Category` (
  `idCategory` INT NOT NULL,
  `CategoryName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User_isSubcribedto_User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User_isSubcribedto_User` (
  `User_idUser` INT NOT NULL,
  `User_idUser1` INT NOT NULL,
  PRIMARY KEY (`User_idUser`, `User_idUser1`),
  INDEX `fk_User_has_User_User2_idx` (`User_idUser1` ASC) VISIBLE,
  INDEX `fk_User_has_User_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_User_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_User_User2`
    FOREIGN KEY (`User_idUser1`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Source`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Source` (
  `idSource` INT NOT NULL,
  `ISBN` VARCHAR(100) NOT NULL,
  `dateCreation` DATETIME NOT NULL,
  `dateValidation` DATETIME NULL,
  `URL` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idSource`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Chapter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Chapter` (
  `idChapter` INT NOT NULL,
  `groupName` VARCHAR(500) NOT NULL,
  `Author` VARCHAR(500) NOT NULL,
  `lastRevision` DATETIME NOT NULL,
  PRIMARY KEY (`idChapter`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Theme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Theme` (
  `idTheme` INT NOT NULL,
  `themeName` VARCHAR(50) NOT NULL,
  `cssStyle` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idTheme`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Documents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Documents` (
  `idDocuments` INT NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `Description` VARCHAR(4000) NOT NULL,
  `CreationDate` DATE NOT NULL,
  `Source_idSource` INT NOT NULL,
  `Category_idCategory` INT NOT NULL,
  `Chapter_idChapter` INT NOT NULL,
  `Theme_idTheme` INT NOT NULL,
  PRIMARY KEY (`idDocuments`, `Chapter_idChapter`),
  INDEX `fk_Documents_Source1_idx` (`Source_idSource` ASC) VISIBLE,
  INDEX `fk_Documents_Category1_idx` (`Category_idCategory` ASC) VISIBLE,
  INDEX `fk_Documents_Chapter1_idx` (`Chapter_idChapter` ASC) VISIBLE,
  INDEX `fk_Documents_Theme1_idx` (`Theme_idTheme` ASC) VISIBLE,
  CONSTRAINT `fk_Documents_Source1`
    FOREIGN KEY (`Source_idSource`)
    REFERENCES `mydb`.`Source` (`idSource`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documents_Category1`
    FOREIGN KEY (`Category_idCategory`)
    REFERENCES `mydb`.`Category` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documents_Chapter1`
    FOREIGN KEY (`Chapter_idChapter`)
    REFERENCES `mydb`.`Chapter` (`idChapter`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documents_Theme1`
    FOREIGN KEY (`Theme_idTheme`)
    REFERENCES `mydb`.`Theme` (`idTheme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Documents_has_User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Documents_has_User` (
  `Documents_idDocuments` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`Documents_idDocuments`, `User_idUser`),
  INDEX `fk_Documents_has_User_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Documents_has_User_Documents1_idx` (`Documents_idDocuments` ASC) VISIBLE,
  CONSTRAINT `fk_Documents_has_User_Documents1`
    FOREIGN KEY (`Documents_idDocuments`)
    REFERENCES `mydb`.`Documents` (`idDocuments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documents_has_User_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Comment` (
  `idComment` INT NOT NULL,
  `Content` VARCHAR(4555) NOT NULL,
  `likes` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  `Documents_idDocuments` INT NOT NULL,
  PRIMARY KEY (`idComment`, `User_idUser`, `Documents_idDocuments`),
  INDEX `fk_Comment_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Comment_Documents1_idx` (`Documents_idDocuments` ASC) VISIBLE,
  CONSTRAINT `fk_Comment_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comment_Documents1`
    FOREIGN KEY (`Documents_idDocuments`)
    REFERENCES `mydb`.`Documents` (`idDocuments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Test`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Test` (
  `idTest` INT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `Description` VARCHAR(455) NOT NULL,
  `isActive` TINYINT NOT NULL,
  PRIMARY KEY (`idTest`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`TestOption`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`TestOption` (
  `idTestOption` INT NOT NULL,
  `isRight` TINYINT NOT NULL,
  `optionInfo` VARCHAR(45) NOT NULL,
  `Test_idTest` INT NOT NULL,
  PRIMARY KEY (`idTestOption`),
  INDEX `fk_TestOption_Test1_idx` (`Test_idTest` ASC) VISIBLE,
  CONSTRAINT `fk_TestOption_Test1`
    FOREIGN KEY (`Test_idTest`)
    REFERENCES `mydb`.`Test` (`idTest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`UserOption`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`UserOption` (
  `idUserOption` INT NOT NULL,
  `Test_idTest` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  `TestOption_idTestOption` INT NOT NULL,
  `itIsRight` TINYINT NOT NULL,
  `AnswerTime` DATETIME NOT NULL,
  `Points` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUserOption`, `Test_idTest`, `User_idUser`, `TestOption_idTestOption`),
  INDEX `fk_UserOption_Test1_idx` (`Test_idTest` ASC) VISIBLE,
  INDEX `fk_UserOption_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_UserOption_TestOption1_idx` (`TestOption_idTestOption` ASC) VISIBLE,
  CONSTRAINT `fk_UserOption_Test1`
    FOREIGN KEY (`Test_idTest`)
    REFERENCES `mydb`.`Test` (`idTest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UserOption_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UserOption_TestOption1`
    FOREIGN KEY (`TestOption_idTestOption`)
    REFERENCES `mydb`.`TestOption` (`idTestOption`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

