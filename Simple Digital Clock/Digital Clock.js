let a;
let time;
let date;
setInterval(() => {
    a = new Date();
    time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    document.getElementById("time").innerText = time;
    date = a.toLocaleDateString();
    document.getElementById("date").innerText = date;
}, 1000);