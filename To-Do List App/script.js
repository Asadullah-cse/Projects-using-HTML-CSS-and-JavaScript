let input = document.querySelector("#input");
let addBtn = document.querySelector("#add-btn");
let list = document.querySelector("#list");

// get the input value and add it to the list
addBtn.addEventListener("click", () => {
    let task = input.value.trim();
    if(task==="") return;

    // create Elements one by one
    let createdElem = document.createElement("li");
    let textSpan = document.createElement("span");
    let checkbox = document.createElement("input");
    let editBtn = document.createElement("button");
    let delBtn = document.createElement("button");

    // set the types, styles and contents of the elements
    checkbox.type = "checkbox";
    textSpan.textContent = task;
    textSpan.style.margin = "0 10px";
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    delBtn.innerText = "Delete";
    delBtn.classList.add("del-btn");

    // append them to their parent
    createdElem.appendChild(checkbox);
    createdElem.appendChild(textSpan);
    createdElem.appendChild(editBtn);
    createdElem.appendChild(delBtn);
    list.appendChild(createdElem);
    input.value = "";
    
    // add event listeners to the childs
    checkbox.addEventListener("change", ()=>{
        if(textSpan.style.textDecoration === "line-through"){
            textSpan.style.textDecoration = "none";
        }else{
            textSpan.style.textDecoration = "line-through";
        }
    });

    editBtn.addEventListener("click", ()=>{
        let edited = prompt("Edit the value", textSpan.textContent);
        if(edited===null || edited===""){
            edited = textSpan.textContent;
        }else{
            textSpan.textContent = edited;
        }
    });

    delBtn.addEventListener("click", ()=>{
        createdElem.remove();
    });
});

input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter") addBtn.click();
})