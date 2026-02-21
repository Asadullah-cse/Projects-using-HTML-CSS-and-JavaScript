let Ans = document.getElementById("Result");
let a,b;
function Add(f1,f2){
    a=parseFloat(f1);
    b=parseFloat(f2);
    Ans.innerText = a+b;
}

function Subtract(f1,f2){
    a=parseFloat(f1);
    b=parseFloat(f2);
    Ans.innerText = a-b;
}

function Multiply(f1,f2){
    a=parseFloat(f1);
    b=parseFloat(f2);
    Ans.innerText = a*b;
}

function Divide(f1,f2){
    a=parseFloat(f1);
    b=parseFloat(f2);
    Ans.innerText = a/b;
}

function Reset(){
    document.getElementById('n1').value = null;
    document.getElementById('n2').value = null;
    Ans.innerText = "0";
}