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