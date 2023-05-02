// Save button.

const saveButton = document.querySelector(".Save-Button");
const toDoList = document.querySelector(".toDo-List");

saveButton.addEventListener("click", handleSaveToDos);
function handleSaveToDos() {
  const textToDo = document.querySelector(".text-ToDo").value;
  if (textToDo) {
    const toDo = document.createElement("li");
    toDo.innerHTML = textToDo;
    toDoList.appendChild(toDo);
  } else {
    alert("Este campo es requerido");
  } 
}

// Notes Bloc.

