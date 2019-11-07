// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!

// Create a functino to build the table
 function buildTable(t) {
  var tbody = d3.select("tbody");
  var entryData = t.forEach(function(entry) {
//    console.log(entry);
    var row = tbody.append("tr");
    var rowdata = Object.values(entry);
//    console.log(rowdata);
    var obj1 = rowdata.forEach(function(d,i) {
      var cell = row.append("td");
      cell.text(rowdata[i]);
    });
  });
 };

buildTable(tableData);
//function filterTable()

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
  var emptyTable = d3.select("#ufo-table").select('tbody').selectAll('tr').remove();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Confirm the input date
  console.log(inputValue);
  //console.log(tableData);

  // Filter tableData based on user input
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  // Confirm filteredData Array
  console.log(filteredData);

  // Build the filteredData Table
  buildTable(filteredData); 

  });