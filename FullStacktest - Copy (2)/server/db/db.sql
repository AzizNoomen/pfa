CREATE DATABASE testbase

CREATE TABLE testtable(
  id SERIAL NOT NULL PRIMARY KEY ,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  jury boolean,
  supervisor boolean,
  admin boolean
);