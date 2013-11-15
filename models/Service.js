var db = require('../lib/db');

// Define Service Schema
var ServiceSchema = new db.Schema({
    name: {type: String, unique: true},
    lowestPrice: Number,
    socialDiscount: Number,
    referralDiscount: Number,
    billingType: String
});

var Service = db.mongoose.model('Service', ServiceSchema);

// Exports
//module.exports.service = service;
module.exports.addService = addService;

function addService(req, callback) {
    var instance = new Service();
    instance.name = req.body.name;
    instance.lowestPrice = req.body.lowestPrice;
    instance.socialDiscount = req.body.socialDiscount;
    instance.referralDiscount = req.body.referralDiscount;
    instance.billingType = req.body.billingType;
    
    instance.save(function(err) {
        if(err) {
            callback(err);
        } else {
            callback(null, instance);
        }
    });
    
} // ***END addService()