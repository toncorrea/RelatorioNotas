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
    this.mediaAluno = (parseFloat(this.nota1) + parseFloat(this.nota2)) / 2;
      debugger

    if (this.mediaAluno >= 7){
    	this.situacao = "Aprovado"
    } else if (this.mediaAluno >= 5 && this.mediaAluno < 7){
    	      this.situacao = "Exame"
    		} else {
    	      this.situacao = "Reprovado"
    		}
    Aluno.dados.push(this);
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
