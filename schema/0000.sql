create table users (
    id int not null primary key auto_increment,
    userid varchar(16) not null unique,
    password varchar(150) not null,
    name varchar(32) not null,
    std_num char(10) not null unique,
    role int not null
) engine=InnoDB default charset=utf8;

create table lectures (
    lec_id int not null primary key auto_increment,
    name varchar(32) not null,
    lecturer int not null
) engine=InnoDB default charset=utf8;

create table posts (
    post_id int not null primary key auto_increment,
    lecture int not null,
    title varchar(128) not null,
    created datetime not null,
    contents text not null
)