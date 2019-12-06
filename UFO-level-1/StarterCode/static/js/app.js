// from data.js
var tableData = data;
//Resource: Github Chin-ky
// Get a reference for the table body
var tbody = d3.select('tbody');

// Console.log the ufo data from data.js
console.log(data);

// Function to build table
function createtable(ufoData) {
    tbody.html('')
    ufoData.forEach((dataRow) => {
        var row = tbody.append('tr');
        Object.values(dataRow).forEach((value) => {
            var cell = row.append('td');
            cell.text(value);
        })
    })
};
createtable(tableData)
var button = d3.select('#filter-btn');
button.on('click', function() {
    d3.event.preventDefault()
    var input = d3.select('#datetime').property(value);
    var filteredData = tableData.filter(row => row.datetime === input)
    createtable(filteredData)
});



// var tbody = d3.select("tbody");

// function createTable(data) {
//     tbody.html("");

//     data.forEach(dataRow) => {
//         var row = tbody.append("tr");
//         Object.values(dataRow).forEach((val) => {
//             var cell = row.append("td");
//             cell.text(val);
//           }
//       );
//     });
// }
// function handleClick() {
//     var date = d3.select("#datetime").property("value");
//     let filterData = tableData;

//     if (date) {
//       filteredData = filteredData.filter(row => row.datetime === date);  
//     }

//     createTable(filteredData);
// }

// d3.selectAll("#filter-btn").on("click",handleClick);

// createTable(tableData);