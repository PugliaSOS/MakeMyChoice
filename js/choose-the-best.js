var _ = require('lodash');

var smartphones = [
    {
      name: "Iphone 6s",
      ram: 4096,
      camera: 8,
      price: 900,
      priority: 0
    },
    {
      name: "Samsung s6",
      ram: 2048,
      camera: 16,
      price: 499,
      priority: 0
    },
    {
      name: "Asus Zenfone Selfie",
      ram: 1024,
      camera: 98,
      price: 199,
      priority: 0
    }
];


function findPriority(value, max, min) {
    if(value === max) return 10;

    else if(value === min) return 0;

    return ((value - min) * 10 / (max - min));
}

var chooseTheBest = function (ram, camera,  price) {

    var maxRam = _.maxBy(smartphones, function(o) { return o.ram; });
    var minRam = _.minBy(smartphones, function(o) { return o.ram;});

    var maxCamera = _.maxBy(smartphones, function(o) { return o.camera; });
    var minCamera = _.minBy(smartphones, function(o) { return o.camera;});
    
    for(var i = 0; i < smartphones.length; i++) {   
        
        smartphones[i].priority =    
            ram * findPriority(
                smartphones[i].ram, 
                maxRam.ram, 
                minRam.ram
            );      
        
        smartphones[i].priority += 
            (camera * findPriority(
                   smartphones[i].camera,
                   maxCamera.camera,
                   minCamera.camera
                )
            );
        
        smartphones[i].priority += price / smartphones[i].price;
        
    }
    
    return  _.sortBy(smartphones, function(o) { return o.priority; }).reverse();
};

module.exports.chooseTheBest = chooseTheBest;
