var express = require('express');

var Author = require('../models/author');
var Book = require('../models/book')
var Genre = require('../models/genre')
var Book = require('../models/bookInstance')

exports.getAllGenres = function(req, res, next) {
  	Genre
  		.find()
		.then( genres => {
		    // res.send(genres);
		    res.render('genres', {'genres':genres})
		})
		.catch( err => {
			console.log("Error in all allAuthors " + err);
		});
}

exports.getGenre = function(req, res, next) {
  	Genre
  		.findOne( { '_id' : req.params.id } )
		.then( genre => {
		    res.send(genre);  
		})
		.catch( err => {
			console.log("Error in all allAuthors " + err);
		});
}

// exports.getAuthorInfo = function(req, res, next) {
// 	let author = Author.findOne( { '_id' : req.params.id } );
//   	var info = author.then( val => {
//   						Book.find( { 'author':val._id } , 'author title summary' )
//   							.then( results => {
//   								res.send(results)
//   							});
//   						});
// }


