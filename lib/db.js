var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

connect();

function connect() {
    var url = 'mongodb://iglesias:fsu!open311@paulo.mongohq.com:10040/howmuch';
	mongoose.connect(url);
}

function disconnect() {
	mongoose.disconnect;
}