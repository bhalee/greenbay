/* Replace with your SQL commands */
LOCK TABLES `users` WRITE;
DELETE FROM users WHERE user_id IN (1,2,3);
UNLOCK TABLES;