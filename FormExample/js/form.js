let userFormDOM = document.querySelector("#userForm")
const alertDOM = document.querySelector("#alert") 
userFormDOM.addEventListener("submit", formHandler)


const ALERT = (title ,message, className = "warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event) {
    event.preventDefault()

    const USER_NAME = document.querySelector("#username")
    const PASSWORD = document.querySelector("#password")

    if(USER_NAME.value && PASSWORD.value) {
        addItem(USER_NAME.value, PASSWORD.value)
        USER_NAME.value = ""
        PASSWORD.value = ""
    } else {
        alertDOM.innerHTML = ALERT("Lutfen yeniden giris yapiniz", "Eksik ya da hatali giris yaptiniz", "danger")
    }
}

let userListDOM = document.querySelector("#item")



const addItem = (username, password) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = (`
    ${username} 
    <span class="badge bg-primary rounded-pill">${password}</span>
    `)
    liDOM.classList.add(
        "list-group-item", "d-flex", "justify-content-between", "align-items-start"
    )
    userListDOM.append(liDOM)
}