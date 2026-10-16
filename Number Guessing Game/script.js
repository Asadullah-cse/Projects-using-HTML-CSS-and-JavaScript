let inputNum = document.querySelector("#input-field");
let guessBtn = document.querySelector("#guess-btn");
let guessChecker = document.querySelector(".guess-checker");
let actualNum = Math.ceil(1+Math.random()*99);
let count = 0;

guessBtn.addEventListener("click", ()=>{
    let guessed = Number(inputNum.value.trim());
    if(inputNum.value.trim()==="" || (guessed>100 || guessed<0)) {
        alert("Please Enter the Number between 1 and 100");
        inputNum.value = "";
        return;
    }
    count++;
    if(guessed<actualNum){
        guessChecker.innerHTML = `
        <h3>Higher Number Please</h3>
        <p>Guesses: ${count}</p>
        `;
        inputNum.value = "";
    }
    else if(guessed>actualNum){
        guessChecker.innerHTML = `
        <h3>Lower Number Please</h3>
        <p>Guesses: ${count}</p>
        `;
        inputNum.value = "";
    }
    else if(guessed===actualNum){
        guessChecker.innerHTML = `
        <h3>Great! you guessed it. Its ${actualNum}</h3>
        <p>The Number of guesses you have taken are: ${count}</p>
        `;
        return;
    }
    else{
        alert("Please Enter the Number between 1 and 100");
    }

});

inputNum.addEventListener("keydown", (e)=>{
    if(e.key==="Enter"){
        guessBtn.click();
    }
});