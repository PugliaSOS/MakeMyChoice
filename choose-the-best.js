var _ = require('lodash');
var models = require('./models.js')
var mongoose = require('mongoose');
var connection = require('./connect.js')


infos = connection.getInformations();
mongoose.connect(infos[0], infos[1]);

var db = mongoose.connection;

function createDocumentsAndInsertIntoDB(){
    var Item = models.Item;

    var items = [
        iphone6s  = new Item({
            title: 'Apple iPhone 6S',
            category: ['Smartphones'],
            features: {
                ram: 2048,
                camera: 12,
                price: 779
            }
        }),

        galaxyS6 = new Item({
            title: 'Samsung galaxy S6',
            category: ['Smartphones'],
            features: {    
                ram: 3072,
                camera: 16,
                price: 709
            }
        }),

        zenfoneSelfie = new Item({
            title: 'Asus ZenFone Selfie',
            category: ['Smartphones'],
            features: {
                ram: 2048,
                camera: 13,
                price: 299
            }
        }),

        fiat = new Item({
            title: 'Fiat 500',
            category: ['Cars'],
            features: {
                color: 'yellow',
                engine: 100,
                power: 400,
                price: 100
            }
        }),

        mini = new Item({
            tile: 'Mini',
            category: ['Cars'],
            features: {
                color: 'red',
                engine: 200,
                power: 230,
                price: 220
            }
        }),

        mercedes = new Item({
            name: 'Mercedes',
            category: ['Cars'],
            features: {
                color: 'red',
                engine: 300,
                power: 520,
                price: 200
            }
        })
    ]

    // insert documents into MakeMyChoiceDB
    for (var element in items) {
        items[element].save(function(err, element) {
            if(err) {
                return console.error(err);
            }
        });
    }    
}

function loadItemsFromDB(categoryName, callback) {
    var Item = models.Item;
    var items;
    Item.find({category: categoryName}, function(err, res){
        if(err) return console.error(err);
        items = _.clone(res, true); // no clone
        console.log(items);
    callback(err, items)});
}

function loadList (list, items) {
    for(var element in items) {
        list.push(new Object());
        list[element].item = items[element];
        list[element].priority = 0;
    }
}

function findPriority(value, max, min) {
    return ((value - min) * 10 / (max - min));
}

var chooseTheBest = function (category, preferences) {
  
  var list = [];
  loadItemsFromDB(category, function(err, items){

      loadList(list, items);  

    	var arr = items[category];
    	
    	for(var j in preferences) {
        //if( j !== "price") {
    	    var max = _.maxBy(list, function(o) { return o[j]; });
    		  var min = _.minBy(list, function(o) { return o[j]; });
        //}
        for(var i = 0; i < arr.length; i++) {
          //if(j === "price") 
          //  arr[i].priority += preferences[j] / arr[i][j];
        
          //else 
            arr[i].priority += 
              preferences[j] * 
              findPriority(arr[i][j], max[j], min[j] )
            ;
        }  

    	}
  });
	
  return _.sortBy(arr, function(o) { return o.priority; }).reverse();

}

db.on('connected', function () {  
    //createDocumentsAndInsertIntoDB();
    loadItemsFromDB('Smartphones');
    //chooseTheBest('Smartphones', {ram: 2048, camera: 8, price: 200}));
});

//module.exports.chooseTheBest = chooseTheBest;