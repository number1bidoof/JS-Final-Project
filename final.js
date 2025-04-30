const outputDiv = document.getElementById("taskManager")
let MyTask = document.createElement("taskName")
console.log(MyTask)
let MySubmitBtn = document.getElementById("submitBtn")
let Checkedbox = document.getElementById("checkedbox")
let Importance = document.getElementById("list")
//console.log(Importance.ariaValueText)
let i = 0
let taskList = []
MySubmitBtn.addEventListener("click",function createTask(Name,priority,Completiton,Importance) {
    i++
    let newTask = {
        id:i,
        name:Name,
        priority:priority,
        isCompleted:Completiton,
        isImportant:Importance,
        date: new Date,
    }
    taskList.push(newTask)
    console.log(JSON.stringify(newTask))
})
outputDiv.innerHTML += 