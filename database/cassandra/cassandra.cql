-- For Cassandra DB
KEYSPACE: restaurant_menus (id serial PRIMARY KEY, restaurant TEXT, cards TEXT);

CREATE KEYSPACE restaurant with REPLICATION = {'class': 'SimpleStrategy', 'replciation_factor': 1}

-- CREATE TABLE cards (id serial PRIMARY KEY, cards.name TEXT, cards.footnote TEXT)
-- CREATE TABLE menu (id serial PRIMARY KEY, sections.name TEXT, sections.description TEXT)
-- CREATE TABLE item (id serial PRIMARY KEY, items.name TEXT, items.description TEXT, items.price TEXT)
-- CREATE TABLE addOns (id serial PRIMARY KEY, addOns.name TEXT, addOns.price TEXT)

Create table menus (
  id int,
  restaurant text,
  cards text,
  PRIMARY KEY(id, restaurant)
)

USE restaurants;

-- To seed COPY restaurant_menus & batch
COPY restaurants.menus (id, restaurant, cards) FROM '/Users/connieea/HRSF/SDC/menu-cards-service/database/sdcCassData.csv' WITH MINBATCHSIZE=1 AND MAXBATCHSIZE=5 AND NUMPROCESSES=10 AND CHUNKSIZE=5000 AND PREPAREDSTATEMENTS=False AND DELIMITER='|' AND HEADER=FALSE;

-- Query database
SELECT * FROM restaurants.menus WHERE ID = 9999999;
SELECT * FROM restaurants.menus WHERE RESTAURANT = 'restaurant9999967';
