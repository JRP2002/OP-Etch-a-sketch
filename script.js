const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");
const SIZE = 960;

function createGrid(squarePerSide) {
    container.innerHTML = "";

    const squareSize = SIZE / squarePerSide;

    for (let i = 0; i < squarePerSide * squarePerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = '${squareSize}px';
        square.style.height = '${squareSize}px';
        square.dataset.darkness = 0;

        square.addEventListener("mouseenter", () => {
            let darkness = Number(square.dataset.darkness);

            if (darkness < 10) {
                darkness++;
                square.dataset.darkness = darkness;

                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                square.style.backgroundColor = 'rgb(${r}, ${g}, ${b}';
                square.style.filter = 'brightness(${100 - darkness * 10}%)';
            }
        });

        container.appendChild(square);
    }
}

resizeBtn.addEventListener("click", () => {
    let input = prompt("Enter number of squares per side (max 100):");

    if (!input) return;
    
    const value = Number(input);

    if (value > 0 && value <= 100) {
        createGrid(value);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

createGrid(16);