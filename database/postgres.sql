-- Postgres 

DROP DATABASE IF EXISTS restaurant;

CREATE DATABASE restaurant;

DROP TABLE IF EXISTS restaurant_menus;

CREATE TABLE restaurant_menus (id serial PRIMARY KEY, restaurant TEXT, cards TEXT);

-- CREATE TABLE cards (id serial PRIMARY KEY, cards.name TEXT, cards.footnote TEXT)

-- CREATE TABLE menu (id serial PRIMARY KEY, sections.name TEXT, sections.description TEXT)

-- CREATE TABLE item (id serial PRIMARY KEY, items.name TEXT, items.description TEXT, items.price TEXT)

-- CREATE TABLE addOns (id serial PRIMARY KEY, addOns.name TEXT, addOns.price TEXT)

-- To seed 
COPY restaurant_menus (id, restaurant, cards) FROM '/Users/connieea/HRSF/SDC/menu-cards-service/database/sdcCassData.csv' DELIMITER '|' CSV QUOTE '''';

-- To query
SELECT * FROM restaurant_menus WHERE ID = 9999999;