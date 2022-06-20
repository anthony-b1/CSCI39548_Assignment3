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
    let tbl = document.getElementById("grid");
    if (tbl.rows.length == 0){                  // If there is no existing cells:
        let row = tbl.insertRow();              // Insert a row 
        row.insertCell(0);                      // And a cell
    }
    else{
        for (let i = 0; i < tbl.rows.length; i++) {                         // Check the number of rows 
            tbl.rows[i].insertCell(tbl.rows[i].cells.length);  // Make a column with the length equal to the number of rows 
        }
    }
}

// Remove a row
function removeR() {
    document.getElementById("grid").deleteRow(0);   // Remove row at index 0
}

// Remove a column
function removeC() {
    let tbl = document.getElementById('grid');
    let row = tbl.rows;                         // Getting the rows of the table
    if (row[0].cells.length == 1){              // If there is one column left, clear all 
        tbl.replaceChildren();
    }
    else {
        for (let i = 0; i < row.length; i++){   // Delete ith cell of each row
            row[i].deleteCell(0);
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    let tbl = document.getElementById('grid');
    let tr = tbl.getElementsByTagName("tr");
    var td = null;
    for (var i = 0; i < tr.length; i++){        // Get the number of <tr> tags
        td = tr[i].getElementsByTagName("td");
        for (var n = 0; n < td.length; n++){    // Get the number of <td> tags
            td[n].addEventListener('click', function onclick(event){    // Change background color of the cell 
                event.target.style.backgroundColor = colorSelected;
            });
        }
    }
}

// Fill all uncolored cells
function fillU(){
    colorSelected = document.getElementById("selectedColorId").value;
    let tbl = document.getElementById('grid');
    let tr = tbl.getElementsByTagName("tr");
    var td = null;
    for (var i = 0; i < tr.length; i++){        // Get the number of <tr> tags
        td = tr[i].getElementsByTagName("td");
        for (var n = 0; n < td.length; n++){    // Get the number of <td> tags
            if (td[n].style.backgroundColor == false){          // If cell has not color:
                td[n].style.backgroundColor = colorSelected;    // Color the cell
            }
        }
    }
}

// Fill all cells
function fillAll(){
    colorSelected = document.getElementById("selectedColorId").value;
    let tbl = document.getElementById('grid');
    tbl.querySelectorAll('td').forEach(td => td.style.backgroundColor = colorSelected);
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}