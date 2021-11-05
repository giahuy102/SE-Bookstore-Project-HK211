/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/ ordermanagement /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE ordermanagement;

DROP TABLE IF EXISTS orders;
CREATE TABLE `orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `customer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` double(8,2) NOT NULL DEFAULT 0.00,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `orderStatus` enum('completed','processing','cancelled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'processing',
  `delivery` enum('completed','in transport','returned','cancelled','picking up') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'picking up',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO orders(id,customer,total,create_at,created_at,updated_at,orderStatus,delivery) VALUES(9,'Le Van Hoang',100.00,'2021-11-05 00:03:42','2021-11-04 14:58:59','2021-11-04 17:03:42','cancelled','cancelled'),(10,'Tran Duc Duy',100.00,'2021-11-04 22:28:32','2021-11-04 15:15:08','2021-11-04 15:28:32','cancelled','in transport'),(11,'Tran Duc C',100.00,'2021-11-04 22:15:17','2021-11-04 15:15:17','2021-11-04 15:15:17','completed','in transport');