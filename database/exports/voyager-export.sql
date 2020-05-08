# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.19)
# Database: estore
# Generation Time: 2020-05-06 19:25:59 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int unsigned DEFAULT NULL,
  `order` int NOT NULL DEFAULT '1',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_slug_unique` (`slug`),
  KEY `categories_parent_id_foreign` (`parent_id`),
  CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

INSERT INTO `categories` (`id`, `parent_id`, `order`, `name`, `slug`, `created_at`, `updated_at`)
VALUES
	(1,NULL,1,'Category 1','category-1','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(2,NULL,1,'Category 2','category-2','2020-05-06 15:43:21','2020-05-06 15:43:21');

/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table data_rows
# ------------------------------------------------------------

DROP TABLE IF EXISTS `data_rows`;

CREATE TABLE `data_rows` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `data_type_id` int unsigned NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `required` tinyint(1) NOT NULL DEFAULT '0',
  `browse` tinyint(1) NOT NULL DEFAULT '1',
  `read` tinyint(1) NOT NULL DEFAULT '1',
  `edit` tinyint(1) NOT NULL DEFAULT '1',
  `add` tinyint(1) NOT NULL DEFAULT '1',
  `delete` tinyint(1) NOT NULL DEFAULT '1',
  `details` text COLLATE utf8mb4_unicode_ci,
  `order` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `data_rows_data_type_id_foreign` (`data_type_id`),
  CONSTRAINT `data_rows_data_type_id_foreign` FOREIGN KEY (`data_type_id`) REFERENCES `data_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `data_rows` WRITE;
/*!40000 ALTER TABLE `data_rows` DISABLE KEYS */;

