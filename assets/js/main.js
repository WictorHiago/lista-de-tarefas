const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');//cria <li> no html
  return li;//esta nao é a mesma da funcao abaixo
}

inputTarefa.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {// é o numero do [Enter]
    if (!inputTarefa.value) return;//verifica se foi inserido texto
    criaTarefa(inputTarefa.value);//cria tarefa com valor do input
  }
});

function limpaInput() {
  inputTarefa.value = '';//limpa o input depois de criar uma tarefa
  inputTarefa.focus();//volta o foco para o input
}

function criaBotaoApagar(li) {//li diz a onde deve criar o botao
  li.innerText += ' '; // da um espaço dentro do li: <li>texto </li>
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';//coloca o texto 'Apagar' dentro do botao
  botaoApagar.setAttribute('class', 'apagar')//cria uma class para o botao
  
  li.appendChild(botaoApagar);//appendChild cria o <button> dentro da li
}

function criaTarefa(textoIntput) {//chama a funcao de criar <li>
  const li = criaLi();//esta const li só recebe criaLi aqui dentro
  li.innerText = textoIntput;//inseri o texto do input dentro da li no html
  tarefas.appendChild(li)//cria uma nova <li>texto inserido aqui</li> no html
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function(event) {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value)//cria tarefa com valor no input
});

document.addEventListener('click', function(event) {
  const elemento = event.target;//aponta o target do elemento
  if (elemento.classList.contains('apagar')) {//se esse botao contem a classe apagar
    elemento.parentElement.remove();//remove o elemento se conter o 'apagar'
    salvarTarefas();//apaga as tarefas no LocalStorage
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');//salvas as <li> na const liTarefas
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '')//remove o texto 'Apagar'
    listaDeTarefas.push(tarefaTexto);//inseri a tarefa dentro do array listaDeTarefas[]
  }
  //salva em JSON
  //(JSON.stringfy)para salvar em json devemos converter do formato string para json como feito abaixo
  const tarefasJson = JSON.stringify(listaDeTarefas);
  //salva o JSON no localStorage
  localStorage.setItem('tarefas', tarefasJson);
}

function adicionandoTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  //(JSON.parse)aqui convertemos o json para o javascript no formato string novamente como feito abaixo
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionandoTarefasSalvas();