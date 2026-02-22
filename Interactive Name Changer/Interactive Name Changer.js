let userName = document.getElementById("UserName");
let name = document.getElementById("Name");
document.getElementById("btn").addEventListener('click', () => {
    if (name.value.trim() === "") {
        alert("Please write your name");
    }
    else if (confirm("Do you really want to change the name?")) {
        userName.innerText = name.value;
    }
});
window.addEventListener('load', () => {
    name.value = null;
});