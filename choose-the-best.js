var _ = require('lodash');
var models = require('./models.js')
var mongoose = require('mongoose');
var connection = require('./connect.js')


var infos = connection.getInformations();
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
    Item.find({category: categoryName}, callback);
}

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

function findPriority(value, max, min) {
    return ((value - min) * 10 / (max - min));
}

var chooseTheBest = function (category, preferences, callback) {
    loadItemsFromDB(category, function(err, items){
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

db.on('connected', function () {  
    createDocumentsAndInsertIntoDB();
    chooseTheBest('Smartphones', {ram: 2048, camera: 8, price: 200});
});

module.exports.chooseTheBest = chooseTheBest;