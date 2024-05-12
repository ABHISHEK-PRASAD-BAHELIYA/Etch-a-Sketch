document.addEventListener("DOMContentLoaded", () => {
    createBoard(16);
    console.log("Hi");
});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let newDivs = size * size;

    for(let i=0; i<newDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }

}