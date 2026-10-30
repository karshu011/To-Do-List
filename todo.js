const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
addBtn.addEventListener("click", function () {
    const task = input.value.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "saveButton";
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
    saveButton.addEventListener("click", function () {
        alert("Task saved successfully!");
    });
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(saveButton);
    todoList.appendChild(li);
    input.value = "";
    input.focus();
});