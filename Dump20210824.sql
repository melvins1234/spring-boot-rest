-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: rakutech_spring-boot
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (6,'Coffee','Coffee'),(7,'Rice','Rice'),(8,'Water','War'),(14,'Shampoo','Shampoooo'),(15,'Toothpaste','Toothpaste Toothpaste Toothpaste Toothpaste'),(17,'Accessories','Accessories'),(18,'Phone','Phone');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_favorites_customer_id_idx` (`customer_id`),
  KEY `fk_favorites_product_id_idx` (`product_id`),
  CONSTRAINT `fk_favorites_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_favorites_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `order_status` varchar(50) DEFAULT NULL,
  `shipping_address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_idx` (`customer_id`),
  CONSTRAINT `fk_order_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordered-products`
--

DROP TABLE IF EXISTS `ordered-products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordered-products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_id_idx` (`order_id`),
  KEY `fk_ordered-products_id_idx` (`product_id`),
  CONSTRAINT `fk_ordered-products_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_ordered-products_order_id` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordered-products`
--

LOCK TABLES `ordered-products` WRITE;
/*!40000 ALTER TABLE `ordered-products` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordered-products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price_regular` decimal(15,2) NOT NULL,
  `price_discounted` decimal(15,2) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `quantity` int NOT NULL,
  `date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (119,'Beats Pink',12324.00,0.00,12,'',232,'2021-08-21 10:48:27'),(133,'Beats Black',231.00,0.00,121,'',121,'2021-08-24 18:31:49'),(135,'Beats White',56529.00,0.00,12,'',1232,'2021-08-24 22:26:08'),(136,'Beats Red',5153.00,0.00,12,'',3232,'2021-08-24 22:26:26'),(137,'H Tv Try',2125.00,0.00,123,'',23,'2021-08-24 22:26:49'),(138,'iPhone 11',99999.00,0.00,123,'This is sample',412,'2021-08-24 22:27:46');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_id_idx` (`category_id`),
  KEY `fk_product_id_idx` (`product_id`),
  CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `product_categories` VALUES (72,133,17),(73,119,17),(76,137,17),(77,138,18),(78,135,17),(79,136,17);
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=284 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (6,NULL,'http://localhost:5000/api/images/img20210731_18363192.png'),(12,NULL,'http://localhost:5000/api/images/img20210731_18363192.png'),(13,NULL,'http://localhost:5000/api/images/img20210731_18363192.png'),(31,NULL,'http://localhost:5000/api/images/Screenshot (31).png'),(33,NULL,'http://localhost:5000/api/images/Screenshot (34).png'),(34,NULL,'http://localhost:5000/api/images/Screenshot (34).png'),(37,NULL,'http://localhost:5000/api/images/Screenshot (35).png'),(38,NULL,'http://localhost:5000/api/images/Screenshot (35).png'),(41,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(42,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(45,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(46,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(49,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(50,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(53,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(54,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(57,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(58,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(61,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(62,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(65,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(66,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(69,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(70,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(73,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(74,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(77,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(78,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(79,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(80,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(83,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(84,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(89,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(90,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(93,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(94,NULL,'http://localhost:5000/api/images/Screenshot (33).png'),(97,NULL,'http://localhost:5000/api/images/Screenshot (34).png'),(98,NULL,'http://localhost:5000/api/images/Screenshot (34).png'),(101,NULL,'http://localhost:5000/api/images/Screenshot (31).png'),(102,NULL,'http://localhost:5000/api/images/Screenshot (31).png'),(103,NULL,'http://localhost:5000/api/images/Screenshot (31).png'),(107,NULL,'http://localhost:5000/api/images/Screenshot (32).png'),(108,NULL,'http://localhost:5000/api/images/Screenshot (32).png'),(111,NULL,'http://localhost:5000/api/images/Screenshot (35).png'),(113,NULL,'http://localhost:5000/api/images/iphone11-red-select-2019.png'),(115,NULL,'http://localhost:5000/api/images/beats__171717.png'),(116,NULL,'http://localhost:5000/api/images/beats__171717.png'),(117,NULL,'http://localhost:5000/api/images/beats__171717.png'),(121,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(122,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(123,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(127,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(128,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(129,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_2.png'),(130,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(131,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(132,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_2.png'),(142,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(143,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(144,NULL,'http://localhost:5000/api/images/beats__171717.png'),(148,NULL,NULL),(149,NULL,NULL),(150,NULL,NULL),(154,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(155,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(156,NULL,'http://localhost:5000/api/images/beats__171717.png'),(160,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(161,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(162,NULL,'http://localhost:5000/api/images/beats__171717.png'),(166,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(167,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(168,NULL,'http://localhost:5000/api/images/beats__171717.png'),(172,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(173,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(174,NULL,'http://localhost:5000/api/images/beats__171717.png'),(178,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(179,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(180,NULL,'http://localhost:5000/api/images/beats__171717.png'),(184,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_1.png'),(185,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_2.png'),(186,NULL,'http://localhost:5000/api/images/beats__d73181.png'),(187,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_1.png'),(188,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_2.png'),(189,NULL,'http://localhost:5000/api/images/beats__d73181.png'),(190,NULL,'http://localhost:5000/api/images/beats__171717_thumb_4.png'),(191,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(192,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(193,NULL,'http://localhost:5000/api/images/beats__171717_thumb_4.png'),(194,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(195,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(196,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_2.png'),(197,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_1.png'),(198,NULL,'http://localhost:5000/api/images/beats__d73181.png'),(199,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_2.png'),(200,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_1.png'),(201,NULL,'http://localhost:5000/api/images/beats__d73181.png'),(202,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_1.png'),(203,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_2.png'),(206,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(207,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(208,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_2.png'),(209,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(210,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(211,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_2.png'),(212,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(213,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(214,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(215,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(216,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(217,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(218,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_2.png'),(219,NULL,'http://localhost:5000/api/images/beats__d73181_thumb_1.png'),(220,NULL,'http://localhost:5000/api/images/beats__d73181.png'),(221,NULL,'http://localhost:5000/api/images/beats__171717_thumb_4.png'),(222,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(223,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(227,NULL,'http://localhost:5000/api/images/beats__171717_thumb_4.png'),(228,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(229,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(233,NULL,'http://localhost:5000/api/images/beats__c69692.png'),(234,NULL,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(235,NULL,'http://localhost:5000/api/images/beats__171717.png'),(236,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(237,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(238,NULL,'http://localhost:5000/api/images/beats__171717.png'),(239,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(240,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(241,NULL,'http://localhost:5000/api/images/beats__171717.png'),(242,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(243,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(244,NULL,'http://localhost:5000/api/images/beats__eb4837.png'),(245,NULL,'http://localhost:5000/api/images/beats__eb4837_thumb_1.png'),(246,NULL,'http://localhost:5000/api/images/beats__eb4837_thumb_2.png'),(250,NULL,'http://localhost:5000/api/images/beats__171717.png'),(251,NULL,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(252,NULL,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(253,133,'http://localhost:5000/api/images/beats__171717.png'),(254,133,'http://localhost:5000/api/images/beats__171717_thumb_2.png'),(255,133,'http://localhost:5000/api/images/beats__171717_thumb_1.png'),(256,119,'http://localhost:5000/api/images/beats__c69692.png'),(257,119,'http://localhost:5000/api/images/beats__c69692_thumb_1.png'),(258,NULL,'http://localhost:5000/api/images/beats__dbdbdb.png'),(259,NULL,'http://localhost:5000/api/images/beats__dbdbdb_thumb_2.png'),(260,NULL,'http://localhost:5000/api/images/beats__dbdbdb_thumb_1.png'),(261,NULL,'http://localhost:5000/api/images/beats__dbdbdb.png'),(262,NULL,'http://localhost:5000/api/images/beats__dbdbdb_thumb_2.png'),(263,NULL,'http://localhost:5000/api/images/beats__dbdbdb_thumb_1.png'),(264,NULL,'http://localhost:5000/api/images/beats__eb4837_thumb_1.png'),(265,NULL,'http://localhost:5000/api/images/beats__eb4837_thumb_2.png'),(266,NULL,'http://localhost:5000/api/images/beats__eb4837.png'),(267,NULL,'http://localhost:5000/api/images/beats__eb4837_thumb_1.png'),(268,NULL,'http://localhost:5000/api/images/beats__eb4837_thumb_2.png'),(269,NULL,'http://localhost:5000/api/images/beats__eb4837.png'),(270,NULL,'http://localhost:5000/api/images/H_tvTry_thumb_1.png'),(271,NULL,'http://localhost:5000/api/images/H_tvTry_thumb_2.png'),(272,NULL,'http://localhost:5000/api/images/H_tvTry.png'),(273,137,'http://localhost:5000/api/images/H_tvTry_thumb_1.png'),(274,137,'http://localhost:5000/api/images/H_tvTry_thumb_2.png'),(275,137,'http://localhost:5000/api/images/H_tvTry.png'),(276,NULL,'http://localhost:5000/api/images/iphone11-white-select-2019.png'),(277,138,'http://localhost:5000/api/images/iphone11-white-select-2019.png'),(278,135,'http://localhost:5000/api/images/beats__dbdbdb.png'),(279,135,'http://localhost:5000/api/images/beats__dbdbdb_thumb_2.png'),(280,135,'http://localhost:5000/api/images/beats__dbdbdb_thumb_1.png'),(281,136,'http://localhost:5000/api/images/beats__eb4837_thumb_1.png'),(282,136,'http://localhost:5000/api/images/beats__eb4837_thumb_2.png'),(283,136,'http://localhost:5000/api/images/beats__eb4837.png');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brithdate` date DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `billing_address` varchar(200) DEFAULT NULL,
  `default_shipping_address` varchar(200) DEFAULT NULL,
  `secondary_shipping_address` varchar(200) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` enum('ADMIN','CUSTOMER','SELLER') DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,'sample sample',NULL,'sample','sample@sample.com','sample address',NULL,NULL,'091231','ADMIN',NULL,NULL),(11,NULL,'Melvin Baybayanon',NULL,'melvinbaybayanon','melvinbaybayanon@yahoo.com',NULL,NULL,NULL,NULL,'CUSTOMER',NULL,NULL),(14,NULL,'This Is A Sample Name',NULL,'thisissample','thisissample@sample.com',NULL,NULL,NULL,NULL,'CUSTOMER',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'rakutech_spring-boot'
--

--
-- Dumping routines for database 'rakutech_spring-boot'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-24 22:30:08
