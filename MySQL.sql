-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: empresa_telecomunicaciones
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `equipos_mant`
--

DROP TABLE IF EXISTS `equipos_mant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipos_mant` (
  `idEquipo` int NOT NULL AUTO_INCREMENT,
  `id` varchar(45) DEFAULT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `cantUso` int DEFAULT NULL,
  `cantBod` int DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEquipo`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipos_mant`
--

LOCK TABLES `equipos_mant` WRITE;
/*!40000 ALTER TABLE `equipos_mant` DISABLE KEYS */;
INSERT INTO `equipos_mant` VALUES (1,'OTDR','Reflectómetro óptico en el dominio del tiempo',0,1,'p'),(2,'OCC','Medidor de potencia óptica',0,1,'p'),(3,'VFL','Detector Visual de Fallas',0,1,'p'),(4,'ODM','Medidor de dispersión óptica',0,1,'p'),(5,'ORL','Medidor de pérdidas de retorno',0,1,'p'),(6,'OLS','Generador de potencia óptica',0,1,'p'),(7,'OLA','Atenuador de fibra óptica',0,1,'p'),(8,'OLP','Medidor de potencia óptica',0,1,'p'),(9,'OLT','Medidor de pérdidas ópticas',0,1,'p'),(10,'OSA','Analizador de espectro óptico',0,1,'p'),(11,'MCD','Medidor de Dispersión Cromática',0,1,'p'),(12,'PMD','Medidor de Dispersión por Modo de Polarización',0,1,'p'),(13,'EPF','Empalmadora por fusión',0,1,'c'),(14,'EPM','Empalmes mecánicos',0,1,'c'),(15,'COP','Conectores Ópticos',0,1,'c'),(16,'FOR','Fibra óptica de reserva',0,1,'c'),(17,'CPD','Cortadora para Fibra Óptica',0,1,'c'),(18,'PPF','Pinzas peladoras de fibra óptica',0,1,'c'),(19,'LPL','Limpiador Liquido',0,1,'c');
/*!40000 ALTER TABLE `equipos_mant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mantenimientos`
--

DROP TABLE IF EXISTS `mantenimientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mantenimientos` (
  `idmantenimiento` int NOT NULL AUTO_INCREMENT,
  `fechaEjecucion` varchar(50) DEFAULT NULL,
  `horaInicio` int DEFAULT NULL,
  `horaFinal` int DEFAULT NULL,
  `tiempoEjec` int DEFAULT NULL,
  `id` int DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `ubicacion` varchar(150) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `idEquipo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idmantenimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mantenimientos`
--

LOCK TABLES `mantenimientos` WRITE;
/*!40000 ALTER TABLE `mantenimientos` DISABLE KEYS */;
/*!40000 ALTER TABLE `mantenimientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contraseña` varchar(20) DEFAULT NULL,
  `cedula` varchar(45) DEFAULT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `celular` varchar(45) DEFAULT NULL,
  `tipo` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Juan Diego','Espinosa','jdev2002@hotmail.com','20022509jd','1000181000',NULL,'AutoNorte','5196997','3154816907',3),(5,'pepito','perez','pepe@correo.com','1234','1234',NULL,NULL,NULL,NULL,1),(6,'pepita','perez','pepita@correo.com','4321','4321','gerente','direccion1','12345','123456',2),(9,'Luz Marina','Velez','luz@correo.com','undefined','41915887','gerente','direccion3','3241234','3118522027',2);
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

-- Dump completed on 2021-10-09 17:41:58
