function addTask() {
    var newTaskInput = document.getElementById("taskInput");
    var taskText = newTaskInput.value;

    if (taskText !== "") {
        var newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(this);
        };

        newTaskItem.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(newTaskItem);

        newTaskInput.value = ""; 
    }
}

function deleteTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
}