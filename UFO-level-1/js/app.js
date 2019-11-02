// from data.js
var tableData = data;

// YOUR CODE HERE!
d3.select("table").data(tableData)  
    .enter()
    .append("tr")
    .classed("col-md-10", true)
    .html(function(d) {
    return `<td>${d.date}</td>
            <td>${d.city}</td>
            <td>${d.state}</td>
            <td>${d.country}</td>
            <td>${d.shape}</td>
            <td>${d.duration}</td>>
            <td>${d.comments}</td>>`;
  });
})