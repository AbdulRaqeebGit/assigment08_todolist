let taskInputs = document.getElementById("taskValues");
let addTasks = document.getElementById("addTasks");
let resetTasks = document.getElementById("resetTasks");
let errorMsg = document.getElementById("errorMsg");
let outputTasks = document.getElementById("output");
let allTasks = [];

function displaytask() {
  for (let i = 0; i < allTasks.length; i++) {
    let list = document.createElement("li");
    let span = document.createElement("span");
    let editButton = document.createElement("button");
    let dltButton = document.createElement("button");

    span.innerHTML = allTasks[i];
    editButton.innerText = "edit";
    dltButton.innerText = "delete";

    dltButton.addEventListener("click", function () {
      allTasks.splice(i, 1);
      list.remove();
    });

    editButton.addEventListener("click", function () {
      let edit = prompt("Enter the value you want to edit");
      allTasks[i] = edit;
      span.textContent = edit;
    });

    list.appendChild(span);
    list.appendChild(editButton);
    list.appendChild(dltButton);
    outputTasks.appendChild(list);
  }
  taskInputs.value = "";
  errorMsg.innerHTML = "";
}
function task() {
  if (taskInputs.value == "") {
    errorMsg.textContent = "invalid Tasks Pleae enter the tasks";
    return;
  }
    allTasks.push(taskInputs.value);
  taskInputs.value = "";
  outputTasks.innerHTML = "";
  displaytask();
}
function rest() {
  allTasks = [];
  outputTasks.innerHTML = "";
  errorMsg.innerHTML = "";
}
