use lms2;

create table users (
    user_id int not null primary key auto_increment,
    username varchar(16) not null unique,
    password varchar(151) not null,
    name varchar(32) not null,
    std_num char(10) unique,
    role int not null
) engine=InnoDB default charset=utf8;

create table lectures (
    lec_id int not null primary key auto_increment,
    name varchar(32) not null,
    lecturer int not null,
    foreign key (lecturer) references users(user_id)
) engine=InnoDB default charset=utf8;

create table posts (
    post_id int not null primary key auto_increment,
    lecture int not null,
    title varchar(128) not null,
    created datetime not null default current_timestamp(),
    content text not null,
    foreign key (lecture) references lectures(lec_id)
) engine=InnoDB default charset=utf8;

create table takes (
    user int not null,
    lecture int not null,
    primary key (user, lecture),
    foreign key (user) references users(user_id),
    foreign key (lecture) references lectures(lec_id)
) engine=InnoDB default charset=utf8;