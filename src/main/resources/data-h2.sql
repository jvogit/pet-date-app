INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

INSERT INTO users(id, created_at, updated_at, email, password, username) VALUES(1, '2021-01-01 05:00:58.5894413', '2021-01-01 05:00:58.5894413', 'joegaucho@ucsb.edu', '$2a$10$7Oa.LEly0F07s4Zsoc84COc7YVH3PgiLXY/nys4CXNUOvE8qq086W', 'joegaucho');
INSERT INTO users(id, created_at, updated_at, email, password, username) VALUES(2, '2021-01-01 05:00:58.5894413', '2021-01-01 05:00:58.5894413', 'alexaggie@ucdavis.edu', '$2a$10$56Ur.HO5g2dwh1JaTxh74exIZUTYrRArh83n5Qh1lZvGutAwQHffG', 'alexaggie');

INSERT INTO user_roles(user_id, role_id) values (1, 1);
INSERT INTO user_roles(user_id, role_id) values (1, 2);
INSERT INTO user_roles(user_id, role_id) values (2, 1);
INSERT INTO user_roles(user_id, role_id) values (2, 2);