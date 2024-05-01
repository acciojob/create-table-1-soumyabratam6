function insert_Row() {
    //Write your code here
   var table = document.getElementById("sampleTable");

    // Insert a new row at the beginning of the table
    var newRow = table.insertRow(0);

    // Insert a cell in the new row at index 0
    var cell1 = newRow.insertCell(0);
    // Set the text content of the cell
    cell1.innerHTML = "New Cell1";

    // Insert a cell in the new row at index 1
    var cell2 = newRow.insertCell(1);
    // Set the text content of the cell
    cell2.innerHTML = "New Cell2";
  
}
