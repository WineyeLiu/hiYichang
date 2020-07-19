CREATE DATABASE hiyichang CHARACTER SET utf8 COLLATE utf8_general_ci;

use hiyichang;

create table `order` (
	id bigint(20) not null primary key auto_increment,
	customer_id bigint(20) not null comment '客户Id',
	order_description varchar(512) comment '订单描述',
	price bigint(20) comment '订单金额 单位 ：分' ,
	status int(11) default 0 not null comment '0=inited 1=processing 2=archived',
	delete_flag char(1) not null default 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table customer (
	id bigint(20) not null primary key auto_increment,
	customer_title varchar(24),
	customer_lastname varchar(24) not null,
	customer_firstname varchar(24) not null,
	phone_number varchar(24) not null,
	birthday date,
	gender char(1) not null default 0 comment '0=lady 1=gentleman',
	delete_flag char(1) not null default 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table employee (
	id bigint(20) not null primary key auto_increment,
	account_id varchar(200) not null,
	name varchar(200) not null,
	birthday date,
	phone_number varchar(24) not null,
	gender char(1) not null default 0 comment '0=lady 1=gentleman',
	login_passwd varchar(512) not null,
	unique key `uk_account`(`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table procedure_step (
	id bigint(20) not null primary key auto_increment,
	`order` int(11) not null,
	name varchar(256) not null comment 'stage name',
	remark varchar(1024),
	finish_datetime datetime,
	expect_deliver_time date,
	operator_employee_id bigint(20),
	status char(1) not null default 0 comment '0=unfinished 1=finished'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;