INSERT INTO `data_rows` (`id`, `data_type_id`, `field`, `type`, `display_name`, `required`, `browse`, `read`, `edit`, `add`, `delete`, `details`, `order`)
VALUES
	(1,1,'id','number','ID',1,0,0,0,0,0,NULL,1),
	(2,1,'name','text','Name',1,1,1,1,1,1,NULL,2),
	(3,1,'email','text','Email',1,1,1,1,1,1,NULL,3),
	(4,1,'password','password','Password',1,0,0,1,1,0,NULL,4),
	(5,1,'remember_token','text','Remember Token',0,0,0,0,0,0,NULL,5),
	(6,1,'created_at','timestamp','Created At',0,1,1,0,0,0,NULL,6),
	(7,1,'updated_at','timestamp','Updated At',0,0,0,0,0,0,NULL,7),
	(8,1,'avatar','image','Avatar',0,1,1,1,1,1,NULL,8),
	(9,1,'user_belongsto_role_relationship','relationship','Role',0,1,1,1,1,0,'{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsTo\",\"column\":\"role_id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"roles\",\"pivot\":0}',10),
	(10,1,'user_belongstomany_role_relationship','relationship','Roles',0,1,1,1,1,0,'{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsToMany\",\"column\":\"id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"user_roles\",\"pivot\":\"1\",\"taggable\":\"0\"}',11),
	(11,1,'settings','hidden','Settings',0,0,0,0,0,0,NULL,12),
	(12,2,'id','number','ID',1,0,0,0,0,0,NULL,1),
	(13,2,'name','text','Name',1,1,1,1,1,1,NULL,2),
	(14,2,'created_at','timestamp','Created At',0,0,0,0,0,0,NULL,3),
	(15,2,'updated_at','timestamp','Updated At',0,0,0,0,0,0,NULL,4),
	(16,3,'id','number','ID',1,0,0,0,0,0,NULL,1),
	(17,3,'name','text','Name',1,1,1,1,1,1,NULL,2),
	(18,3,'created_at','timestamp','Created At',0,0,0,0,0,0,NULL,3),
	(19,3,'updated_at','timestamp','Updated At',0,0,0,0,0,0,NULL,4),
	(20,3,'display_name','text','Display Name',1,1,1,1,1,1,NULL,5),
	(21,1,'role_id','text','Role',1,1,1,1,1,1,NULL,9),
	(22,4,'id','number','ID',1,0,0,0,0,0,NULL,1),
	(23,4,'parent_id','select_dropdown','Parent',0,0,1,1,1,1,'{\"default\":\"\",\"null\":\"\",\"options\":{\"\":\"-- None --\"},\"relationship\":{\"key\":\"id\",\"label\":\"name\"}}',2),
	(24,4,'order','text','Order',1,1,1,1,1,1,'{\"default\":1}',3),
	(25,4,'name','text','Name',1,1,1,1,1,1,NULL,4),
	(26,4,'slug','text','Slug',1,1,1,1,1,1,'{\"slugify\":{\"origin\":\"name\"}}',5),
	(27,4,'created_at','timestamp','Created At',0,0,1,0,0,0,NULL,6),
	(28,4,'updated_at','timestamp','Updated At',0,0,0,0,0,0,NULL,7),
	(29,5,'id','number','ID',1,0,0,0,0,0,NULL,1),
	(30,5,'author_id','text','Author',1,0,1,1,0,1,NULL,2),
	(31,5,'category_id','text','Category',1,0,1,1,1,0,NULL,3),
	(32,5,'title','text','Title',1,1,1,1,1,1,NULL,4),
	(33,5,'excerpt','text_area','Excerpt',1,0,1,1,1,1,NULL,5),
	(34,5,'body','rich_text_box','Body',1,0,1,1,1,1,NULL,6),
	(35,5,'image','image','Post Image',0,1,1,1,1,1,'{\"resize\":{\"width\":\"1000\",\"height\":\"null\"},\"quality\":\"70%\",\"upsize\":true,\"thumbnails\":[{\"name\":\"medium\",\"scale\":\"50%\"},{\"name\":\"small\",\"scale\":\"25%\"},{\"name\":\"cropped\",\"crop\":{\"width\":\"300\",\"height\":\"250\"}}]}',7),
	(36,5,'slug','text','Slug',1,0,1,1,1,1,'{\"slugify\":{\"origin\":\"title\",\"forceUpdate\":true},\"validation\":{\"rule\":\"unique:posts,slug\"}}',8),
	(37,5,'meta_description','text_area','Meta Description',1,0,1,1,1,1,NULL,9),
	(38,5,'meta_keywords','text_area','Meta Keywords',1,0,1,1,1,1,NULL,10),
	(39,5,'status','select_dropdown','Status',1,1,1,1,1,1,'{\"default\":\"DRAFT\",\"options\":{\"PUBLISHED\":\"published\",\"DRAFT\":\"draft\",\"PENDING\":\"pending\"}}',11),
	(40,5,'created_at','timestamp','Created At',0,1,1,0,0,0,NULL,12),
	(41,5,'updated_at','timestamp','Updated At',0,0,0,0,0,0,NULL,13),
	(42,5,'seo_title','text','SEO Title',0,1,1,1,1,1,NULL,14),
	(43,5,'featured','checkbox','Featured',1,1,1,1,1,1,NULL,15),
	(44,6,'id','number','ID',1,0,0,0,0,0,NULL,1),
	(45,6,'author_id','text','Author',1,0,0,0,0,0,NULL,2),
	(46,6,'title','text','Title',1,1,1,1,1,1,NULL,3),
	(47,6,'excerpt','text_area','Excerpt',1,0,1,1,1,1,NULL,4),
	(48,6,'body','rich_text_box','Body',1,0,1,1,1,1,NULL,5),
	(49,6,'slug','text','Slug',1,0,1,1,1,1,'{\"slugify\":{\"origin\":\"title\"},\"validation\":{\"rule\":\"unique:pages,slug\"}}',6),
	(50,6,'meta_description','text','Meta Description',1,0,1,1,1,1,NULL,7),
	(51,6,'meta_keywords','text','Meta Keywords',1,0,1,1,1,1,NULL,8),
	(52,6,'status','select_dropdown','Status',1,1,1,1,1,1,'{\"default\":\"INACTIVE\",\"options\":{\"INACTIVE\":\"INACTIVE\",\"ACTIVE\":\"ACTIVE\"}}',9),
	(53,6,'created_at','timestamp','Created At',1,1,1,0,0,0,NULL,10),
	(54,6,'updated_at','timestamp','Updated At',1,0,0,0,0,0,NULL,11),
	(55,6,'image','image','Page Image',0,1,1,1,1,1,NULL,12),
	(56,7,'id','hidden','Id',1,1,1,1,1,0,'{}',1),
	(57,7,'name','text','Name',1,1,1,1,1,1,'{\"validation\":{\"rule\":\"required|min:5\"}}',2),
	(58,7,'slug','text','Slug',1,1,1,1,1,1,'{}',3),
	(59,7,'details','text','Details',0,1,1,1,1,1,'{}',4),
	(60, 7, 'price', 'number', 'Price', 1, 1, 1, 1, 1, 1, '{\"validation\":{\"rule\":\"required|regex:\\/^\\\\d*(\\\\.\\\\d{1,2})?$\\/\"}}', 5),
	(61,7,'description','rich_text_box','Description',1,1,1,1,1,1,'{}',6),
	(62,7,'featured','checkbox','Featured',1,1,1,1,1,1,'{\"on\":\"Yes\",\"off\":\"No\"}',7),
	(63,7,'created_at','timestamp','Created At',0,0,0,0,0,0,'{}',8),
	(64,7,'updated_at','timestamp','Updated At',0,0,0,0,0,0,'{}',9),
	(65,8,'id','hidden','Id',1,1,1,1,1,0,'{}',1),
	(66,8,'name','text','Name',1,1,1,1,1,1,'{}',2),
	(67,8,'slug','text','Slug',1,1,1,1,1,1,'{}',3),
	(68,8,'created_at','timestamp','Created At',0,0,0,0,0,0,'{}',4),
	(69,8,'updated_at','timestamp','Updated At',0,0,0,0,0,0,'{}',5),
	(70,9,'id','text','Id',1,0,0,0,0,0,'{}',1),
	(71,9,'code','text','Code',1,1,1,1,1,1,'{}',2),
	(72,9,'type','select_dropdown','Type',1,1,1,1,1,1,'{\"default\":\"fixed\",\"options\":{\"fixed\":\"Fixed Value\",\"percent\":\"Percent Off\"}}',3),
	(73,9,'discount_value','text','Discount Value',0,1,1,1,1,1,'{\"null\":\"\"}',4),
	(74,9,'discount_percentage','number','Discount Percentage',0,1,1,1,1,1,'{\"null\":\"\"}',5),
	(75,9,'created_at','timestamp','Created At',0,1,1,1,0,1,'{}',6),
	(76,9,'updated_at','timestamp','Updated At',0,0,0,0,0,0,'{}',7),
	(77, 7, 'image', 'image', 'Image', 0, 1, 1, 1, 1, 1, '{}', 8),
	(78, 7, 'images', 'multiple_images', 'Images', 0, 1, 1, 1, 1, 1, '{}', 9);

