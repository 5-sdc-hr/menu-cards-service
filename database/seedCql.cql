-- For Cassandra DB

Create table menus (
  id int PRIMARY KEY,
  restaurant text,
  cards text
)

USE restaurants;

-- For batch
COPY restaurants.menus (id, restaurant, cards) FROM '/Users/connieea/HRSF/SDC/menu-cards-service/database/sdcCassData.csv' WITH MINBATCHSIZE=1 AND MAXBATCHSIZE=5 AND NUMPROCESSES=10 AND CHUNKSIZE=5000 AND PREPAREDSTATEMENTS=False AND DELIMITER='|' AND HEADER=FALSE;

-- Query database
SELECT * FROM restaurants.menus WHERE ID = 9999999;