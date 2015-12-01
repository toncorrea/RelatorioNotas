//Objetos, metodos e atributos;
var Aluno = function(){
  //atributos públicos;
  this.id;
  this.nome;
  this.nota1;
  this.nota2;
  this.mediaAluno;
  this.situacao;

  // metodo publico
  this.salvar = function(){
    //criando id automático
    this.id = (Aluno.dados.length + 1);
    this.mediaSituacao();
    Aluno.dados.push(this);
  }

  this.excluir = function () {
    Aluno.excluir(this.id);
  }

  this.mediaSituacao = function(){
    this.mediaAluno = (parseFloat(this.nota1) + parseFloat(this.nota2)) / 2;
    if (this.mediaAluno >= 7){
      this.situacao = "Aprovado"
    } else if (this.mediaAluno >= 5 && this.mediaAluno < 7){
      this.situacao = "Exame"
    } else {
      this.situacao = "Reprovado"
    }
  }

  this.alterar = function (){
    var c = Aluno.buscarPorId(this.id)
    c.nome = this.nome;
    c.nota1 = this.nota1
    c.nota2 = this.nota2
    this.mediaSituacao();
  }
}

Aluno.dados = [];

Aluno.mediaClasse = function(){
  var somaMediaAlunos = 0;
  for(i=0; i< Aluno.dados.length; i++){
    var c = Aluno.dados[i];
    somaMediaAlunos += parseFloat(c.mediaAluno);
  }

  var mediaClasse = somaMediaAlunos / Aluno.dados.length;
  return mediaClasse;
}

Aluno.qtdAprovados = function(){
  var qtdAprovados = 0;
  for(i=0; i< Aluno.dados.length; i++){
    var c = Aluno.dados[i];
    if (c.situacao == "Aprovado"){
      qtdAprovados++;
    }
  }

  return qtdAprovados;
}

Aluno.qtdAlunosEmExame = function(){
  var qtdAlunosEmExame = 0;
  for(i=0; i< Aluno.dados.length; i++){
    var c = Aluno.dados[i];
    if (c.situacao == "Exame"){
      qtdAlunosEmExame++;
    }
  }

  return qtdAlunosEmExame;
}

Aluno.qtdAlunosReprovados = function(){
  var qtdAlunosReprovados = 0;
  for(i=0; i< Aluno.dados.length; i++){
    var c = Aluno.dados[i];
    if (c.situacao == "Reprovado"){
      qtdAlunosReprovados++;
    }
  }

  return qtdAlunosReprovados;
}

Aluno.excluir = function(id){
  Aluno.dados.pop(Aluno.buscarPorId(id));
}


Aluno.buscarPorId = function(id){
  for(i=0; i< Aluno.dados.length; i++){
    var c = Aluno.dados[i];
    if (c.id == id){
      return c;
    }
  }
}

module.exports = Aluno;
