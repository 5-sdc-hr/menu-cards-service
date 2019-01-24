const faker = require('faker');
const fs = require('graceful-fs');
const path = require('path');
const json2csv = require('json2csv').parse;

// Helpers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const progressLog = (index) => {
  if (index === 1) {
    console.log('STARTING WRITING!');
  }
  if (index === Math.floor(1 * records / 10)) {
    console.log('-- 10% complete');
  }
  if (index === Math.floor(2 * records / 10)) {
    console.log('---- 20% complete');
  }
  if (index === Math.floor(3 * records / 10)) {
    console.log('------ 30% complete');
  }
  if (index === Math.floor(4 * records / 10)) {
    console.log('-------- 40% complete');
  }
  if (index === Math.floor(5 * records / 10)) {
    console.log('---------- 50% complete');
  }
  if (index === Math.floor(6 * records / 10)) {
    console.log('------------ 60% complete');
  }
  if (index === Math.floor(7 * records / 10)) {
    console.log('-------------- 70% complete');
  }
  if (index === Math.floor(8 * records / 10)) {
    console.log('---------------- 80% complete');
  }
  if (index === Math.floor(9 * records / 10)) {
    console.log('------------------ 90% complete');
  }
  if (index === records) {
    console.log('-------------------- SUCCESSFULLY WRITTEN');
  }
 };

let i = 0;
let records = 10000000;

// for CSV   
const fields = ['id', 'restaurant', 'cards'];
const opts = { fields, header: false, delimiter: '|', quote: '' };

let writeStream = fs.createWriteStream(path.join(__dirname + '/sdcData.csv'), { flags: 'w' });

const cardName = ['Sunday Brunch', 'Dinner', 'Lunch'];
const categName = ['Bites', 'Appetizers', 'Entree', 'Dessert'];
const itemName = ['King Burger', 'Greens Salad', 'Lasagna', 'A5 Steak Tartar'];
const addOnName = ['Applewood Smoked Bacon', 'Avocado'];


const generateData = () => {
  let proceed = true;
  
  while (i < records && proceed) {
    progressLog(i);
    let addOns = []; 
    for (let j = 0; j < random(1, 2); j++) {
      addOns.push({
        name: addOnName[random(0, 2)],
        price: faker.commerce.price(),
      });
    }
    let items = [];
    for (let k = 0; k < random(1, 4); k++) {
      items.push({
        name: itemName[random(0, 4)],
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        addOns,
      });
    }
      
    let sections = [];
    for (let l = 0; l < random(1, 2); l++) {
      sections.push({
        name: categName[random(0, 4)],
        description: faker.lorem.sentence(),
        items,
      });
    }
    let cards = [];
    for (let m = 0; m < random(1, 2); m++) {
      cards.push({
        name: cardName[random(0, 3)],
        footnote: faker.lorem.words(),
        sections,
      });
    }
    let forMenu = {
      id: i,
      restaurant: 'restaurant' + i.toString(),
      cards,
    };
    proceed = writeStream.write(json2csv(forMenu, opts) + '\n');
    // proceed = writeStream.write(JSON.stringify(forMenu) + '\n');
    i++;
  }
  if (!proceed) {
    writeStream.once('drain', () => {
      generateData();
    });
  }
};

generateData();
