let value = 0
function aDDing() {
    value++
    let Plus = document.getElementById("increment").innerText = value
    console.log(Plus);
}

function rEset() {
    let reset = document.getElementById("reset").innerText = "0"
    console.log(reset);
}

function sUbtracting() {
    value--
    let subtract = document.getElementById("decrement").innerText = value
    console.log(subtract);
}