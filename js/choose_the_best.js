"use strict";

var smartphones = [
    {
      name: "Iphone 6s",
      ram: 2,
      camera: 3,
      price: 900
    },
    {
      name: "Samsung s6",
      ram: 4,
      camera: 16,
      price: 499
    },
    {
      name: "Asus Zenfone Selfie",
      ram: 16,
      camera: 27,
      price: 499
    }
];



var preferences = [{ram: 10, camera: 2, price: 1}];

var best_matching = [{name: "", score: 0}];

var score = 0;
for(var i = 0; i < smartphones.length; i++){
  score = 
    (smartphones[i].ram * preferences[0].ram) +
    (smartphones[i].camera * preferences[0].camera) + 
    (smartphones[i].price / preferences[0].price);

  if(score > best_matching[0].score) { 
    best_matching[0].name = smartphones[i].name;
    best_matching[0].score = score;
  }
}

console.log(best_matching[0].name);

