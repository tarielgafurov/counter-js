const plusBtn = document.getElementById("plusBtn")
const count = document.getElementById("count")
const minusBtn = document.getElementById("minusBtn")


let counter = 0

function plusHandler () {
    counter++
    count.innerHTML = counter
}

function minusHandler() {
    counter--
    count.innerHTML = counter
}

plusBtn.addEventListener("click", plusHandler)
minusBtn.addEventListener("click", minusHandler)