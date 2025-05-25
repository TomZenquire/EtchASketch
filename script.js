function generateGrid (numberGridItems) {
    for (let i = 0; i < numberGridItems; i++) {
        let newRow = document.createElement("div");
        let appendedRow = document.getElementById("etchASketchParent").appendChild(newRow);
        appendedRow.classList.add("etchASketchRow");
        for (let j = 0; j < numberGridItems; j++) {
            let newBox = document.createElement("div");
            let appendedBox = appendedRow.appendChild(newBox);
            appendedBox.classList.add("etchASketchGrid");
        }
    }
}

generateGrid(5)