document.body.style.textAlign= "center"
let tasks:string[] = []

let button = document.getElementById("add") as HTMLButtonElement;
let task = document.getElementById("task") as HTMLInputElement;
let body = document.getElementById("body") as HTMLElement;
button.style.backgroundColor = "Gray"

button.addEventListener('click', addtask)

function addtask(){
    let input = task.value;
    tasks.push(input);
    render();
    tasks = []
}

function render(){
    for (let i = 0; i < tasks.length; i++){
        let p = document.createElement('p');
        p.textContent = tasks[i]
        body.appendChild(p)
    }
}