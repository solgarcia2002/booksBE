CREATE SCHEMA books;

CREATE TABLE books.author (
	id                   INT UNSIGNED NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	name                 VARCHAR(100)  NOT NULL
 ) engine=InnoDB;

CREATE TABLE books.book (
	id                   INT UNSIGNED NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	name                 VARCHAR(255)  NOT NULL    ,
	description          TEXT      ,
	authorid             INT UNSIGNED NOT NULL    ,
	CONSTRAINT fk_books_authors FOREIGN KEY ( authorid ) REFERENCES books.author( id ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;
