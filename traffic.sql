-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: traffic
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CivilLines`
--

DROP TABLE IF EXISTS `CivilLines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CivilLines` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CivilLines`
--

LOCK TABLES `CivilLines` WRITE;
/*!40000 ALTER TABLE `CivilLines` DISABLE KEYS */;
INSERT INTO `CivilLines` VALUES (43,43,'2017-10-11','05:00:20'),(43,43,'2017-10-11','08:29:47'),(43,43,'2017-10-11','09:00:01'),(43,43,'2017-10-31','00:27:59');
/*!40000 ALTER TABLE `CivilLines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Gurugram`
--

DROP TABLE IF EXISTS `Gurugram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Gurugram` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Gurugram`
--

LOCK TABLES `Gurugram` WRITE;
/*!40000 ALTER TABLE `Gurugram` DISABLE KEYS */;
INSERT INTO `Gurugram` VALUES (29,29,'2017-10-11','05:00:28'),(17,29,'2017-10-11','08:29:55'),(11,29,'2017-10-11','09:00:15'),(29,29,'2017-10-30','23:26:09'),(29,29,'2017-10-30','23:57:43'),(29,29,'2017-10-31','00:29:08');
/*!40000 ALTER TABLE `Gurugram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HauzKhas`
--

DROP TABLE IF EXISTS `HauzKhas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HauzKhas` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HauzKhas`
--

LOCK TABLES `HauzKhas` WRITE;
/*!40000 ALTER TABLE `HauzKhas` DISABLE KEYS */;
INSERT INTO `HauzKhas` VALUES (36,36,'2017-10-11','05:00:08'),(36,36,'2017-10-11','08:29:45'),(18,36,'2017-10-11','08:59:59'),(36,36,'2017-10-30','23:24:37'),(36,36,'2017-10-30','23:56:26'),(36,36,'2017-10-31','00:27:47');
/*!40000 ALTER TABLE `HauzKhas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ModelTown`
--

DROP TABLE IF EXISTS `ModelTown`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ModelTown` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ModelTown`
--

LOCK TABLES `ModelTown` WRITE;
/*!40000 ALTER TABLE `ModelTown` DISABLE KEYS */;
INSERT INTO `ModelTown` VALUES (49,49,'2017-10-11','05:00:19'),(34,49,'2017-10-11','08:29:46'),(49,49,'2017-10-11','09:00:00'),(35,49,'2017-10-30','23:24:43'),(49,49,'2017-10-30','23:56:33'),(49,49,'2017-10-31','00:27:48');
/*!40000 ALTER TABLE `ModelTown` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MukarbaChowk`
--

DROP TABLE IF EXISTS `MukarbaChowk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MukarbaChowk` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MukarbaChowk`
--

LOCK TABLES `MukarbaChowk` WRITE;
/*!40000 ALTER TABLE `MukarbaChowk` DISABLE KEYS */;
INSERT INTO `MukarbaChowk` VALUES (61,61,'2017-10-11','05:00:26'),(61,61,'2017-10-11','08:29:53'),(61,61,'2017-10-11','09:00:07'),(61,61,'2017-10-30','23:25:47'),(61,61,'2017-10-30','23:57:39');
/*!40000 ALTER TABLE `MukarbaChowk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Najafgarh`
--

DROP TABLE IF EXISTS `Najafgarh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Najafgarh` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Najafgarh`
--

LOCK TABLES `Najafgarh` WRITE;
/*!40000 ALTER TABLE `Najafgarh` DISABLE KEYS */;
INSERT INTO `Najafgarh` VALUES (19,19,'2017-10-11','05:00:23'),(19,19,'2017-10-11','08:29:50'),(19,19,'2017-10-11','09:00:04'),(19,19,'2017-10-30','23:57:24');
/*!40000 ALTER TABLE `Najafgarh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Noida`
--

DROP TABLE IF EXISTS `Noida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Noida` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Noida`
--

LOCK TABLES `Noida` WRITE;
/*!40000 ALTER TABLE `Noida` DISABLE KEYS */;
INSERT INTO `Noida` VALUES (24,38,'2017-10-11','05:00:30'),(22,38,'2017-10-11','08:29:56'),(24,38,'2017-10-11','09:00:16'),(38,38,'2017-10-30','23:26:20'),(38,38,'2017-10-30','23:57:45'),(38,38,'2017-10-31','00:29:25');
/*!40000 ALTER TABLE `Noida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PunjabiBagh`
--

DROP TABLE IF EXISTS `PunjabiBagh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PunjabiBagh` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PunjabiBagh`
--

LOCK TABLES `PunjabiBagh` WRITE;
/*!40000 ALTER TABLE `PunjabiBagh` DISABLE KEYS */;
INSERT INTO `PunjabiBagh` VALUES (41,41,'2017-10-11','05:00:22'),(41,41,'2017-10-11','08:29:49'),(41,41,'2017-10-11','09:00:03'),(41,41,'2017-10-30','23:25:05'),(27,41,'2017-10-30','23:57:04'),(41,41,'2017-10-31','00:28:06');
/*!40000 ALTER TABLE `PunjabiBagh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SaraswatiVihar`
--

DROP TABLE IF EXISTS `SaraswatiVihar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SaraswatiVihar` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SaraswatiVihar`
--

LOCK TABLES `SaraswatiVihar` WRITE;
/*!40000 ALTER TABLE `SaraswatiVihar` DISABLE KEYS */;
INSERT INTO `SaraswatiVihar` VALUES (56,56,'2017-10-11','05:00:24'),(56,56,'2017-10-11','08:29:51'),(56,56,'2017-10-11','09:00:05'),(56,56,'2017-10-30','23:25:41'),(56,56,'2017-10-30','23:57:32'),(56,56,'2017-10-31','00:28:27');
/*!40000 ALTER TABLE `SaraswatiVihar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Seelampur`
--

DROP TABLE IF EXISTS `Seelampur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Seelampur` (
  `currSpeed` int(11) NOT NULL,
  `normSpeed` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Seelampur`
--

LOCK TABLES `Seelampur` WRITE;
/*!40000 ALTER TABLE `Seelampur` DISABLE KEYS */;
INSERT INTO `Seelampur` VALUES (12,12,'2017-10-11','05:00:27'),(12,12,'2017-10-11','08:29:54'),(12,12,'2017-10-11','09:00:13'),(12,12,'2017-10-30','23:57:41');
/*!40000 ALTER TABLE `Seelampur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'admin','admin'),(6,'avtansh','avtansh'),(7,'kirti','kirti'),(8,'khush','khush'),(9,'test','test');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-31  0:56:51
