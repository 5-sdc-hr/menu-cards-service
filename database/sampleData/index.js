const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC', { useNewUrlParser: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('+++ Connected to FEC DB +++');
});

const menuSchema = new mongoose.Schema({
  _id: 'Number',
  cards: [
    {
      name: 'String',
      footnote: 'String',
      sections: [
        {
          name: 'String',
          description: 'String',
          items: [
            {
              name: 'String',
              description: 'String',
              price: 'String',
              addOns: [
                {
                  name: 'String',
                  price: 'String',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const Menu = mongoose.model('Menu', menuSchema);

// for post 
const postOne = (id, cb) => {
  Menu.post({ _id: id }, (err, menu) => {
    if (err) console.error(err);

    console.log('Posted menu to DB: ', menu);
    cb(menu);
  });
};

// for retrieve
const retrieveAll = (id, cb) => {
  Menu.find({ _id: id }, (err, menu) => {
    if (err) console.error(err);

    console.log('+++Retrieving menu from DB: ', menu);
    cb(menu);
  });
};

// for edit
const updateOne = (id, cb) => {
  Menu.find({_id: id}, (err, menu) => {
    if (err) console.error(err);

    console.log('+++Edited menu from DB: ', menu);
    cb(menu);
  })
}

// for delete
const deleteOne = (id, cb) => {
  Menu.find({_id: id}, (err, menu) => {
    if (err) console.error(err);

    console.log('+++Deleting menu from DB: ', menu)
    cb(menu);
  })
}

module.exports = {
  postOne,
  retrieveAll,
  updateOne,
  deleteOne
};
