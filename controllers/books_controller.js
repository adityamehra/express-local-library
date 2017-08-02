var express = require('express');

var Author = require('../models/author');
var Book = require('../models/book')

exports.getAllBooks = function(req, res, next) {
  	Book
  		.find()
  		.populate('author')
		.then( books => {
		    // res.send(books);
		    res.render('books', {'title': 'Book List', 'books':books}) 
		})
		.catch( err => {
			console.log("Error in all allAuthors " + err);
		});
}

exports.getBook = function(req, res, next) {
  	Book
  		.findOne( { '_id' : req.params.id } )
		.then( book => {
		    res.send(book);  
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


