var _ = require('lodash');

var db = {
	smartphones:[
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
],
cars:[
  {
	  name: "fiat 500",
    color: "yellow", 
	  engine: 100,
    power: 400,
    price: 100,
    priority: 0
  },
  {
    name: "mini",
    color: "red",
    engine: 200,
    power: 230,
    price: 220,
    priority: 0
  },
  {
    name: "mercedes",
    color: "red",
    engine: 300,
    power: 520,
    price: 200,
    priority: 0
  }
]
};


function findPriority(value, max, min) {
    if(value === max) return 10;

    else if(value === min) return 0;

    return ((value - min) * 10 / (max - min));
}


var chooseTheBest = function (category, preferences) {
    
	var arr = db[category];
	
	for(var j in preferences) {
    if( j !== "price") {
	    var max = _.maxBy(arr, function(o) { return o[j]; });
		  var min = _.minBy(arr, function(o) { return o[j]; });
    }
    for(var i = 0; i < arr.length; i++) {
      if(j === "price") 
        arr[i].priority += preferences[j] / arr[i][j];
    
      else 
        arr[i].priority += 
          preferences[j] * 
          findPriority(arr[i][j], max[j], min[j] )
        ;
    }  

	}
	
  return _.sortBy(arr, function(o) { return o.priority; }).reverse();

}

module.exports.chooseTheBest = chooseTheBest;
