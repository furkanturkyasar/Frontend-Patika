let showName = prompt("Adinizi Giriniz:")

if (showName.length > 0) {
    document.querySelector("#myName").textContent = showName
} else {
    const showError = alert("Isim girmediniz ya da yanlis girdiniz!") 
    document.querySelector("#myName").textContent = showError
}

function showTime() {
    let date = new Date()
    let hours = addZero(date.getHours())
    let minutes = addZero(date.getMinutes())
    let seconds = addZero(date.getSeconds())
    
    function addZero(firstNumber) {
        if (firstNumber < 10) {
            return "0" + firstNumber
        } else {
            return firstNumber
        }
    }

    document.querySelector(".clock").innerHTML = `${hours}: ${minutes}: ${seconds}`
}
setInterval(showTime, 1000)




