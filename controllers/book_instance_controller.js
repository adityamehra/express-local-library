var express = require('express')

var Author = require('../models/author');
var Book = require('../models/book');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookInstance');

exports.getAllInstances = function(req, res, next){
	BookInstance.find()
				.populate('book')
				.then( instances => {
					// res.send(instances);
					res.render('instances', {'title': 'Book-Instances', 'instances' : instances})
				})
				.catch( err => {
					console.log("Error in getAllInstances " + err);
				})
}