var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
// var controllerMain = function(req, res, next) {
//   res.render('index', { title: 'Express' });
// };
/* GET home page. */
router.get('/', ctrlMain.index );

module.exports = router;
