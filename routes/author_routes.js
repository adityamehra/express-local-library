var express = require('express');
var router = express.Router();

var Author = require('../models/author')
var authors_controller = require('../controllers/authors_controller');

/* GET users listing. */
router.get('/', authors_controller.getAllAuthors);
// router.get('/:id', authors_controller.getAuthor);
// router.get('/info/:id', authors_controller.getAuthorInfo);

module.exports = router;
