-- MariaDB dump 10.17  Distrib 10.5.5-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: JWT
-- ------------------------------------------------------
-- Server version	10.5.5-MariaDB-1:10.5.5+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Category` (
  `catId` int(11) NOT NULL AUTO_INCREMENT,
  `catName` varchar(50) NOT NULL,
  `relatedColor` varchar(50) NOT NULL,
  PRIMARY KEY (`catId`),
  UNIQUE KEY `name` (`catName`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (1,'History','#3498db'),(2,'Science','#2ecc71'),(3,'Physics','#f1c40f'),(4,'Health','#e74c3c'),(5,'Society','#9b59b6'),(6,'Music','#34495e');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Chapter`
--

DROP TABLE IF EXISTS `Chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Chapter` (
  `chapterId` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(50) NOT NULL,
  `author` varchar(50) DEFAULT NULL,
  `last_revision` datetime NOT NULL,
  PRIMARY KEY (`chapterId`),
  UNIQUE KEY `group_name` (`group_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Chapter`
--

LOCK TABLES `Chapter` WRITE;
/*!40000 ALTER TABLE `Chapter` DISABLE KEYS */;
INSERT INTO `Chapter` VALUES (1,'Second World War','Abraham B','2021-06-08 13:42:00'),(8,'la culpada','Abraham','2021-05-16 11:54:24'),(9,'Battle of Verdun','Abraham','2021-05-16 12:17:20'),(10,'Battle of Marné','Abraham','2021-05-16 12:18:20'),(11,'Let´s begin','Abraham','2021-06-08 11:58:32');
/*!40000 ALTER TABLE `Chapter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Document`
--

DROP TABLE IF EXISTS `Document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Document` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `summary` varchar(60) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `creation_date` date NOT NULL,
  `theme` int(10) unsigned NOT NULL,
  `category` int(11) NOT NULL,
  `chapter` int(11) NOT NULL,
  `source` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `document_theme_foreign` (`theme`),
  KEY `document_category_foreign` (`category`),
  KEY `document_chapter_foreign` (`chapter`),
  KEY `document_source_foreign` (`source`),
  CONSTRAINT `document_category_foreign` FOREIGN KEY (`category`) REFERENCES `Category` (`catId`) ON DELETE CASCADE,
  CONSTRAINT `document_chapter_foreign` FOREIGN KEY (`chapter`) REFERENCES `Chapter` (`chapterId`) ON DELETE CASCADE,
  CONSTRAINT `document_source_foreign` FOREIGN KEY (`source`) REFERENCES `Source` (`sourceId`) ON DELETE CASCADE,
  CONSTRAINT `document_theme_foreign` FOREIGN KEY (`theme`) REFERENCES `Theme` (`themeId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Document`
--

LOCK TABLES `Document` WRITE;
/*!40000 ALTER TABLE `Document` DISABLE KEYS */;
INSERT INTO `Document` VALUES (56,'paquita','paquita','dale','2021-06-05',4,1,1,1),(59,'Balón de Oro 125','Premio que se otorga al mejor jugador del año','El Balón de Oro es  sdfjsdhfhsdfhsdfhsdhfhsdfhsdhfhsdfhsdfh sdfhsdhfhsdfhsdfhsdhfshdfsd hsdfhsdhfhsdfsdhfh hsdfhsdfhsdhfsdhf hsdfhsdfhsdfhsdf hfhsdfhsdhfhsdfhsdfh hdfhsdfhsdfh hfsdhfhsdfhsdhfh dfsdf premio otorgado anualmente por la revista francesa especializada France Footbal, estando considerado como el mayor honor individual a nivel futbolístico del mundo. Entregado ininterrumpidamente desde 1956, a partir de 2009 se fusionó con el premio homólogado del FIFA World Player para designar al mejor futbolista hasta que ambos galardones volvieron a separarse en 2016.En 2020, a causas del coronavirus, France Footbal decidió no entregar el b','2021-06-06',4,1,1,1),(60,'prueba 1','hhsdhfsdhf','shdfhSDFHGFHSHDFHSDFHDSFHSHDFHSDFHSDHFSHDFHSDFHSDHFSDHFHSDFHSDFHSDHFHSDFHSFHSDFHSDFHSHDFHSDFHSDFHSDHFSHDFHSDFHSDFHSDHFHSDFHSDFHSDHFHSDFHSDFHSDHFSHFHSF , SDHFHSDFHSDFSD , HSDFHSD SDHF HSDF HFDHFSDF ','2021-06-10',4,1,1,1),(66,'Balón de Oro 1255','Premio que se otorga al mejor jugador del año','El Balón de Oro es un premio otorgado anualmente por la revista francesa especializada France Footbal, estando considerado como el mayor honor individual a nivel futbolístico del mundo. Entregado ininterrumpidamente desde 1956, a partir de 2009 se fusionó con el premio homólogado del FIFA World Player para designar al mejor futbolista hasta que ambos galardones volvieron a separarse en 2016.En 2020, a causas del coronavirus, France Footbal decidió no entregar el b','2021-06-14',4,1,1,1),(67,'vector','es vector','vector es vectorial','2021-06-14',4,1,1,1),(68,'Red Dead Redemption','el lejano oeste no es un juego...','Red Dead Redemption es un videojuego no lineal de acción-aventura wéstern desarrollado por Rockstar San Diego. El videojuego fue anunciado oficialmente el 4 de febrero de 2009, y se lanzó el 18 de mayo de 2010 en Norteamerica y el 21 de mayo en Europa y Australia para Xbox 360 y PlayStation . Es considerado el sucesor espiritual de Red Dead Revolver , lanzado en 2004.\nLa historia de Red Dead Redemption transcurre en los últimos años del lejano oeste estadounidiense, en 1911, y narra la historia del antiguo bandido John MArston, que es chantajeado por los agentes federales que tienen amenazada a su familia para que ayude a imponer la ley en la frontera mexicano-estadounidiense y capture a su antiguo compañero, y actual bandido, Bill Williamson. La acción del videojuego se sitúa en los estados ficticios de New Austin, Nuevo Paraíso y West Elizabeth.','2021-06-14',4,1,1,1);
/*!40000 ALTER TABLE `Document` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
INSERT INTO `Role` VALUES (10,'Admin','Administrator'),(11,'standar','standar user of the application'),(12,'premium','premium user of the application. This kind of user has special skills that standar doesn´t have.'),(13,'banned','Users than have been banned from Learnatorium because they did something against our rules.');
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Source`
--

DROP TABLE IF EXISTS `Source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Source` (
  `sourceId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `isbn` varchar(50) DEFAULT NULL,
  `creation` date NOT NULL,
  `validation` date NOT NULL,
  PRIMARY KEY (`sourceId`),
  UNIQUE KEY `isbn` (`isbn`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Source`
--

LOCK TABLES `Source` WRITE;
/*!40000 ALTER TABLE `Source` DISABLE KEYS */;
INSERT INTO `Source` VALUES (1,'979-84-16823-53-6','2021-04-25','2021-04-25'),(4,'978-84-16812-55-5','2021-05-03','2021-05-16'),(6,'978-84-16812-55-7','2021-05-04','2021-05-04'),(7,'978-84-16812-55-8','2021-05-04','2021-05-04'),(8,'978-84-16812-55-9','2021-05-04','2021-05-04'),(9,'978-84-16812-56-1','2021-05-04','2021-05-04'),(10,'978-84-16812-56-2','2021-05-04','2021-05-04'),(11,'978-84-16812-56-3','2021-05-04','2021-05-04'),(13,'978-84-16812-56-4','2021-05-04','2021-05-04'),(14,'978-84-16812-56-5','2021-05-04','2021-05-04'),(15,'978-84-16812-56-6','2021-05-04','2021-05-18'),(16,'978-84-16812-56-7','2021-05-04','2021-06-16'),(17,'978-84-16812-56-8','2021-05-04','2021-05-04'),(18,'978-84-16812-56-9','2021-05-04','2021-05-04'),(19,'978-84-16812-57-1','2021-05-04','2021-05-04'),(20,'978-84-16812-57-2','2021-05-04','2021-05-04'),(21,'978-84-16812-57-3','2021-05-04','2021-05-04'),(22,'978-84-16812-57-4','2021-05-04','2021-05-04'),(23,'978-84-16812-57-5','2021-05-04','2021-05-04'),(24,'978-84-16812-57-6','2021-05-04','2021-05-04'),(25,'978-84-16812-57-7','2021-05-04','2021-05-27'),(26,'978-84-16812-57-8','2021-05-04','2021-05-04'),(27,'978-84-16812-57-9','2021-05-04','2021-05-04'),(28,'978-84-16812-58-9','2021-05-16','2021-05-16'),(29,'978-84-16812-59-4','2021-05-16','2021-05-16'),(30,'978-84-16812-59-7','2021-05-16','2021-05-16');
/*!40000 ALTER TABLE `Source` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Test`
--

DROP TABLE IF EXISTS `Test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Test` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `description` (`description`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Test`
--

LOCK TABLES `Test` WRITE;
/*!40000 ALTER TABLE `Test` DISABLE KEYS */;
/*!40000 ALTER TABLE `Test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TestOptions`
--

DROP TABLE IF EXISTS `TestOptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TestOptions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_right` tinyint(1) NOT NULL,
  `info` varchar(60) NOT NULL,
  `test_belongs_to` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `testoptions_test_belongs_to_foreign` (`test_belongs_to`),
  CONSTRAINT `testoptions_test_belongs_to_foreign` FOREIGN KEY (`test_belongs_to`) REFERENCES `Test` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TestOptions`
--

LOCK TABLES `TestOptions` WRITE;
/*!40000 ALTER TABLE `TestOptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `TestOptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Theme`
--

DROP TABLE IF EXISTS `Theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Theme` (
  `themeId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `themeName` varchar(255) NOT NULL,
  `style` varchar(255) NOT NULL,
  PRIMARY KEY (`themeId`),
  UNIQUE KEY `name` (`themeName`),
  UNIQUE KEY `style` (`style`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Theme`
--

LOCK TABLES `Theme` WRITE;
/*!40000 ALTER TABLE `Theme` DISABLE KEYS */;
INSERT INTO `Theme` VALUES (4,'city3','city3.css'),(5,'hola','6fg.css'),(11,'hojaldre','dre.css'),(12,'hojaldre23','dre23.css'),(13,'hojaldre235','dre235.css'),(16,'hojaldre2356','dre2355.css'),(17,'hundai','hundai.css');
/*!40000 ALTER TABLE `Theme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `password` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (30,'paté','patux@gmail.com','$2a$10$xv9y3.MmZsxW7SUDQPN/B.wm2G9kWM3vPz0RZ4STZpriwY17uPX3i',10),(35,'c','c@c.com','$2a$10$1MGO9k3O0EYRNUoP9jHdP.q.qP0EPPinZIcmvK1YBMVeO/1ZHKPkq',10),(38,'marlád','mahtup@gmail.com','$2a$10$YwMQ3ZwD96SaYTdmHl/XXuYFtYw2Y.AWQMeZQM9uqjmtWc4szuED2',10),(39,'g3x','g3x@gmail.com','$2a$10$yIcFk6aVyCCakSkU/UUk7.Aaam7izPeanl7/1lfflXjQXh9jng6m2',11);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserOption`
--

DROP TABLE IF EXISTS `UserOption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserOption` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `answer` datetime NOT NULL,
  `points` float(2,2) NOT NULL,
  `test_belongs_to` int(10) unsigned NOT NULL,
  `user_who_did_not` int(10) unsigned NOT NULL,
  `test_options` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `useroption_test_belongs_to_foreign` (`test_belongs_to`),
  KEY `useroption_user_who_did_not_foreign` (`user_who_did_not`),
  KEY `useroption_test_options_foreign` (`test_options`),
  CONSTRAINT `useroption_test_belongs_to_foreign` FOREIGN KEY (`test_belongs_to`) REFERENCES `Test` (`id`) ON DELETE CASCADE,
  CONSTRAINT `useroption_test_options_foreign` FOREIGN KEY (`test_options`) REFERENCES `TestOptions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `useroption_user_who_did_not_foreign` FOREIGN KEY (`user_who_did_not`) REFERENCES `User` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserOption`
--

LOCK TABLES `UserOption` WRITE;
/*!40000 ALTER TABLE `UserOption` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserOption` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User_User`
--

DROP TABLE IF EXISTS `User_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User_User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_user_user_id_foreign` (`user_id`),
  CONSTRAINT `user_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_User`
--

LOCK TABLES `User_User` WRITE;
/*!40000 ALTER TABLE `User_User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User_User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-16 10:31:47
