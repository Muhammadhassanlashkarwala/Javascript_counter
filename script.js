let value = 0
function aDDing() {
    value++
    let Plus = document.getElementById("title").innerHTML = value
    console.log(Plus);
}

function rEset() {
    let reset = document.getElementById("title").innerHTML = "0"
    console.log(reset);
}

function sUbtracting() {
    value--
    let subtract = document.getElementById("title").innerHTML = value
    console.log(subtract);
}