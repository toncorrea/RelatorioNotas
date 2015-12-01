//função para "document.write()" (Escrever na tela);
function mostrarTela(mensagem){
  document.write(mensagem + "<br>");
}

function salvarAluno(){
  var nome  = document.getElementById("nomeAluno");
  var nota1 = document.getElementById("nota1");
  var nota2 = document.getElementById("nota2");
  var idAluno = document.getElementById("idAluno");

  if(nome.value == ""){
    alert("Preencha o nome do Aluno");
    nome.focus();
    return;
  }

  if(nota1.value == ""){
    alert("Preencha o valor da primeira nota do aluno");
    nota1.focus();
    return;
  }

  if(nota2.value == ""){
    alert("Preencha o valor da segunda nota do aluno");
    nota2.focus();
    return;
  }

  if (idAluno.value == ""){
    var aluno = new Aluno();
  }
  else{
    var aluno = Aluno.buscarPorId(parseInt(idAluno.value));
  }
  
  aluno.nome = nome.value;
  aluno.nota1 = nota1.value;
  aluno.nota2 = nota2.value;
  
  if (idAluno.value == ""){
    aluno.salvar();
  } else{
    aluno.alterar();
  }

  nome.value = "";
  nota1.value = "";
  nota2.value = "";
  idAluno.value = "";

  mostrarAlunos();
  mostrarResumo();
}




function mostrarAlunos(){
  var objTabela = document.getElementById("alunos");
  var html = "<tr><td>Nome</td><td>Nota1</td><td>Nota2</td><td>Media</td><td>Situação</td><td>Alterar</td><td>Excluir</td></tr>";
  for(i=0; i< Aluno.dados.length; i++){
    var a = Aluno.dados[i];
    html += "<tr>";
    html += "<td>" + a.nome       +  "</td>";
    html += "<td>" + a.nota1      +  "</td>";
    html += "<td>" + a.nota2      +  "</td>";
    html += "<td>" + a.mediaAluno +  "</td>";
    html += "<td>" + a.situacao   +  "</td>";
    html += "<td> <a href='javascript:buscarAluno("+a.id + ")'> alterar </a> </td>";
    html += "<td> <a href='javascript:excluirAluno("+a.id + ")'> excluir </a> </td>";
    html += "</tr>";
  }
  objTabela.innerHTML = html;
}

function mostrarResumo(){
  document.getElementById("mediaClasse").innerHTML = Aluno.mediaClasse();
  document.getElementById("qtdAprovados").innerHTML = Aluno.qtdAprovados();
  document.getElementById("qtdAlunosEmExame").innerHTML = Aluno.qtdAlunosEmExame();
  document.getElementById("qtdAlunosReprovados").innerHTML = Aluno.qtdAlunosReprovados();
}

function buscarAluno(id){
  var c = Aluno.buscarPorId(id);
  var nome  = document.getElementById("nomeAluno");
  var nota1 = document.getElementById("nota1");
  var nota2 = document.getElementById("nota2");
  var idAluno = document.getElementById("idAluno");
  nome.value = c.nome;
  nota1.value = c.nota1;
  nota2.value = c.nota2;
  idAluno.value = c.id;
}

function excluirAluno(id){
  if (confirm("Deseja realmente excluir?")){
    Aluno.excluir(id);
    mostrarAlunos();
    mostrarResumo();
  }
}
