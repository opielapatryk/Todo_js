const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoAmmount = parseInt(itemCountSpan.innerText);
let uncheckedAmmount = parseInt(uncheckedCountSpan.innerText);

function newTodo() {  
  increaseTodoCount();
  increaseUncheckedCount();
  createInput();
}

function increaseTodoCount() {
  todoAmmount++;
  itemCountSpan.innerText = todoAmmount;
}

function increaseUncheckedCount(){
  uncheckedAmmount++;
  uncheckedCountSpan.innerText = uncheckedAmmount;
}

function decreaseTodoCount() {
  todoAmmount--;
  itemCountSpan.innerText = todoAmmount;
}

function decreaseUncheckedCount() {
  uncheckedAmmount--
  uncheckedCountSpan.innerText = uncheckedAmmount;
}

function createInput() {
  let inputParent = document.createElement('p');
  inputParent.style = 'width: 100%;display: flex;justify-content: space-around;'
  let input = document.createElement('input');
  let saveToDoButton = document.createElement('button');
  saveToDoButton.innerText = 'Save';
  inputParent.appendChild(input);
  inputParent.appendChild(saveToDoButton);
  list.appendChild(inputParent);
  saveToDoButton.addEventListener('click', saveValueAndAppendElementToList)
}

function saveValueAndAppendElementToList(e) {
  newTask = e.target.previousSibling.value;
  if(newTask != ""){
    e.target.parentElement.innerHTML = newTask+'<div style="display:flex;"><input type="checkbox" onclick="changeCheckedValue(this)"><button style="display:none;" onclick="deleteTask(this)">Delete</button></div>';
  }else{
    e.target.previousSibling.style = 'border: red solid;';
    e.target.previousSibling.placeholder = 'Task cannot be empty';
  }
}

function changeCheckedValue(checkbox){
  if (checkbox.nextSibling.style.display === "none") {
    checkbox.nextSibling.style.display = "block";
    decreaseUncheckedCount();
  } else {
    checkbox.nextSibling.style.display = "none";
    increaseUncheckedCount();
  }
};

function deleteTask(task){
  task.parentElement.parentElement.style.display = 'none'
  decreaseTodoCount();
}
