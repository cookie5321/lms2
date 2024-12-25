insert into users (username, password, name, role) values ('professor', 'sha512:wuj01Azfp1XBl73ux0Kx7gLJbKLlOWjnKbUeHDvEgNk=:204085:64:1oLT6qi2VB6yGf3Dywl7o6AThQaN8YXgAYrIF9bHAYZQL65iZA9uW8AKicl1UBg2Hh7srtra72jTNHdDQ+8pjQ==', '교수다', 0);
insert into users (username, password, name, std_num, role) values ('student', 'sha512:x1hDnV+U3T2lK8a++vl4nlDxFP7g9r0rNq7nu9vYmQk=:217805:64:Yc0MA77au/oqMVU7X/imN29XFh7viXosVlFgOaYt7cVeznsRUzKD9hDX4BCvY4nHlSGuCpcTh0BzS2CYY9qgjw==', '학생이다', '2022321234', 1);
insert into users (username, password, name, role) values ('professor2', 'sha512:wuj01Azfp1XBl73ux0Kx7gLJbKLlOWjnKbUeHDvEgNk=:204085:64:1oLT6qi2VB6yGf3Dywl7o6AThQaN8YXgAYrIF9bHAYZQL65iZA9uW8AKicl1UBg2Hh7srtra72jTNHdDQ+8pjQ==', '교수2', 0);

insert into lectures (name, lecturer) values ('컴퓨터프로그래밍', 1);
insert into lectures (name, lecturer) values ('자료구조', 1);

insert into posts (lecture, title, created, content) values (1, '첫번째 글', '2022-02-22 22:22:22', '<b>안녕</b>하세요');

insert into takes (user, lecture) values (2, 1);