const outputDiv = document.getElementById("taskManager")
let MyTask = document.createElement("taskName")
let MySubmitBtn = document.getElementById("submitBtn")
let Checkedbox = document.getElementById("checkedbox")
let Importance = document.getElementById("list")
let i = 0
let taskList = []
function taskCreater(b,c,x,y,z) {
    i++
    let newTask = {
        id:i,
        name:this.b,
        priority:this.c,
        isCompleted:this.x,
        isImportant:this.y,
        date:this.z,
    }
    //newTask()
    console.log(newTask)
}
taskCreater(1,2,3,4,5)
taskCreater(1,2,3,4,5)