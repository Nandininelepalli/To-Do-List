function addTask() {
    var taskInput = document.getElementById("taskinput");
    var taskList = document.getElementById("tasklist");

    if (taskInput.value.trim() === "") {
        alert("Please enter the task");
        return;
    }

    var listItems = document.createElement('li');
    listItems.innerText = taskInput.value;
    taskList.appendChild(listItems);

    var buttonContainer = document.createElement('div');
    listItems.appendChild(buttonContainer);
    buttonContainer.className = "task-button";

    var deleteButton = document.createElement('button');
    buttonContainer.appendChild(deleteButton);
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(listItems);
    };

    var completeButton = document.createElement('button');
    buttonContainer.appendChild(completeButton);
    completeButton.innerText = "Complete";
    completeButton.onclick = function () {
        listItems.classList.toggle('Completed');
    };

    // Clear the input field after adding the task
    taskInput.value = "";
}