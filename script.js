const clickMakeGrid = document.querySelector("button")
const parentDiv = document.getElementById("etchASketchParent")
generateGrid(16)


function randomIntegerBetween(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function generateGrid (numberGridItems) {
    for (let i = 0; i < numberGridItems; i++) {
        let newRow = document.createElement("div");
        let appendedRow = parentDiv.appendChild(newRow);
        appendedRow.classList.add("etchASketchRow");
        for (let j = 0; j < numberGridItems; j++) {
            let newBox = document.createElement("div");
            let appendedBox = appendedRow.appendChild(newBox);
            appendedBox.classList.add("etchASketchGrid");
            appendedBox.addEventListener("mouseover", () => {
                appendedBox.style.cssText = "background-color:rgba("+
                randomIntegerBetween(0,255)+","+randomIntegerBetween(0,255)+","+randomIntegerBetween(0,255)
                +",0.1)"
            },{ once: true });
            appendedBox.addEventListener("mouseout", (event) => {
                event.stopImmediatePropagation(),
                appendedBox.addEventListener("mouseover", () =>{
                    incrementTransparency(appendedBox)
                })
            },{ once: true });
        };
    }
}

clickMakeGrid.onclick = function () {
    const input = document.querySelector("input");
    if (input.value <= 100 && input.value >= 2) {
        const divsToRemove = parentDiv.querySelectorAll(".etchASketchRow");
        divsToRemove.forEach(item => item.remove());
        generateGrid(input.value)
    } else 
    alert("Please enter a value between 2 and 100");
    input.value = "";
  };

function incrementTransparency(inputDiv) {
    let currentCSS = inputDiv.style.cssText;
    let newTransparency = Number(currentCSS.slice(-5,-2)) + 0.1;
    if (newTransparency <= 1) {inputDiv.style.cssText = currentCSS.slice(0,-6)+newTransparency+")"}
}