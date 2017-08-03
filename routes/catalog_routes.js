var express = require('express');
var router = express.Router();

var Author = require('../models/author')
var authors_controller = require('../controllers/authors_controller');
var books_controller = require('../controllers/books_controller');
var genre_controller = require('../controllers/genre_controller');
var book_instance_controller = require('../controllers/book_instance_controller')

/* GET routes for author listings. */
router.get('/authors', authors_controller.getAllAuthors);
router.get('/author/:id', authors_controller.getAuthor);
router.get('/author/info/:id', authors_controller.getAuthorInfo);

router.get('/books', books_controller.getAllBooks);
router.get('/book/:id', books_controller.getBook);
// router.get('/book/info/:id', authors_controller.getBookInfo);

router.get('/genres', genre_controller.getAllGenres);
router.get('/genres/:id', genre_controller.getGenre);
// router.get('/genres/info/:id', genre_controller.getAllGenreInfo);

router.get('/bookinstances', book_instance_controller.getAllInstances);

module.exports = router;