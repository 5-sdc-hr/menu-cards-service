const newrelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('../database/index.js');

const app = express();

// -------- middleware -------- //
app.use('/restaurants/:id/', express.static('client/dist/'));
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------- crud -------- //
// create
app.post('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving post request to id: ', req.params.id, 'with', req.body);
  db.postOne(req.params.id, req.body, (menu) => {
    res.send(menu);
  });
});

// read
app.get('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving get request to id: ', req.params.id);
  db.findMenus(req.params.id, (err, menu) => {
    if (err) {
      console.log('Error from server --', err);
    } else {
      console.log(`this is menu`, menu);
      res.send(menu);
    }
  });
});

// update
app.put('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving put (edit) request to id: ', req.params.id, 'with', req.body);
  db.updateOne(req.params.id, req.body, (menu) => {
    res.send(menu);
  });
});

// delete
app.delete('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving put (edit) request to id: ', req.params.id, 'with', req.body);
  db.deleteOne(req.params.id, req.body, (menu) => {
    res.send(menu);
  });
});

// -------- server -------- //
const port = 3003;
app.listen(port, () => console.log(`Now listening on port ${port}!`));
