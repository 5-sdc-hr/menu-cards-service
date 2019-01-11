const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./../database/index.js');

const app = express();

// -------- middleware -------- //
app.use('/restaurants/:id/', express.static('client/dist/'));
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------- crud -------- //

// read
app.get('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving get request to id: ', req.params.id);
  db.retrieveAll(req.params.id, (menu) => {
    res.send(menu);
  });
});

// -------- server -------- //
const port = 3003;
app.listen(port, () => console.log(`Now listening on port ${port}!`));
