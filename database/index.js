const { Pool } = require('pg');

const pool = new Pool({
  user: 'connieea',
  host: '127.0.0.1',
  port: 5432,
  database: 'restaurant',
});

pool.on('error', (err) => {
  console.log('Error', err);
});

// get menus for specific restaurant
const findMenus = (id, cb) => {
  pool.query(`SELECT cards FROM temp WHERE ID = ${id};`, (err, menu) => {
    if (err) {
      console.log('Error --', err);
    } else {
      console.log('Retrieving menu from db--', menu.rows[0]);
      cb(null, menu.rows[0]);
    }
  });
};

// delete menu 
const deleteMenu = (cards, cb) => {
  pool.query(`DELETE FROM menu WHERE ID = ${cards}`, (err, menu) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleting menu', menu);
      cb(menu);
    }
  });
};

// add menu
const addMenu = (id, cb) => {
  pool.query(`INSERT INTO menu WHERE ID = ${id}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Adding menu', res);
      cb(res);
    }
  });
};

// edit menu
const editMenu = (cards, cb) => {
  pool.query(`UPDATE menu SET cards = ${cards}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Editing menu', res);
      cb(res);
    }
  });
};

module.exports = { findMenus, deleteMenu, addMenu, editMenu }