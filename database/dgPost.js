const faker = require('faker');
const fs = require('graceful-fs');
const path = require('path');


// for CSV 
const json2csv = require('json2csv').parse;
const fields = ['id', 'cards'];
// const optsHeaders = { fields };
const opts = { header: false, delimiter: '|', doubleQuote: "' '", quote: '' };


const random = (max) => {
  return Math.ceil(Math.random() * Math.floor(max));
};

const cardName = ['Sunday Brunch', 'Dinner', 'Lunch'];
const categName = ['Bites', 'Appetizers', 'Entree', 'Dessert'];
const itemName = ['King Burger', 'Greens Salad', 'Lasagna', 'A5 Steak Tartar'];
const addOnName = ['Applewood Smoked Bacon', 'Avocado'];

let records = 1000;

let writeStream = fs.createWriteStream(path.join(__dirname + '/sdcPostData.csv'), { flags: 'w' });

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

const generateData = () => {
  let proceed = true;
  
  while (i < records && proceed) {
    progressLog(i);
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
      id: i, 
      restaurant: 'restaurant' + i.toString(),
      cards: cards
    };
    proceed = writeStream.write(json2csv(forMenu, opts) + '\n');
    i++;
  }
  if (!proceed) {
    writeStream.once('drain', () => {
      generateData();
    });
  }
};

generateData();
