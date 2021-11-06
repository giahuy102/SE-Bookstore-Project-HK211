drop schema if exists warehouse;
create schema warehouse;
use warehouse;

drop table if exists BOOK;
create table BOOK (
	title text,
    id int primary key,
    author text,
    category text,
    publisher text,
    input_date date,
    quantity int,
    cost_price float,
    selling_price float,
    page_number int,
    sale float,
    publish_date date,
    language text,
    picture text,
    description text
);

drop table if exists BOOK;
create table BOOK (
	title text,
    id int primary key
);


drop table if exists user_account;
create table user_account (
	id int,
    fullname varchar(30),
    position_role varchar(30),
    email varchar(30),
    birthday date,
    phone_number char(10),
    address varchar(50)
);

insert into user_account values (1, 'Nhan Vo', 'Warehouse manager', 'nhanvo@hcmut.edu.vn', '2001-10-03', '0919077893', 'Ho Chi Minh City');

SET SQL_SAFE_UPDATES = 0;
update user_account set id = 1910409 where fullname = 'Nhan Vo';
SET SQL_SAFE_UPDATES = 1;