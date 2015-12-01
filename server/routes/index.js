var express = require('express');
var router = express.Router();
var Aluno = require('../models/aluno');

router.get('/', function(req, res, next) {
  var alunos = Aluno.dados
  res.render('index', { 
  	title: 'Alunos', 
  	alunos:alunos, 
  	aluno: new Aluno(),
  	mediaClasse: Aluno.mediaClasse()
  });
});

router.post('/aluno/salvar', function(req, res, next) {

  var aluno = new Aluno();
  aluno.nome = req.body.nomeAluno;
  aluno.nota1 = req.body.nota1;
  aluno.nota2 = req.body.nota2;

  if(req.body.id == ""){
  	aluno.salvar();
  }
  else{
  	aluno.id = req.body.id;
  	aluno.alterar();
  }

  res.redirect("/");
});

router.get('/aluno/excluir', function(req, res, next) {
  Aluno.excluir(req.query.id);
  res.redirect("/");
});

router.get('/aluno/editar', function(req, res, next) {
  var aluno = Aluno.buscarPorId(req.query.id);
  var alunos = Aluno.dados;
  res.render('index', { 
  	title: 'Aluno', 
  	alunos:alunos, 
  	aluno:aluno,
  	mediaClasse: Aluno.mediaClasse()
  });
});

module.exports = router;
