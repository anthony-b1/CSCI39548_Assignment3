// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let tbl = document.getElementById('grid'); // table reference
    let row = tbl.insertRow(tbl.rows.length)
    if (tbl.rows[0].cells.length == 0){           // If there is no existing cells, insert one cell
        row.insertCell(0);
    }
    else {
        for (let i = 0; i < tbl.rows[0].cells.length; i++) {    // Check the number of columns on the first row 
            row.insertCell(i);                                  // And make the same number of cells in a new row 
        }
    }
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}