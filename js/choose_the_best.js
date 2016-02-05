var smartphones = [
    {
      name: "Iphone 6s",
      ram: 4096,
      camera: 8,
      price: 900
    },
    {
      name: "Samsung s6",
      ram: 2048,
      camera: 16,
      price: 499
    },
    {
      name: "Asus Zenfone Selfie",
      ram: 1024,
      camera: 3,
      price: 199
    }
];

var choose_the_best = function (ram, camera,  price) {

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

module.exports.chooseTheBest = choose_the_best;
