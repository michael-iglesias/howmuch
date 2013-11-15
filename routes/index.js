var Service = require('../models/Service.js');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.create = function(req, res) {
    res.render('create', {title: 'Create New Service'});
};

exports.processCreation = function(req, res) {
    Service.addService(req, function(err, service) {
        if(err) throw err;
        res.redirect('/service');
    });
};