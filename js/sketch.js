let divs;

function createPad(side) {
    const padContainer = document.querySelector('.sketch-container');
    let height = padContainer.clientHeight;
    let width = padContainer.clientWidth;
    removeAllChildNodes(padContainer);
    for (let i = 0; i < side*side; i++) {
        let cell = document.createElement("div");
        cell.className = `cell i${i}`;
        cell.setAttribute("style",`width:${(width)/side}px; height:${(height)/side}px; background-color:rgb(0,0,0,0)`);
        padContainer.appendChild(cell);
    }
    divs = document.querySelectorAll(".cell");
    console.log(divs);
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            try {
                let rgb = div.style.backgroundColor;
                let re = new RegExp("rgba\\(0,\\s\\d,\\s\\d,\\s(.+)\\)");
                let currentOpacity = parseFloat(rgb.match(re)[1]);
                let newOpacity = currentOpacity + 0.1;
                div.style.backgroundColor = `rgb(0,0,0,${0.1 + currentOpacity})`;
            }catch (e) {
                console.error(e);
            }
        });
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const newBtn = document.querySelector(".new-sketch");

newBtn.addEventListener("click", () => {
    let side;
    do {
        side = prompt("How many squares per side? Keep it under 100: ");
    } while (parseInt(side) > 100 || parseInt(side) < 0)
    createPad(parseInt(side));
});

