<template>
    <div id="SplashPageComponents">
        <v-container fluid>
            <v-flex ce>
                <v-row>
                    <v-col align="center"
                           justify="center"
                           style="height: 1000px">
                        <svg id="mySvg" width="80" height="80">
                            <defs id="mdef">
                                <pattern id="image0" x="0" y="0" height="40" width="40">
                                    <image x="0" y="0" width="20" height="20" xlink:href="@/assets/YoutubeIcon.png"></image>
                                </pattern>
                                <pattern id="image1" x="0" y="0" height="40" width="40">
                                    <image x="0" y="0" width="20" height="20" xlink:href="@/assets/InstagramIcon.png"></image>
                                </pattern>
                                <pattern id="image2" x="0" y="0" height="40" width="40">
                                    <image x="0" y="0" width="20" height="20" xlink:href="@/assets/TwitterIcon.png"></image>
                                </pattern>
                                <pattern id="image3" x="0" y="0" height="40" width="40">
                                    <image x="0" y="0" width="20" height="20" xlink:href="@/assets/RedditIcon.png"></image>
                                </pattern>
                            </defs>
                        </svg>
                    <v-container fluid class="d-xs-flex">

                        <svg id="logoFinal" viewBox="0 0 800 100" preserveAspectRatio="xMaxYMax meet"></svg>

                    </v-container>
                        
                        <v-img src="@/assets/SocialHubLogoWhiteName.png" max-width="500" max-height="500"></v-img>
                        
                        <v-container></v-container>
                        <p class="text-center ma-5">All your favorite social media in one place.</p>

                        <v-col>
                            <v-btn class="ma-5" outlined>Get Started</v-btn>
                            <v-btn class="ma-5" outlined to="/SearchPage">Lets go</v-btn>
                        </v-col>
                    </v-col>
                </v-row>
            </v-flex>
        </v-container>

    </div>
</template>
    
<script src="https://d3js.org/d3.v5.min.js"></script>

<script>
    export default {
        name: "SplashPageComponents",

        mounted(){
            let data = [[400, 50, -30, -25, 10], [400, 50, 30, -25, 10], [400, 50, -30, 25, 10], [400, 50, 30, 25, 10], [400, 50, 0, 0, 15]];
            let data2 = [[400, 50, -30, -25, 6, 6, -10, -10], [400, 50, 30, -25, -6, 6, 10, -10], [400, 50, -30, 25, 6, -6, -10, 10], [400, 50, 30, 25, -6, -6, 10, 10]];

            let height = 500
            let width = 800

            const svg = d3.select('#logoFinal')
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
               .attr("fill", "white")

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
            let circ = document.getElementsByTagName('circle');
            console.log(circ);

            d3.selectAll('circle')
            .transition()
            .attr('cx', (d, i) => 400 + d[2] )       
            .attr('cy', (d, i) => 50 + d[3])
            .attr("stroke", "white")
            .attr("stroke-width", 3)
            .style("fill", (d, i) => `url(#image${i})`)
            .duration(1500);


            d3.selectAll('line')
            .transition()
            .attr('x2', (d, i) => 400 + d[2] + d[4])       
            .attr('y2', (d, i) => 50 + d[3] + d[5])
            .attr("fill", "#e75480")
            .attr("stroke", "white")
            .attr("stroke-width", 3)
            .duration(1500);
        }
    }

</script>

<style scoped>

</style>