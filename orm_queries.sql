create schema `orm_db`;

drop table users;

select * from usercars;
select * from users;

 SELECT `username` AS `UserName`, `age` FROM `Users` AS `User`;

truncate table usercars;	

desc usercars;


create table users(
id int primary key auto_increment,
username varchar(100) not null,
age int not null,
createdAt date not null,
updatedAt date not null
);

select * from users;

insert into users (username,age) values
("John",30),
("Alex",29),
("Mark",10),
("Bob",16);


SELECT A.username, B.car 
FROM users AS A 
INNER JOIN usercars AS B 
where A.username = B.username;


SELECT * FROM USERS LIMIT 10,10;

-- Check for duplicates in the users table
SELECT username, COUNT(*)
FROM users
GROUP BY username
HAVING COUNT(*) > 1;

-- Check for duplicates in the usercars table
SELECT username, car, COUNT(*)
FROM usercars
GROUP BY username, car
HAVING COUNT(*) > 1;

