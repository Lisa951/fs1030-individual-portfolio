DROP TABLE IF EXIST `portfolio`;


CREATE TABLE `portfolio`(
`projectName` varchar(50) NOT NULL, 
`projectDate` date NOT NULL, 
`projectPurpose` varchar(200) NOT NULL, 
`projectDescription` varchar(250) NOT NULL, 
`portfolioItem` int(10) UNSIGNED NOT NULL,
PRIMARY KEY (`projectName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `portfolio` WRITE;

UNLOCK TABLES;