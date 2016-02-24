var _ = require('lodash');
var models = require('./models');
var mongoose = require('mongoose');

function createDocumentsAndInsertIntoDB(){
    //call Iten model
    var Item = models.Item;
    //define a var where will be all the products
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
    ];

    // insert documents into MakeMyChoiceDB (store all products in DB)
    for (var element in items) {
        items[element].save(function(err, element) {
            if(err) {
                return console.error(err);
            }
        });
    }    
}

//Finss all stored products of a several category and executes a callback
//in case of success
function loadItemsFromDB(categoryName, callback) {
    var Item = models.Item;
    Item.find({category: categoryName}, callback);
}

//produces an ordered list 
function getList(items) {
    var list = [];
    for(var i in items) {
        list.push({
            item : items[i],
            priority : 0
        });
    }
    return list;
}

//Find the priority of each interested product
function findPriority(value, max, min) {
    return ((value - min) * 10 / (max - min));
}

var chooseTheBest = function (category, preferences, callback) {
    loadItemsFromDB(category, function(err, items) {
        
        /*************** CALLBACK *****************/
        if(err) {
            return callback(err);
        }

        var list = getList(items);

        for(var feature in preferences) {
            var temp = {
                feature: preferences[feature],
                item: null
            };
            for(var i in list) {
                if(list[i].item.features[feature] >= temp.feature) {
                    temp.feature = list[i].item.features[feature];
                    temp.item = i;
                }
            }
            if(temp.item != null) {
                list[temp.item].priority++;
            }
        }

        _.sortBy(list, function(o){ return o.priority });
        callback(null, list);
    });
}

module.exports.chooseTheBest = chooseTheBest;