const express = require('express');
const router = express.Router();

const Course = require('../models/CourseModels')
const Historico = require('../models/HistoricoModels')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  // find multiple entries
  Course.findAll().then((course) => {
    res.json({ course })
  });
});


// rotas para historico geral de todos os membros
router.get('/hist', function (req, res) {
  Historico.findAll().then((hist) => {
    res.json({ hist })
  });
});


router.get('/:id', (req, res) => {
  id = (req.params.id)
  Course.findOne({
    where: { idCursos: id }
  }).then(course => {
    res.json({ course })
  })

})

// rotas para historico do membro especifico
router.get('/hist/:idMembro', function (req, res) {
  id = (req.params.idMembro)
  console.log(id)
  Historico.findAll({
    where: { membroCad: id }
  }).then(histMembro => {
    res.json({ histMembro })
  })
});

module.exports = router;
