//draws circles

//Width and height
var w = window.innerWidth;
var h = window.innerHeight;
var dataset = [];

for (i = 0; i < w / 20; i++) {
    dataset.push(i);
}

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "black");

var circles1 = svg.selectAll(".waveCircle1")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class", "waveCircle1")
    .attr("cy", "5%")
    .attr("cx", function(d, i) { //i is a numeric index value of the current element
        return (i * 20)
    })
    .attr("r", 10)

var circles2 = svg.selectAll(".waveCircle2")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class", "waveCircle2")
    .attr("cy", "95%")
    .attr("cx", function(d, i) { //i is a numeric index value of the current element
        return (i * 20)
    })
    .attr("r", 10)

var bigCircle1 = svg.selectAll(".bigCircle1")
    .data([0])
    .enter()
    .append("circle")
    .attr("class", "bigCircle1")
    .attr("cy", h / 2 )
    .attr("r", 100)

var bigCircle2 = svg.selectAll(".bigCircle2")
    .data([0])
    .enter()
    .append("circle")
    .attr("class", "bigCircle2")
    .attr("cy", h / 2 )
    .attr("r", 100)

var wave = function() {

    d3.select(this)
        .transition()
        .delay(function(d, i) {
            return i * 50;
        })
        .duration(2000)
        .attr("cy", "95%")
        .each('end', function() {

            //Move to top
            d3.select(this)
                .transition()
                .delay(function(d, i) {
                    return i * 50;
                })
                .duration(2000)
                .attr("cy", "5%")
                .each('end', wave)
        });
};
var waveInvert = function() {

    d3.select(this)
        .transition()
        .delay(function(d, i) {
            return i * 50;
        })
        .duration(2000)
        .attr("cy", "5%")
        .each('end', function() {

            //Move to top
            d3.select(this)
                .transition()
                .delay(function(d, i) {
                    return i * 50;
                })
                .duration(2000)
                .attr("cy", "95%")
                .each('end', waveInvert)
        });
};

var move = function(){
    d3.select(this)
        .transition()
        .delay(function(d, i) {
            return i * 50;
        })
        .duration(7800)
        .attr("cx", "120%")
        .each("end", function(){
            move.call(this)
            if(this.id = "id0"){
                bigCircle1Start()
            }else{
                bigCircle2Start();
            }
        });
}

d3.selectAll(".waveCircle1")
    .transition()
    .delay(function(d, i) {
        return i * 50;
    })
    .attr("fill", "hsl(" + (Math.random() * 360) + ",100%,50%)")
    .each("end", waveInvert);

d3.selectAll(".waveCircle2")
    .transition()
    .delay(function(d, i) {
        return i * 50;
    })
    .attr("fill", "hsl(" + (Math.random() * 360) + ",100%,50%)")
    .each("end", wave);

var bigCircle1Start = function(){
    var i = 0;
    d3.selectAll(".bigCircle1")
        .attr("fill", "hsl(" + (Math.random() * 360) + ",100%,50%)")
        .attr("id", "id" + i)
        .attr("cx", "-18%")
        .transition()
        .delay(function(d, i) {
            return i * 50;
        })
        .each("end", move);
        i++;
}

var bigCircle2Start = function(){
    var i = 0;
    d3.selectAll(".bigCircle2")
        .attr("fill", "hsl(" + (Math.random() * 360) + ",100%,50%)")
        .attr("id", "id" + i)
        .attr("cx", "-18%")
        .transition()
        .delay(function(d, i) {
            return i * 50;
        })
        .each("end", move)
        i++;
}
bigCircle1Start();
bigCircle2Start();
