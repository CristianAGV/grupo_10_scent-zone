DROP DATABASE IF EXISTS `scentzoneDB`;
CREATE DATABASE `scentzoneDB`;
USE `scentzoneDB`;

SET NAMES utf8;
SET character_set_client = utf8mb4 ;

CREATE TABLE `users` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `first_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    `last_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    `email` varchar(50) NOT NULL,
    `password` varchar(200) NOT NULL,
    `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT 'product3.jpg',
	`role` tinyint(3) NOT NULL DEFAULT 1,
    `country` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `users` VALUES(1,'Terrel','Jozefiak','tjozefiak0@whitehouse.gov','3CfzJRwFH','user-man1.jpg',1,'Colombia');
INSERT INTO `users` VALUES(2,'Onida','Dilger','odilger1@gov.uk','wDMdPfAsgxP','user-woman1.jpg',1,'USA');
INSERT INTO `users` VALUES(3,'Aurie','Brogini','abrogini2@webeden.co.uk','T29OmRc','user-woman8.jpg',2,'Venezuela');
INSERT INTO `users` VALUES(4,'Renate','Pick','rpick3@mozilla.com','XbPkZMR','user-woman3.jpg',1,'Panamá');
INSERT INTO `users` VALUES(5,'Fay','Mouan','fmouan5@wix.com','4g1382rj0W','user-man2.jpg',1,'Francia');
INSERT INTO `users` VALUES(6,'Alberto','Efford','aefford7@telegraph.co.uk','1k470MHBA3','user-man3.jpg',2,'Francia');
INSERT INTO `users` VALUES(7,'Isobel','Baty','ibaty6@oracle.com','bFWT692','user-woman5.jpg',2,'Brasil');
INSERT INTO `users` VALUES(8,'Siobhan','Perrone','sperrone8@mapquest.com','cR3XCz7m','user-woman6.jpg',1,'USA');
INSERT INTO `users` VALUES(9,'Nalani','Rivard','nrivard9@wunderground.com','35ZuzsH','user-woman7.jpg',1,'Mexico');
INSERT INTO `users` VALUES(10,'Sauncho','Gilmartin','sgilmartina@ehow.com','UGknLQTtM','user-man4.jpg',1,'Mexico');

CREATE TABLE `categories` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `category_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `categories` VALUES(1,'Dulce');
INSERT INTO `categories` VALUES(2,'Amaderado');
INSERT INTO `categories` VALUES(3,'Cítrico');
INSERT INTO `categories` VALUES(4,'Floral');
INSERT INTO `categories` VALUES(5,'Frutal');

CREATE TABLE `products` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `product_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    `brand` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
    `description` TEXT DEFAULT NULL,
    `gender` varchar(30) NOT NULL,
    `category_id` int(10) unsigned NOT NULL,
    `price` decimal(5,2) NOT NULL,
    `size` smallint NOT NULL,
    `status` boolean DEFAULT true,
    `product_image` varchar(100) DEFAULT 'product3.jpg',
     PRIMARY KEY (`id`),
     KEY `products_category_id_FK` (`category_id`),
     CONSTRAINT `products_category_id_FK` FOREIGN KEY  (`category_id`) REFERENCES `categories` (`id`)		
)ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `products` VALUES (1,"L'eau D'issey Pour Homme", 'Issey Miyake',"justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum","Masculino",5,124.7,200,true,"Issey.jpg");
INSERT INTO `products` VALUES (2,"Grey Vetiver", 'Tom Ford',"ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla","Masculino",3,61.91,150,true,"Tom-Ford-Grey.jpg");
INSERT INTO `products` VALUES (3,"Terre d'Hermès", 'Hermès',"varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc","Unisex",4,107.24,200,true,"hermes.jpg");
INSERT INTO `products` VALUES (4,"Luna Rossa Carbon", 'Prada',"justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra","Unisex",1,78.48,200,true,"prada.jpg");
INSERT INTO `products` VALUES (5,"Halloween Men", 'Halloween Perfumes',"habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem","Masculino",5,86.32,150,true,"halloween.jpg");
INSERT INTO `products` VALUES (6,"Bleu de Chanel", 'Chanel',"quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum","Masculino",4,82.71,200,true,"Bleu-channel.jpg");
INSERT INTO `products` VALUES (7,"L'Homme Idéal L'Intense", 'Guerlain',"augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia","Masculino",5,98.61,100,true,"guerlain.jpg");
INSERT INTO `products` VALUES (8,"Le Male", 'Jean Paul Gaultier',"odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros","Masculino",3,114.57,150,true,"jean-paul.jpg");
INSERT INTO `products` VALUES (9,"Boss Bottled Infinite", 'Hugo Boss',"ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum","Masculino",2,69.24,100,true,"hugo-boss.jpg");
INSERT INTO `products` VALUES (10,"Acqua di Giò", 'Giorgio Armani',"in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi","Masculino",2,73.74,200,true,"giorgio.jpg");

CREATE TABLE `orders` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `product_id` int(10) unsigned NOT NULL,
    `user_id` int(10) unsigned NOT NULL,
    `quantity` smallint unsigned default 1,
    PRIMARY KEY (`id`),
    KEY `orders_product_id_FK` (`product_id`),
    KEY `orders_user_id_FK` (`user_id`),
    CONSTRAINT `orders_product_id_FK` FOREIGN KEY  (`product_id`) REFERENCES `products` (`id`),
    CONSTRAINT `orders_user_id_FK` FOREIGN KEY  (`user_id`) REFERENCES `users` (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
