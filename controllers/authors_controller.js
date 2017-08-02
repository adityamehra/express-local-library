var express = require('express');

var Author = require('../models/author');
var Book = require('../models/book')

exports.getAllAuthors = function(req, res, next) {
  	Author
  		.find()
		.then( authors => {
		    // res.send(authors);
		    res.render('authors', { 'authors': authors})
		})
		.catch( err => {
			console.log("Error in all allAuthors " + err);
		});
}

exports.getAuthor = function(req, res, next) {
  	Author
  		.findOne( { '_id' : req.params.id } )
		.then( author => {
		    res.send(author);  
		})
		.catch( err => {
			console.log("Error in getAuthor " + err);
		});
}

exports.getAuthorInfo = function(req, res, next) {
	let author = Author.findOne( { '_id' : req.params.id } );
  	var info = author.then( val => {
  						Book.find( { 'author':val._id } , 'author title summary' )
  							.then( results => {
  								res.send(results)
  							});
  						});
}
