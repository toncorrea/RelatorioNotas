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
    this.id = (Classe.dados.length + 1)
    this.mediaAluno = (this.nota1 + this.nota2) / 2;
    if (this.mediaAluno >= 7){
    	this.situacao = "Aprovado"
    } else if (this.mediaAluno >= 5 && this.mediaAluno < 7){
    	      this.situacao = "Exame"
    		} else {
    	      this.situacao = "Reprovado"
    		}
    Classe.dados.push(this);
  }
}

Classe.dados [];

Aluno.mediaClasse = function(){
  var somaMediaAlunos = 0;
  var qtdAlunos = 0;
  for(i=0; i< Classe.dados.length; i++){
    var c = Classe.dados[i];
    somaMediaAlunos += parseFloat(c.mediaAluno);
  }

  var mediaClasse = somaMediaAlunos / Classe.dados.length;
  return mediaClasse;
}

Aluno.qtdAprovados = function(){
  var qtdAprovados = 0;
  for(i=0; i< Classe.dados.length; i++){
  	if (this.situacao == "aprovado"){
  		qtdAprovados++;
  	}
  }

  return qtdAprovados;
}

Aluno.qtdAlunosEmExame = function(){
  var qtdAlunosEmExame = 0;
  for(i=0; i< Classe.dados.length; i++){
  	if (this.situacao == "exame"){
  		qtdAlunosEmExame++;
  	}
  }

  return qtdAlunosEmExame;
}

Aluno.qtdAlunosReprovados = function(){
  var qtdAlunosReprovados = 0;
  for(i=0; i< Classe.dados.length; i++){
  	if (this.situacao == "reprovado"){
  		qtdAlunosReprovados++;
  	}
  }

  return qtdAlunosReprovados;
}
