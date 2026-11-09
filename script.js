function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    deleteButton.onclick = function(event) {
        event.stopPropagation();
        li.remove();
    };

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}