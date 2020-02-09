const express = require('express');
const router = express.Router();

const Crurch = require('../models/CrurchesModels')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  // find multiple entries
  Crurch.findAll().then((igreja) => {
    res.json({ igreja })
  });
});

// função criar nova igreja
router.post('/new', async function (req, res) {
  //res.send(req.body);
  await Crurch.create({
    endereco: req.body.endereco,
    igreja: req.body.igreja,
    responsalvel: req.body.responsavel
  }).then((igreja) => {
    res.json(igreja)
  })
})

// função deletar igreja
router.delete('/:id', async function (req, res) {
  await Crurch.destroy({
    where: {
    id: req.params.id //pega params da url
  }
  }).then((igreja) => { //se retorna 1 -> foi deletado com sucesso 
    res.json(igreja)    //se retorna 0 -> algum erro ocorreu
  })
})

module.exports = router;
