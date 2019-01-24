-- Postgres 

DROP DATABASE IF EXISTS restaurant;

CREATE DATABASE restaurant;

DROP TABLE IF EXISTS menu;

CREATE TABLE menu (id serial PRIMARY KEY, restaurant text, cards JSON);

-- To seed 
COPY menu (id, restaurant, cards) FROM '/Users/connieea/HRSF/SDC/menu-cards-service/database/sdcData.csv' DELIMITER '|';


-- Add index for query
CREATE INDEX ON menu (id);

-- To query
SELECT * FROM menu WHERE ID = 999959;

-- SELECT * FROM menus WHERE restaurant LIKE '%restaurant9999999%';

SELECT * FROM menu WHERE restaurant = '"restaurant9999998"';





