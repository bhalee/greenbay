LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'bela','$2a$10$qqY.WaiTDj7TdZV7CM8QqOjYtop.7qdDA4eQhte32vq0GbVUMur9K','active',1000),(2,'jozsi','$2a$10$qqY.WaiTDj7TdZV7CM8QqOjYtop.7qdDA4eQhte32vq0GbVUMur9K','active',10000),(3,'marika','$2a$10$qqY.WaiTDj7TdZV7CM8QqOjYtop.7qdDA4eQhte32vq0GbVUMur9K','active',100000);
/* 
bela    | password  | $1000
jozsi   | password  | $10000
marika  | password  | $100000
 */
UNLOCK TABLES;