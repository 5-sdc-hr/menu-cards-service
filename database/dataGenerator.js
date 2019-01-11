const faker = require('faker');
const fs = require('fs');

const random = (max) => {
  return Math.ceil(Math.random() * Math.floor(max));
};

const cardName = ['Sunday Brunch', 'Dinner', 'Lunch'];
const categName = ['Bites', 'Appetizers', 'Entree', 'Dessert'];
const itemName = ['King Burger', 'Greens Salad', 'Lasagna', 'A5 Steak Tartar'];
const addOnName = ['Applewood Smoked Bacon', 'Avocado'];

let records = 100000;

let writeStream = fs.createWriteStream(__dirname + '/sdcData.csv');

const generateData = () => {
  let i = 0;
  let proceed = true;
  
  while (i < records && proceed) {
    let addOns = []; 
    for (let j = 0; j < random(2); j++) {
      addOns.push({
        name: addOnName[random(2)],
        price: faker.commerce.price(),
      })
    }
    
    let items = [];
    for (let k = 0; k < random(6); k++) {
      items.push({
        name: itemName[random(4)],
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        addOns: addOns,
      })
    }
      
    let sections = [];
    for (let l = 0; l < random(5); l++) {
      sections.push({
        name: categName[random(4)],
        description: faker.lorem.sentence(),
        items: items,
      })
    }
      
    let cards = [];
    for (let m = 0; m < random(5); m++) {
      cards.push({
        name: cardName[random(3)],
        footnote: faker.lorem.words(),
        sections: sections,
      })
    }
      
    let forMenu = {
      _id: i, 
      cards: cards,
    }
    proceed = writeStream.write(JSON.stringify(forMenu) + '\n');
    i++;
  }
  if (!proceed) {
    writeStream.once('drain', () => {
      generateData();
    });
  }
};


// const generateData = () => {
//   let proceed = true;

//   for (let i = 0; i < 100000 ; i++) {
//     forMenu.push({    
//       _id: i,
//       cards: [
//         {
//           name: cardName[random(3)],
//           footnote: faker.lorem.sentence(),
//           sections: [
//             {
//               name: categName[random(4)],
//               description: faker.lorem.sentence(),
//               items: [
//                 {
//                   name: itemName[random(4)],
//                   description: faker.lorem.sentence(),
//                   price: faker.commerce.price(),
//                   addOns: [
//                     {
//                       name: addOnName[random(2)],
//                       price: faker.commerce.price(),
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     });
//   }
//   proceed = writeStream.write(JSON.stringify(forMenu) = '\n');
// }
//   if (!proceed) {
//     writeStream.on('drain', () => {
//       generateData();
//   });
// };
//   // writeStream.end();
// };
generateData();


// module.exports = { forMenu }