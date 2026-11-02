"use strict";
document.body.style.textAlign = "center";
let tasks = [];
let button = document.getElementById("add");
let task = document.getElementById("task");
let body = document.getElementById("body");
button.style.backgroundColor = "Gray";
button.addEventListener('click', addtask);
function addtask() {
    let input = task.value;
    tasks.push(input);
    render();
    tasks = [];
}
function render() {
    for (let i = 0; i < tasks.length; i++) {
        let p = document.createElement('p');
        p.textContent = tasks[i];
        body.appendChild(p);
    }
}
