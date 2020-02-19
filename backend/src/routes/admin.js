var express = require('express');
const SessionController = require('../controllers/SessionController')
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', SessionController.store);

// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
