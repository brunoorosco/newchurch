var express = require('express');
const SessionController = require('../controllers/SessionController')
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.post('/', SessionController.store);

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
});

module.exports = router;
