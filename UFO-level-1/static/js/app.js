// from data.js
var tableData = data;

// YOUR CODE HERE!
d3.select("table")
    .select("tbody")
    .select("#ufo-table")
    .enter()
    .append("tr")
    .append("td")
    .text(function(d) {
    return `<td>${d.datetime}</td>
            <td>${d.city}</td>
            <td>${d.state}</td>
            <td>${d.country}</td>
            <td>${d.shape}</td>
            <td>${d.durationMinutes}</td>
            <td>${d.comments}</td>`;
  });

  // tabledata.forEach((data) => {
  //   var row = tbody.append("tr");
  //   Object.entries(weatherReport).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });