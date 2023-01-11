-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: dbsystem
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Client_user`
--

DROP TABLE IF EXISTS `Client_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Client_user` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Fullname` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `Age` varchar(255) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `passwort` varchar(30) DEFAULT NULL,
  `bankclient` varchar(45) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `services` varchar(45) DEFAULT NULL,
  `skills` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `hours` float DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=1249 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Client_user`
--

LOCK TABLES `Client_user` WRITE;
/*!40000 ALTER TABLE `Client_user` DISABLE KEYS */;
INSERT INTO `Client_user` VALUES (1241,'Napoleão Bonaparte','00000000001','200','fr.revolution@gmail.com','iwillconquer','10000','Rua Le quartier ','general de la grande armee','Conquer europe',NULL,-18999.8,'conquer.jpeg'),(1242,'lucas','11111111111','30','lucas.inocencio@poli.ufrj.br','seila','43553','rua ct da ufrj','Engenharia da Computação','Raciocionio logico',NULL,10,NULL),(1243,'novo user','12345678911','12','novouser@gmail.com','seila','34324','Rua preventorio','nenhuim','nenhum',NULL,NULL,'3.png'),(1245,'ninguem','0000000001','20','novo.user@gmail.com','seila','00001','rua dos bobos','engenharia','science','22999999999',2.1,'none.jpeg'),(1247,'marley','12345678910','21','meuemail@gmail.com','email','00001','Rua do Preventório','Pedreiro','Construção de Casas','22999999999',2.1,'scrat.jpg'),(1248,'scrat era do gelo','12345678910','200','scrat@gmail.com','seila','00001','Rua geleira','Mecânico de automovel','Experiencia','00000000000',1000,'scrat.jpg');
/*!40000 ALTER TABLE `Client_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-11 20:17:21
