CREATE TABLE users (
    id serial primary key,
    username varchar(50),
    password varchar(8)
)

CREATE TABLE menu (
    id serial primary key,
    item varchar(50),
    description text,
    price varchar(10),
    meal varchar(9)
);
