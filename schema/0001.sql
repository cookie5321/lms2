insert into users (username, password, name, role) values ('professor', 'professor', '교수다', 0);
insert into users (username, password, name, std_num, role) values ('student', 'student', '학생이다', '2022321234', 1);

insert into lectures (name, lecturer) values ('컴퓨터프로그래밍', 1);
insert into lectures (name, lecturer) values ('자료구조', 1);

insert into posts (lecture, title, created, content) values (1, '첫번째 글', '2022-02-22 22:22:22', '<b>안녕</b>하세요');

insert into takes (user, lecture) values (2, 1);