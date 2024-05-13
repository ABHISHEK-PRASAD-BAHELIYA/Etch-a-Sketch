let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", () => {
    createBoard(16);

    document.querySelector("body").addEventListener("click", (event) => {
        if(event.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click) {
                draw.innerHTML = "Now you can Draw";
            } else {
                draw.innerHTML = "You're Not Allowed To Draw"
            }
        }
    })

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener("click", () => {
        let size = getSize();
        createBoard(size);
    });
});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let noOfDivs = size * size;

    for(let i=0; i<noOfDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    };
};

function getSize() {
    let inp = prompt("What will be the size of Board?");
    let msg = document.querySelector('#msg');

    if(inp == "") {
        msg.style.color = "red";
        msg.innerHTML = "Please provide a number.";
    } else if(inp<0 || inp>100){
        msg.style.backgroundColor = "black";
        msg.style.color = "yellow";
        msg.innerHTML = "Please provide a number between 1 & 100";
    } else {
        msg.style.color = "green";
        msg.innerHTML = "Now You Play :) ";
        return inp;
    }
};

function colorDiv() {
    if(click) {
        if(color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = 'black';
        }
    }    
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let div = document.querySelectorAll("div");
    div.forEach((div) => div.style.backgroundColor = "white");
}