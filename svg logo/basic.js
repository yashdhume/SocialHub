window.onload = function() {

  data = [[400, 50, -30, -25, 10], [400, 50, 30, -25, 10], [400, 50, -30, 25, 10], [400, 50, 30, 25, 10], [400, 50, 0, 0, 15]];
  data2 = [[400, 50, -30, -25, 6, 6, -10, -10], [400, 50, 30, -25, -6, 6, 10, -10], [400, 50, -30, 25, 6, -6, -10, 10], [400, 50, 30, 25, -6, -6, 10, 10]];

  height = 500
  width = 800

  const svg = d3.select('body')
                  .append('svg')
                  .attr("viewBox", [0, 0, width, height])
                  .attr('id', 'logo')
                  .style("font", "10px sans-serif");
  
  // Append circles to svg
  let circles = svg.selectAll("circle")
              .data(data)
              .enter()
              .append("circle");

  // Set circle attributes
  circles.attr("r", (d, i) => d[4])
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => d[1])
       .attr("fill", "transparent")

  // Append lines to svg
  let lines = svg.selectAll("line")
              .data(data2)
              .enter()
              .append("line");

  // Set line attributes
  lines.attr("x1", (d, i) => d[0]  + d[6])
       .attr("y1", (d, i) => d[1]  + d[7])
       .attr("x2", (d, i) => d[0])
       .attr("y2", (d, i) => d[1])

  
  // Animate the circles on button click
  // Define animation here
  d3.selectAll('circle')
    .transition()
    .attr('cx', (d, i) => 400 + d[2] )       
    .attr('cy', (d, i) => 50 + d[3])
    //.attr('fill', state ? '#1F4357' : '#CDB73A');
    .attr("stroke", "white")
    .attr("stroke-width", 3)
    .style("fill", (d, i) => `url(#image${i})`);


  d3.selectAll('line')
    .transition()
    .attr('x2', (d, i) => 400 + d[2] + d[4])       
    .attr('y2', (d, i) => 50 + d[3] + d[5])
           .attr("fill", "#e75480")
   .attr("stroke", "white")
   .attr("stroke-width", 3);

}
