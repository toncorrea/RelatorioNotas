//função para "document.write()" (Escrever na tela);
function mostrarTela(mensagem){
  document.write(mensagem + "<br>");
}

function salvarAluno(){
  var nome  = document.getElementById("nomeAluno");
  var nota1 = document.getElementById("nota1");
  var nota2 = document.getElementById("nota2");

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


  var aluno = new Aluno();
  aluno.nome = nome.value;
  aluno.nota1 = nota1.value;
  aluno.nota2 = nota2.value;
  aluno.salvar();

  nome.value = "";
  nota1.value = "";
  nota2.value = "";
 /*
  mostrarProdutosEstoque();
  mostrarResumo();
 */
}




function mostrarProdutosEstoque(){
  var objTabela = document.getElementById("produtos");
  var html = "<tr><td>Nome</td><td>Preço</td></tr>";
  for(i=0; i< Produto.dados.length; i++){
    var p = Produto.dados[i];
    html += "<tr>";
    html += "<td>" + p.nome +  "</td>";
    html += "<td>" + p.preco +  "</td>";
    html += "</tr>";
  }
  objTabela.innerHTML = html;
}


