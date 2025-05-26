const clickMakeGrid = document.querySelector("button")
const parentDiv = document.getElementById("etchASketchParent")
generateGrid(16)


function generateGrid (numberGridItems) {
    for (let i = 0; i < numberGridItems; i++) {
        let newRow = document.createElement("div");
        let appendedRow = parentDiv.appendChild(newRow);
        appendedRow.classList.add("etchASketchRow");
        for (let j = 0; j < numberGridItems; j++) {
            let newBox = document.createElement("div");
            let appendedBox = appendedRow.appendChild(newBox);
            appendedBox.classList.add("etchASketchGrid");
        }
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

