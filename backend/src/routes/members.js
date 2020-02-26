const express = require('express');
const router = express.Router();

const Users = require('../models/MembersModels')

// define the home page route
router.get('/', function (req, res, next) {
  // find multiple entries
  id = (req.params.id)
  console.log(id)

  Users.findAll().then(user => {
    res.json({ user })
  })

});

router.get('/:id', (req, res) => {
  // find multiple entries

  // Users.findById(req.params.id).then(user => {
  //   res.json({ user })
  // })
  
  Users.findOne({
    where: { idmembros: '2' }
  }).then(user => {
    res.json({ user })
  })

})

router.post('/new', async function (req, res) {
  //res.send(req.body);
  await Users.create({
    endereco: req.body.endereco,
    igreja: req.body.igreja,
    cargo: req.body.cargo,
    nasc: req.body.nasc,
    supervisao: req.body.supervisao,
    email: req.body.email,
    telefone: req.body.telefone,
    nome: req.body.nome,

  }).then((member) => {
    res.json(member)
  })
})

// função deletar igreja
router.delete('/:id', async function (req, res) {
  await Users.destroy({
    where: {
      id: req.params.id //pega params da url
    }
  }).then((member) => { //se retorna 1 -> foi deletado com sucesso 
    res.json(member)    //se retorna 0 -> algum erro ocorreu
  })
})

module.exports = router;
