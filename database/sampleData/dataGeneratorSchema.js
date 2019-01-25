[
  '{{repeat(99)}}',
  {
    _id: '{{index(2)}}',
    restName: '{{random("Nightowl", "Trilogy", "The Harlequin Ship", "The Cottage", "Olive Grove", "1770 House", "Café Monarch")}}',
    cards: [
      '{{repeat(1, 5)}}',
      {
        cardName: '{{random("Sunday Brunch", "Dinner", "Lunch")}}',
        cardNotes: '{{lorem(1, "sentence")}}',
        categories: [
          '{{repeat(2, 5)}}',
          {
            categName: '{{random("Bites", "Appetizers", "Entree", "Dessert")}}',
            categDes: '{{lorem(25, "word")}}',
            items: [
              '{{repeat(2, 6)}}',
              {
                itemName: '{{random("King Burger", "Greens Salad", "Lasagna", "A5 Steak Tartar")}}',
                itemDes: '{{lorem(5, "word")}}',
                itemPrice: '{{floating(8, 35, 0, "$0,0.00")}}',
                addOns: [
                  '{{repeat(0, 2)}}',
                    {
                      addOnName: '{{random("Applewood Smoked Bacon", "Avocado")}}',
                      addOnPrice: '{{random("$4.00", "$2.00")}}'
                    }
                  ]
              }
            ]
          }
        ]
  	  }
  	]
  } 
]


// https://www.json-generator.com/

[
  '{{repeat(99)}}',
  {
    _id: '{{index(2)}}',
    cards: [
      '{{repeat(1, 5)}}',
      {
        name: '{{random("Sunday Brunch", "Dinner", "Lunch")}}',
        notes: '{{lorem(1, "sentence")}}',
        categories: [
          '{{repeat(2, 5)}}',
          {
            name: '{{random("Bites", "Appetizers", "Entree", "Dessert")}}',
            description: '{{lorem(25, "word")}}',
            items: [
              '{{repeat(2, 6)}}',
              {
                name: '{{random("King Burger", "Greens Salad", "Lasagna", "A5 Steak Tartar")}}',
                description: '{{lorem(5, "word")}}',
                price: '{{floating(8, 35, 0, "$0,0.00")}}',
                addOns: [
                  '{{repeat(0, 2)}}',
                    {
                      name: '{{random("Applewood Smoked Bacon", "Avocado")}}',
                      price: '{{random("$4.00", "$2.00")}}'
                    }
                  ]
              }
            ]
          }
        ]
  	  }
  	]
  } 
]

