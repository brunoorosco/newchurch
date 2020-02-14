const express = require('express');
const router = express.Router();

const Cem = require('../models/CemsModels')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  // find multiple entries
  Cem.findAll().then((cem) =>{
    res.json({cem})
  });
});
// define the about route
router.get('/about', function (req, res) {
  res.send('');
});

module.exports = router;
