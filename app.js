var mongoose = require('mongoose');
var config = require('./config');
//var models = require('./models');
//var chooseTheBest = require('./choose-the-best');
require('./api'); //it refers to index.js

//Connect to DB using data setted in connect.js(uri, user, pass)
mongoose.connect(config.mongo.host);

/*createDocumentsAndInsertIntoDB();

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
            title: 'Mini',
            category: ['Cars'],
            features: {
                color: 'red',
                engine: 200,
                power: 230,
                price: 220
            }
        }),

        mercedes = new Item({
            title: 'Mercedes',
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
*/