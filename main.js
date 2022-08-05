let zTaskName = document.querySelector("#task")
let add = document.querySelector("#add")
let zMainContainer = document.querySelector(".added") 


if (window.localStorage.getItem("Tasks")) {
    zMainContainer.innerHTML = window.localStorage.getItem("Tasks")
}

        // Add Button
add.addEventListener("click", (ev) => {
    if (zTaskName.value != "") {
        let newBox = document.createElement("div")
        newBox.className = "box"
        let zTask = document.createTextNode(zTaskName.value)
        let zTaskContainer = document.createElement("div")
        zTaskContainer.appendChild(zTask)
        newBox.appendChild(zTaskContainer)
        let deleteBtn = document.createElement("button")
        deleteBtn.append("Delete")
        deleteBtn.className = "delete"
        newBox.appendChild(deleteBtn)
        zMainContainer.appendChild(newBox);
        zTaskName.value = ""
        window.localStorage.setItem("Tasks", zMainContainer.innerHTML)

        // Delete btn
        deleteBtn.onclick = (e) => {
            deleteBtn.parentElement.remove()
            window.localStorage.setItem("Tasks", zMainContainer.innerHTML)
        }
    }
})


if (window.localStorage.getItem("Tasks")) {
    zMainContainer.innerHTML = window.localStorage.getItem("Tasks")
    let deletebtn = document.querySelectorAll(".delete")
    deletebtn.forEach((e) => {
        e.onclick = (ev) => {
            e.parentElement.remove()
            window.localStorage.setItem("Tasks", zMainContainer.innerHTML)
        }
    })
}


