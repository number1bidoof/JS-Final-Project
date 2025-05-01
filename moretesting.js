// Global enviorment varribles
const outputDiv = document.getElementById("taskManager");
const taskInput = document.getElementById("taskName");
const submitBtn = document.getElementById("submitBtn");
const importantCheckbox = document.getElementById("checkedbox");
const prioritySelect = document.getElementById("dropdown");

let i = 0; // acts as count
let taskList = []; //references the tasks made

submitBtn.addEventListener("click", function createTask() {
    const name = taskInput.value.trim();
    const priority = prioritySelect.value;
    const isImportant = importantCheckbox.checked;

    if (name === "") {
        alert("Please enter a task name.");
        return;
    }

    i++;
    const newTask = { //object to store new tasks
        id: i,
        name: name,
        priority: priority,
        isCompleted: false,
        isImportant: isImportant,
        date: new Date().toLocaleString()
    };

    taskList.push(newTask);
    // Creates a div for the object (easier to style)
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.id = `task-${newTask.id}`;
    taskDiv.style.backgroundColor = isImportant ? 'red' : 'transparent';

    const taskDetails = `
        <p><strong>${newTask.name}</strong></p>
        <p>Priority: ${newTask.priority}</p>
        <p>Date: ${newTask.date}</p>
        <input type="checkbox" id="check-${newTask.id}" ${newTask.isCompleted ? 'checked' : ''}>
        <label for="check-${newTask.id}">Completed</label>
        <button id="delete-${newTask.id}">Delete</button>
    `;

    taskDiv.innerHTML = taskDetails;
    outputDiv.appendChild(taskDiv);

    function toggleComplete(taskId) {
        const task = taskList.find(t => t.id === taskId);
        if (task) {
            task.isCompleted = !task.isCompleted;
            const taskDiv = document.getElementById(`task-${taskId}`);
            taskDiv.style.textDecoration = task.isCompleted ? 'line-through' : 'none';
            console.log(JSON.stringify(task));

        }
    }

    function deleteTask(taskId) {
        taskList = taskList.filter(t => t.id !== taskId);
        const taskDiv = document.getElementById(`task-${taskId}`);
        console.log(JSON.stringify(`task-${taskId} deleted`));
        taskDiv.remove();
    }

    const checkbox = document.getElementById(`check-${newTask.id}`);
    checkbox.addEventListener("change", function() {
        toggleComplete(newTask.id);
    });

    const deleteBtn = document.getElementById(`delete-${newTask.id}`);
    deleteBtn.addEventListener("click", function() {
        deleteTask(newTask.id);
    });

    console.log(JSON.stringify(newTask));

    taskInput.value = "";
});