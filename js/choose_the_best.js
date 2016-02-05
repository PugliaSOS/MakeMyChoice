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

    var preferences = {ram: ram, camera: camera, price: price};
    var best_matching = {name: "", score: 0};
    var score = 0;

    for(var i = 0; i < smartphones.length; i++) {
      score = 
        (smartphones[i].ram * preferences.ram) +
        (smartphones[i].camera * preferences.camera) + 
        (preferences.price / smartphones[i].price);
            

      if(score > best_matching.score) { 
        best_matching.name = smartphones[i].name;
        best_matching.score = score;
      }
    }
    
    return best_matching.name;
}

console.log(chooseTheBest(5, 5, 10));


