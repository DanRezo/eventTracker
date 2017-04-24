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
  `totalMileage` DECIMAL(4) NULL,
  `brand` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
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
INSERT INTO `Shoe` (`id`, `totalMileage`, `brand`, `name`) VALUES (1, 23, 'Nike', 'Vomero 13');
INSERT INTO `Shoe` (`id`, `totalMileage`, `brand`, `name`) VALUES (2, 56, 'Nike', 'Pegasus 34');
INSERT INTO `Shoe` (`id`, `totalMileage`, `brand`, `name`) VALUES (3, 77, 'New Balance', '1080 V6');
INSERT INTO `Shoe` (`id`, `totalMileage`, `brand`, `name`) VALUES (4, 235, 'Altra', 'Torin 3.5');
INSERT INTO `Shoe` (`id`, `totalMileage`, `brand`, `name`) VALUES (5, 300, 'Newton', 'Kismet 3');
INSERT INTO `Shoe` (`id`, `totalMileage`, `brand`, `name`) VALUES (6, 345, 'New Balance', '860V6');
INSERT INTO `Shoe` (`id`, `totalMileage`, `brand`, `name`) VALUES (7, 12, 'Brooks', 'Ghost 10');
INSERT INTO `Shoe` (`id`, `totalMileage`, `brand`, `name`) VALUES (8, 3, 'Asics', 'Nimbus 11');

COMMIT;

