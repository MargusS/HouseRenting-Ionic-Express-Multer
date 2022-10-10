CREATE DATABASE  IF NOT EXISTS `house_renting_express` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `house_renting_express`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: house_renting_express
-- ------------------------------------------------------
-- Server version	5.7.34-log

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
-- Table structure for table `houses`
--

DROP TABLE IF EXISTS `houses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `location` varchar(255) NOT NULL,
  `rooms` int(11) NOT NULL,
  `wc` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houses`
--

LOCK TABLES `houses` WRITE;
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
INSERT INTO `houses` VALUES (1,'Madrid House','Best house to rent in Madrid.',700,'Madrdi',2,1,'2022-10-10 00:50:47','2022-10-10 00:50:47'),(2,'Barcelona House','Best house to rent in Barcelona',800,'Barcelona',3,2,'2022-10-10 00:51:50','2022-10-10 00:51:50');
/*!40000 ALTER TABLE `houses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgfile` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `houseId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `houseId` (`houseId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`houseId`) REFERENCES `houses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (2,'image-16653630477610.1830735749111423.jpg','2022-10-10 00:50:47','2022-10-10 00:50:47',1),(3,'image-16653630477610.1272608281430312.jpg','2022-10-10 00:50:47','2022-10-10 00:50:47',1),(4,'image-16653630477610.23922909497598632.jpg','2022-10-10 00:50:47','2022-10-10 00:50:47',1),(6,'image-16653631107160.631120386826046.jpg','2022-10-10 00:51:50','2022-10-10 00:51:50',2),(7,'image-16653631107180.6829674602892173.jpg','2022-10-10 00:51:50','2022-10-10 00:51:50',2),(8,'image-16653631107200.8697116528193374.jpg','2022-10-10 00:51:50','2022-10-10 00:51:50',2),(9,'image-16653631107170.25906084682624275.jpg','2022-10-10 00:51:50','2022-10-10 00:51:50',2),(10,'image-16653631107190.31476530249932644.jpg','2022-10-10 00:51:50','2022-10-10 00:51:50',2),(11,'image-16653631431640.9633310403105702.jpg','2022-10-10 00:52:23','2022-10-10 00:52:23',2),(12,'image-16653631631400.6694723979365986.jpg','2022-10-10 00:52:43','2022-10-10 00:52:43',1);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-10  1:55:22
