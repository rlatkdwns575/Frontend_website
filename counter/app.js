let countDisplay = document.querySelector("#count")
let decrease5Btn = document.querySelector("#decrease5Btn")
let decreaseBtn = document.querySelector("#decreaseBtn")
let resetBtn = document.querySelector("#resetBtn")
let increaseBtn = document.querySelector("#increaseBtn")
let increase5Btn = document.querySelector("#increase5Btn")

let count = 0

function updateDisplay() {
    countDisplay.textContent = count

    if (count > 0) {
        countDisplay.style.color = "#2ecc71"
    } else if (count < 0) {
        countDisplay.style.color = "#e74c3c"
    } else {
        countDisplay.style.color = "#333"
    }
}

function maxmin() {
    countDisplay.textContent = count
    if (count > 50) {
        count = 50
        countDisplay.textContent = count
        alert("최대값은 50입니다.")
    } else if (count < -50) {
        count = -50
        countDisplay.textContent = count
        alert("최소값은 -50입니다.")
    }
}

increase5Btn.addEventListener("click", function() {
    count = count + 5
    updateDisplay()
    maxmin()
})

increaseBtn.addEventListener("click", function() {
    count = count + 1
    updateDisplay()
    maxmin()
})

decrease5Btn.addEventListener("click", function() {
    count = count - 5
    updateDisplay()
    maxmin()
})

decreaseBtn.addEventListener("click", function() {
    count = count - 1
    updateDisplay()
    maxmin()
})

resetBtn.addEventListener("click", function() {
    count = 0
    updateDisplay()
    alert("카운터가 초기화되었습니다.")
})