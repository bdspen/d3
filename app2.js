var dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];

// for(var i = 0; i < 100; i++){
//     dataset.push(dataset[i]);
// }

for (var i = 0; i < 25; i++) {           //Loop 25 times
    var newNumber = Math.random() * 30;  //New random number (0-30)
    dataset.push(newNumber);             //Add new number to array
}


d3.select('body') //Give select() a CSS selector as input
    .selectAll('div')
    .data(dataset) //Counts and parses our data values
    .enter() //creates a new placeholder element on which you may
    .append('div') // append() creates whatever new DOM element you specify
    .attr('class', 'bar')
    .style('height', function(d){
        return d * 5 + 'px';
    });


// .text() takes a string and inserts it between the opening and closing tags of the current selection.
