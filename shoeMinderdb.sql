-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema shoeMinder
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `shoeMinder` ;

-- -----------------------------------------------------
-- Schema shoeMinder
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shoeMinder` DEFAULT CHARACTER SET utf8 ;
USE `shoeMinder` ;

-- -----------------------------------------------------
-- Table `Shoe`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoe` ;

CREATE TABLE IF NOT EXISTS `Shoe` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `currentMileage` INT NULL,
  `totalMileage` INT NULL,
  `brand` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Shoe`
-- -----------------------------------------------------
START TRANSACTION;
USE `shoeMinder`;
INSERT INTO `Shoe` (`id`, `currentMileage`, `totalMileage`, `brand`, `name`, `image`) VALUES (1, 0, 23, 'Nike', 'Vomero 13', NULL);
INSERT INTO `Shoe` (`id`, `currentMileage`, `totalMileage`, `brand`, `name`, `image`) VALUES (2, 0, 56, 'Nike', 'Pegasus 34', NULL);
INSERT INTO `Shoe` (`id`, `currentMileage`, `totalMileage`, `brand`, `name`, `image`) VALUES (3, 0, 77, 'New Balance', '1080 V6', NULL);
INSERT INTO `Shoe` (`id`, `currentMileage`, `totalMileage`, `brand`, `name`, `image`) VALUES (4, 0, 235, 'Altra', 'Torin 3.5', NULL);
INSERT INTO `Shoe` (`id`, `currentMileage`, `totalMileage`, `brand`, `name`, `image`) VALUES (5, 0, 300, 'Newton', 'Kismet 3', NULL);
INSERT INTO `Shoe` (`id`, `currentMileage`, `totalMileage`, `brand`, `name`, `image`) VALUES (6, 0, 345, 'New Balance', '860V6', NULL);
INSERT INTO `Shoe` (`id`, `currentMileage`, `totalMileage`, `brand`, `name`, `image`) VALUES (7, 0, 12, 'Brooks', 'Ghost 10', NULL);
INSERT INTO `Shoe` (`id`, `currentMileage`, `totalMileage`, `brand`, `name`, `image`) VALUES (8, 0, 3, 'Asics', 'Nimbus 11', NULL);

COMMIT;

