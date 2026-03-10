let Head = document.getElementById("HeadCount");
        let btn1 = document.getElementById("Inc");
        let btn2 = document.getElementById("Dec");

        btn1.addEventListener('click', () => {
            let c = parseInt(Head.innerText);
            c+=1;
            Head.innerText = c;
        });
        btn2.addEventListener('click', () => {
            let c = parseInt(Head.innerText);
            c-=1;
            Head.innerText = c;
        });