// Save button.


const saveButton = document.querySelector(".Save-Button");
const toDoList = document.querySelector(".toDo-List");
let textTodo = document.querySelector(".text-ToDo")
let itemId = 0

saveButton.addEventListener("click", handleSaveToDos);

textTodo.addEventListener("keydown", (event)=> {
  if(event.key === "Enter"){
    event.preventDefault();
  }
})

function handleSaveToDos(event) {
  event.preventDefault();
  if (textTodo.value.trim()) {
    const toDo = document.createElement("li");
    toDo.className = "item-list"
    toDo.id = itemId++
    toDo.innerHTML = textTodo.value;
    toDoList.appendChild(toDo);   
    toDo.addEventListener("click", ()=> handleDeleteItem(toDo))
  } else {
    alert("Este campo es requerido");
  } 
  textTodo.value = ""
}


 const handleDeleteItem = (toDo) => {
  toDoList.removeChild(toDo)
 } 

// Notes Bloc.

