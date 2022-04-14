const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaTarefa(textoInput) {
    console.log(textoInput);
}

//adicionando eventos nos botoes com 'click'
btnTarefa.addEventListener('cick', function(event) {
    if (!inputTarefa.value) return;
   // console.log(inputTarefa.value); //pega o valor o intputTarega
    criaTarefa(inputTarefa.value);//
});


//cria um evento que aponta onde vc clicou
document.addEventListener('click', function(event) {
    const elemente = event.target;
    console.log(elemente)
  })

  //mostra o pai do elemento
  document.addEventListener('click', function(event) {
    const elemente = event.target;
    if (elemente.classList.contains('apagar')) {
      console.log(elemente.parentElement);
    }
  });

    //salva em JSON
    const tarefasJson = JSON.stringify(listaDeTarefas);
    console.log(tarefasJson)