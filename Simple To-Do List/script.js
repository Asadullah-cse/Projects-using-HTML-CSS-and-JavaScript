let taskAdded = document.getElementById("t1");
let btn = document.getElementById("Add");
let list = document.querySelector(".list");

btn.addEventListener('click', ()=>{
	
	let task = taskAdded.value.trim();
	if(task==="") return;

	let LI = document.createElement("li");
	LI.innerText = task;

	list.appendChild(LI);
	taskAdded.value = "";
});

taskAdded.addEventListener('keydown', (e)=>{
	if(e.key==="Enter") btn.click();
});
