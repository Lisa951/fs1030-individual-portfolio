DROP TABLE IF EXIST `resume`;


CREATE TABLE `resume`(
`resumeItem` varchar(20) NOT NULL, 
`programTitle` varchar(200) NOT NULL,
`schoolName` varchar(100) NOT NULL,
`dateExpierence` varchar(100) NOT NULL,
`programDescription` varchar(300) DEFAULT NULL,
`jobTitle` varchar(200) NOT NULL,
`organization` varchar(150) NOT NULL,
`date` varchar(150) NOT NULL,
`skillDescription` varchar(200) NOT NULL, 
`skillCompetent` varchar(250) DEFAULT NULL,
`skillDesigned` varchar(250) DEFAULT NULL,
`skillCreated` varchar(250)DEFAULT NULL,
PRIMARY KEY (`resumeItem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `resume` WRITE;

UNLOCK TABLES;


