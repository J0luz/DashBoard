const btn = document.querySelector('.btn-tarefa')
const input = document.querySelector('.input-tarefa')
const list = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li')
  return li
}

input.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!input.value) return
    criaTarefa(input.value)
    limpaInput()
  }
})

function limpaInput() {
  input.value = ''
  input.focus()
}

function btnApagar(li) {
  li.innerText += ' '
  const btnApagar = document.createElement('button')
  btnApagar.innerText = 'Apagar'

  btnApagar.setAttribute('class', 'apagar')
  btnApagar.setAttribute('title', 'apagar esta tarefa')
  li.appendChild(btnApagar)
}

function criaTarefa(textInput) {
  const li = criaLi()
  li.innerText = textInput
  list.appendChild(li)
  btnApagar(li)

  salvarTarefas()
}

btn.addEventListener('click', function (e) {
  if (!input.value) return
  criaTarefa(input.value)
  limpaInput()
})

document.addEventListener('click', function (e) {
  const el = e.target
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefas()
  }
})

function salvarTarefas() {
  const liTarefas = list.querySelectorAll('li')

  const listaDeTarefas = []

  for (let tarefa of liTarefas) {
    let tarefaText = tarefa.innerText
    tarefaText = tarefaText.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaText)
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas)
  console.log(tarefasJSON)
  localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa                                     44bw)
  }
}
addTarefasSalvas()
