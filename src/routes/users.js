const express = require('express');
const router = express.Router();


const Users = require('../models/MembersModels')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  // find multiple entries
  Users.findAll().then(user => {
    res.json({user})
  })
 
});
// define the about route
router.get('/about', function (req, res) {
  res.send('');
});

module.exports = router;
