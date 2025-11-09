const input = document.getElementById("task-input");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("task-list");

addbtn.addEventListener("click", addTask);

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";

    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";

    li.appendChild(editbtn);
    li.appendChild(delbtn);
    list.appendChild(li);
    input.value = "";

    editbtn.addEventListener("click", () => {
        const newText = prompt("Edit task:", li.firstChild.textContent);
        if (newText && newText.trim() !== "") {
            li.firstChild.textContent = newText.trim();
        }
    });
    delbtn.addEventListener("click", () =>{
        li.remove();
    });
}

input.addEventListener("keydown", (e) =>{
    if(e.key === "Enter") addTask();
});