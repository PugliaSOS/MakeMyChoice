"use strict";

var smartphones = [
    {
      name: "Iphone 6s",
      ram: 2,
      camera: 8,
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
      ram: 2,
      camera: 3,
      price: 199
    }
];

function chooseTheBest(ram, camera,  price) {

    var preferences = [{ram: ram, camera: camera, price: price}];
    var best_matching = [{name: "", score: 0}];
    var score = 0;

    for(var i = 0; i < smartphones.length; i++){
      score = 
        (smartphones[i].ram * preferences[0].ram) +
        (smartphones[i].camera * preferences[0].camera) + 
        (preferences[0].price / smartphones[i].price);
      
      score = Math.abs(score);      

      if(score > best_matching[0].score) { 
        best_matching[0].name = smartphones[i].name;
        best_matching[0].score = score;
      }
    }
    
    return best_matching[0].name;
}

console.log(chooseTheBest(5, 5, 10));