/*!40000 ALTER TABLE `data_rows` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table data_types
# ------------------------------------------------------------

DROP TABLE IF EXISTS `data_types`;

CREATE TABLE `data_types` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_singular` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_plural` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `model_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `policy_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `controller` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `generate_permissions` tinyint(1) NOT NULL DEFAULT '0',
  `server_side` tinyint NOT NULL DEFAULT '0',
  `details` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `data_types_name_unique` (`name`),
  UNIQUE KEY `data_types_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `data_types` WRITE;
/*!40000 ALTER TABLE `data_types` DISABLE KEYS */;

INSERT INTO `data_types` (`id`, `name`, `slug`, `display_name_singular`, `display_name_plural`, `icon`, `model_name`, `policy_name`, `controller`, `description`, `generate_permissions`, `server_side`, `details`, `created_at`, `updated_at`)
VALUES
	(1,'users','users','User','Users','voyager-person','TCG\\Voyager\\Models\\User','TCG\\Voyager\\Policies\\UserPolicy','TCG\\Voyager\\Http\\Controllers\\VoyagerUserController','',1,0,NULL,'2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(2,'menus','menus','Menu','Menus','voyager-list','TCG\\Voyager\\Models\\Menu',NULL,'','',1,0,NULL,'2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(3,'roles','roles','Role','Roles','voyager-lock','TCG\\Voyager\\Models\\Role',NULL,'TCG\\Voyager\\Http\\Controllers\\VoyagerRoleController','',1,0,NULL,'2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(4,'categories','categories','Category','Categories','voyager-categories','TCG\\Voyager\\Models\\Category',NULL,'','',1,0,NULL,'2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(5,'posts','posts','Post','Posts','voyager-news','TCG\\Voyager\\Models\\Post','TCG\\Voyager\\Policies\\PostPolicy','','',1,0,NULL,'2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(6,'pages','pages','Page','Pages','voyager-file-text','TCG\\Voyager\\Models\\Page',NULL,'','',1,0,NULL,'2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(7,'products','products','Product','Products','voyager-bag','App\\Product',NULL,'\\App\\Http\\Controllers\\Voyager\\ProductsController',NULL,1,1,'{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null,\"scope\":null}','2020-05-06 18:00:28','2020-05-06 18:25:38'),
	(8,'product_categories','product-categories','Product Category','Product Categories','voyager-categories','App\\ProductCategory',NULL,NULL,NULL,1,0,'{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}','2020-05-06 18:27:51','2020-05-06 18:27:51'),
	(9,'coupons','coupons','Coupon','Coupons','voyager-dollar','App\\Coupon',NULL,NULL,NULL,1,0,'{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}','2020-05-06 18:56:28','2020-05-06 18:56:28');

/*!40000 ALTER TABLE `data_types` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table menu_items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `menu_items`;

CREATE TABLE `menu_items` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `menu_id` int unsigned DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '_self',
  `icon_class` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `order` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `route` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameters` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `menu_items_menu_id_foreign` (`menu_id`),
  CONSTRAINT `menu_items_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `menu_items` WRITE;
/*!40000 ALTER TABLE `menu_items` DISABLE KEYS */;

INSERT INTO `menu_items` (`id`, `menu_id`, `title`, `url`, `target`, `icon_class`, `color`, `parent_id`, `order`, `created_at`, `updated_at`, `route`, `parameters`)
VALUES
	(1,1,'Dashboard','','_self','voyager-boat',NULL,NULL,1,'2020-05-06 15:41:11','2020-05-06 15:41:11','voyager.dashboard',NULL),
	(2,1,'Media','','_self','voyager-images',NULL,NULL,7,'2020-05-06 15:41:11','2020-05-06 18:56:58','voyager.media.index',NULL),
	(3,1,'Users','','_self','voyager-person',NULL,NULL,6,'2020-05-06 15:41:11','2020-05-06 18:56:58','voyager.users.index',NULL),
	(4,1,'Roles','','_self','voyager-lock',NULL,NULL,5,'2020-05-06 15:41:11','2020-05-06 18:57:02','voyager.roles.index',NULL),
	(5,1,'Tools','','_self','voyager-tools',NULL,NULL,11,'2020-05-06 15:41:11','2020-05-06 18:56:58',NULL,NULL),
	(6,1,'Menu Builder','','_self','voyager-list',NULL,5,1,'2020-05-06 15:41:11','2020-05-06 18:07:13','voyager.menus.index',NULL),
	(7,1,'Database','','_self','voyager-data',NULL,5,2,'2020-05-06 15:41:11','2020-05-06 18:07:13','voyager.database.index',NULL),
	(8,1,'Compass','','_self','voyager-compass',NULL,5,3,'2020-05-06 15:41:11','2020-05-06 18:07:13','voyager.compass.index',NULL),
	(9,1,'BREAD','','_self','voyager-bread',NULL,5,4,'2020-05-06 15:41:11','2020-05-06 18:07:13','voyager.bread.index',NULL),
	(10,1,'Settings','','_self','voyager-settings',NULL,NULL,12,'2020-05-06 15:41:11','2020-05-06 18:56:58','voyager.settings.index',NULL),
	(11,1,'Categories','','_self','voyager-categories',NULL,NULL,10,'2020-05-06 15:43:21','2020-05-06 18:56:58','voyager.categories.index',NULL),
	(12,1,'Posts','','_self','voyager-news',NULL,NULL,8,'2020-05-06 15:43:21','2020-05-06 18:56:58','voyager.posts.index',NULL),
	(13,1,'Pages','','_self','voyager-file-text',NULL,NULL,9,'2020-05-06 15:43:21','2020-05-06 18:56:58','voyager.pages.index',NULL),
	(14,1,'Hooks','','_self','voyager-hook',NULL,5,5,'2020-05-06 15:43:21','2020-05-06 18:07:13','voyager.hooks',NULL),
	(15,1,'Products','','_self','voyager-bag',NULL,NULL,2,'2020-05-06 18:00:28','2020-05-06 18:07:18','voyager.products.index',NULL),
	(16,1,'Product Categories','','_self','voyager-categories',NULL,NULL,3,'2020-05-06 18:27:51','2020-05-06 18:48:01','voyager.product-categories.index',NULL),
	(17,1,'Coupons','','_self','voyager-dollar',NULL,NULL,4,'2020-05-06 18:56:28','2020-05-06 18:57:02','voyager.coupons.index',NULL),
	(19,2,'Shop','','_self',NULL,'#000000',NULL,13,'2020-05-06 19:36:41','2020-05-06 19:36:41','shop.index',NULL),
	(20,2,'About','#','_self',NULL,'#000000',NULL,14,'2020-05-06 19:37:29','2020-05-06 19:37:29',NULL,''),
	(21,2,'Blog','#','_self',NULL,'#000000',NULL,15,'2020-05-06 19:37:41','2020-05-06 19:37:41',NULL,''),
	(22,3,'fa-github','https://github.com/aaronsalud','_self',NULL,'#000000',NULL,17,'2020-05-06 19:57:39','2020-05-06 19:57:39',NULL,'');

/*!40000 ALTER TABLE `menu_items` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table menus
# ------------------------------------------------------------

DROP TABLE IF EXISTS `menus`;

CREATE TABLE `menus` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `menus_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;

INSERT INTO `menus` (`id`, `name`, `created_at`, `updated_at`)
VALUES
	(1,'admin','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(2,'main','2020-05-06 19:35:33','2020-05-06 19:35:33'),
	(3,'footer','2020-05-06 19:55:42','2020-05-06 19:55:42');

/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pages`;

CREATE TABLE `pages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `body` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci,
  `status` enum('ACTIVE','INACTIVE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'INACTIVE',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pages_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;

INSERT INTO `pages` (`id`, `author_id`, `title`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `created_at`, `updated_at`)
VALUES
	(1,0,'Hello World','Hang the jib grog grog blossom grapple dance the hempen jig gangway pressgang bilge rat to go on account lugger. Nelsons folly gabion line draught scallywag fire ship gaff fluke fathom case shot. Sea Legs bilge rat sloop matey gabion long clothes run a shot across the bow Gold Road cog league.','<p>Hello World. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>','pages/page1.jpg','hello-world','Yar Meta Description','Keyword1, Keyword2','ACTIVE','2020-05-06 15:43:21','2020-05-06 15:43:21');

/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table permission_role
# ------------------------------------------------------------

DROP TABLE IF EXISTS `permission_role`;

CREATE TABLE `permission_role` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `permission_role_permission_id_index` (`permission_id`),
  KEY `permission_role_role_id_index` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;

INSERT INTO `permission_role` (`permission_id`, `role_id`)
VALUES
	(1,1),
	(2,1),
	(3,1),
	(4,1),
	(5,1),
	(6,1),
	(7,1),
	(8,1),
	(9,1),
	(10,1),
	(11,1),
	(12,1),
	(13,1),
	(14,1),
	(15,1),
	(16,1),
	(17,1),
	(18,1),
	(19,1),
	(20,1),
	(21,1),
	(22,1),
	(23,1),
	(24,1),
	(25,1),
	(26,1),
	(27,1),
	(28,1),
	(29,1),
	(30,1),
	(31,1),
	(32,1),
	(33,1),
	(34,1),
	(35,1),
	(36,1),
	(37,1),
	(38,1),
	(39,1),
	(40,1),
	(42,1),
	(43,1),
	(44,1),
	(45,1),
	(46,1),
	(47,1),
	(48,1),
	(49,1),
	(50,1),
	(51,1),
	(52,1),
	(53,1),
	(54,1),
	(55,1),
	(56,1),
	(57,1),
	(58,1),
	(59,1),
	(60,1),
	(61,1);

/*!40000 ALTER TABLE `permission_role` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permissions_key_index` (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;

INSERT INTO `permissions` (`id`, `key`, `table_name`, `created_at`, `updated_at`)
VALUES
	(1,'browse_admin',NULL,'2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(2,'browse_bread',NULL,'2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(3,'browse_database',NULL,'2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(4,'browse_media',NULL,'2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(5,'browse_compass',NULL,'2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(6,'browse_menus','menus','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(7,'read_menus','menus','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(8,'edit_menus','menus','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(9,'add_menus','menus','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(10,'delete_menus','menus','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(11,'browse_roles','roles','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(12,'read_roles','roles','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(13,'edit_roles','roles','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(14,'add_roles','roles','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(15,'delete_roles','roles','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(16,'browse_users','users','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(17,'read_users','users','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(18,'edit_users','users','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(19,'add_users','users','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(20,'delete_users','users','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(21,'browse_settings','settings','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(22,'read_settings','settings','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(23,'edit_settings','settings','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(24,'add_settings','settings','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(25,'delete_settings','settings','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(26,'browse_categories','categories','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(27,'read_categories','categories','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(28,'edit_categories','categories','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(29,'add_categories','categories','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(30,'delete_categories','categories','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(31,'browse_posts','posts','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(32,'read_posts','posts','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(33,'edit_posts','posts','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(34,'add_posts','posts','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(35,'delete_posts','posts','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(36,'browse_pages','pages','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(37,'read_pages','pages','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(38,'edit_pages','pages','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(39,'add_pages','pages','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(40,'delete_pages','pages','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(41,'browse_hooks',NULL,'2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(42,'browse_products','products','2020-05-06 18:00:28','2020-05-06 18:00:28'),
	(43,'read_products','products','2020-05-06 18:00:28','2020-05-06 18:00:28'),
	(44,'edit_products','products','2020-05-06 18:00:28','2020-05-06 18:00:28'),
	(45,'add_products','products','2020-05-06 18:00:28','2020-05-06 18:00:28'),
	(46,'delete_products','products','2020-05-06 18:00:28','2020-05-06 18:00:28'),
	(47,'browse_product_categories','product_categories','2020-05-06 18:27:51','2020-05-06 18:27:51'),
	(48,'read_product_categories','product_categories','2020-05-06 18:27:51','2020-05-06 18:27:51'),
	(49,'edit_product_categories','product_categories','2020-05-06 18:27:51','2020-05-06 18:27:51'),
	(50,'add_product_categories','product_categories','2020-05-06 18:27:51','2020-05-06 18:27:51'),
	(51,'delete_product_categories','product_categories','2020-05-06 18:27:51','2020-05-06 18:27:51'),
	(52,'browse_coupons','coupons','2020-05-06 18:56:28','2020-05-06 18:56:28'),
	(53,'read_coupons','coupons','2020-05-06 18:56:28','2020-05-06 18:56:28'),
	(54,'edit_coupons','coupons','2020-05-06 18:56:28','2020-05-06 18:56:28'),
	(55,'add_coupons','coupons','2020-05-06 18:56:28','2020-05-06 18:56:28'),
	(56,'delete_coupons','coupons','2020-05-06 18:56:28','2020-05-06 18:56:28'),
	(57,'browse_product_product_category','product_product_category','2020-05-06 19:06:49','2020-05-06 19:06:49'),
	(58,'read_product_product_category','product_product_category','2020-05-06 19:06:49','2020-05-06 19:06:49'),
	(59,'edit_product_product_category','product_product_category','2020-05-06 19:06:49','2020-05-06 19:06:49'),
	(60,'add_product_product_category','product_product_category','2020-05-06 19:06:49','2020-05-06 19:06:49'),
	(61,'delete_product_product_category','product_product_category','2020-05-06 19:06:49','2020-05-06 19:06:49');

/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int NOT NULL,
  `category_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seo_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` enum('PUBLISHED','DRAFT','PENDING') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  `featured` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `posts_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `author_id`, `category_id`, `title`, `seo_title`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `featured`, `created_at`, `updated_at`)
VALUES
	(1,0,NULL,'Lorem Ipsum Post',NULL,'This is the excerpt for the Lorem Ipsum Post','<p>This is the body of the lorem ipsum post</p>','posts/post1.jpg','lorem-ipsum-post','This is the meta description','keyword1, keyword2, keyword3','PUBLISHED',0,'2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(2,0,NULL,'My Sample Post',NULL,'This is the excerpt for the sample Post','<p>This is the body for the sample post, which includes the body.</p>\n                <h2>We can use all kinds of format!</h2>\n                <p>And include a bunch of other stuff.</p>','posts/post2.jpg','my-sample-post','Meta Description for sample post','keyword1, keyword2, keyword3','PUBLISHED',0,'2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(3,0,NULL,'Latest Post',NULL,'This is the excerpt for the latest post','<p>This is the body for the latest post</p>','posts/post3.jpg','latest-post','This is the meta description','keyword1, keyword2, keyword3','PUBLISHED',0,'2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(4,0,NULL,'Yarr Post',NULL,'Reef sails nipperkin bring a spring upon her cable coffer jury mast spike marooned Pieces of Eight poop deck pillage. Clipper driver coxswain galleon hempen halter come about pressgang gangplank boatswain swing the lead. Nipperkin yard skysail swab lanyard Blimey bilge water ho quarter Buccaneer.','<p>Swab deadlights Buccaneer fire ship square-rigged dance the hempen jig weigh anchor cackle fruit grog furl. Crack Jennys tea cup chase guns pressgang hearties spirits hogshead Gold Road six pounders fathom measured fer yer chains. Main sheet provost come about trysail barkadeer crimp scuttle mizzenmast brig plunder.</p>\n<p>Mizzen league keelhaul galleon tender cog chase Barbary Coast doubloon crack Jennys tea cup. Blow the man down lugsail fire ship pinnace cackle fruit line warp Admiral of the Black strike colors doubloon. Tackle Jack Ketch come about crimp rum draft scuppers run a shot across the bow haul wind maroon.</p>\n<p>Interloper heave down list driver pressgang holystone scuppers tackle scallywag bilged on her anchor. Jack Tar interloper draught grapple mizzenmast hulk knave cable transom hogshead. Gaff pillage to go on account grog aft chase guns piracy yardarm knave clap of thunder.</p>','posts/post4.jpg','yarr-post','this be a meta descript','keyword1, keyword2, keyword3','PUBLISHED',0,'2020-05-06 15:43:21','2020-05-06 15:43:21');

/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table roles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;

INSERT INTO `roles` (`id`, `name`, `display_name`, `created_at`, `updated_at`)
VALUES
	(1,'admin','Administrator','2020-05-06 15:41:11','2020-05-06 15:41:11'),
	(2,'user','Normal User','2020-05-06 15:41:11','2020-05-06 15:41:11');

/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table settings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `settings`;

CREATE TABLE `settings` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `details` text COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL DEFAULT '1',
  `group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `settings_key_unique` (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;

INSERT INTO `settings` (`id`, `key`, `display_name`, `value`, `details`, `type`, `order`, `group`)
VALUES
	(1,'site.title','Site Title','Site Title','','text',1,'Site'),
	(2,'site.description','Site Description','Site Description','','text',2,'Site'),
	(3,'site.logo','Site Logo','','','image',3,'Site'),
	(4,'site.google_analytics_tracking_id','Google Analytics Tracking ID','','','text',4,'Site'),
	(5,'admin.bg_image','Admin Background Image','','','image',5,'Admin'),
	(6,'admin.title','Admin Title','Voyager','','text',1,'Admin'),
	(7,'admin.description','Admin Description','Welcome to Voyager. The Missing Admin for Laravel','','text',2,'Admin'),
	(8,'admin.loader','Admin Loader','','','image',3,'Admin'),
	(9,'admin.icon_image','Admin Icon Image','','','image',4,'Admin'),
	(10,'admin.google_analytics_client_id','Google Analytics Client ID (used for admin dashboard)','','','text',1,'Admin');

/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table translations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `translations`;

CREATE TABLE `translations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `column_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foreign_key` int unsigned NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `translations_table_name_column_name_foreign_key_locale_unique` (`table_name`,`column_name`,`foreign_key`,`locale`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `translations` WRITE;
/*!40000 ALTER TABLE `translations` DISABLE KEYS */;

INSERT INTO `translations` (`id`, `table_name`, `column_name`, `foreign_key`, `locale`, `value`, `created_at`, `updated_at`)
VALUES
	(1,'data_types','display_name_singular',5,'pt','Post','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(2,'data_types','display_name_singular',6,'pt','Página','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(3,'data_types','display_name_singular',1,'pt','Utilizador','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(4,'data_types','display_name_singular',4,'pt','Categoria','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(5,'data_types','display_name_singular',2,'pt','Menu','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(6,'data_types','display_name_singular',3,'pt','Função','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(7,'data_types','display_name_plural',5,'pt','Posts','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(8,'data_types','display_name_plural',6,'pt','Páginas','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(9,'data_types','display_name_plural',1,'pt','Utilizadores','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(10,'data_types','display_name_plural',4,'pt','Categorias','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(11,'data_types','display_name_plural',2,'pt','Menus','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(12,'data_types','display_name_plural',3,'pt','Funções','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(13,'categories','slug',1,'pt','categoria-1','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(14,'categories','name',1,'pt','Categoria 1','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(15,'categories','slug',2,'pt','categoria-2','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(16,'categories','name',2,'pt','Categoria 2','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(17,'pages','title',1,'pt','Olá Mundo','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(18,'pages','slug',1,'pt','ola-mundo','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(19,'pages','body',1,'pt','<p>Olá Mundo. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\r\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(20,'menu_items','title',1,'pt','Painel de Controle','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(21,'menu_items','title',2,'pt','Media','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(22,'menu_items','title',12,'pt','Publicações','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(23,'menu_items','title',3,'pt','Utilizadores','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(24,'menu_items','title',11,'pt','Categorias','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(25,'menu_items','title',13,'pt','Páginas','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(26,'menu_items','title',4,'pt','Funções','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(27,'menu_items','title',5,'pt','Ferramentas','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(28,'menu_items','title',6,'pt','Menus','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(29,'menu_items','title',7,'pt','Base de dados','2020-05-06 15:43:21','2020-05-06 15:43:21'),
	(30,'menu_items','title',10,'pt','Configurações','2020-05-06 15:43:21','2020-05-06 15:43:21');

/*!40000 ALTER TABLE `translations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_roles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_roles`;

CREATE TABLE `user_roles` (
  `user_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `user_roles_user_id_index` (`user_id`),
  KEY `user_roles_role_id_index` (`role_id`),
  CONSTRAINT `user_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `role_id` bigint unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'users/default.png',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `settings` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `role_id`, `name`, `email`, `avatar`, `email_verified_at`, `password`, `remember_token`, `settings`, `created_at`, `updated_at`)
VALUES
	(1,1,'Admin','admin@admin.com','users/default.png',NULL,'$2y$10$3pqmaUz79.CaURDB09jPIusX3jH8wjeqsmNE58S3ThF8Vwab982oi','PWMWYUe5BVJVijarI1koYMkEX9pRUIk7aWOpdYdBIeoAs0BXHT1e4uIEmMgO',NULL,'2020-05-06 15:43:21','2020-05-06 15:43:21');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
