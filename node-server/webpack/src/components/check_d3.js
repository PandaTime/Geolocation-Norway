'use strict';
import * as d3 from 'd3';
import * as topojson from 'topojson';

function d3init(){
    var svg = d3.select("svg")
            .attr("width", 1000)
            .attr("height", 1000);
        //width = +svg.attr("width"),
        //height = +svg.attr("height");



    d3.json("/json/dpg_f.json", function(error, nj) {

        if (error) throw error;
        var land = topojson.topology({track: nj});
        console.log(land);
        var path = d3.geoPath()
                    .projection(d3.geoMercator().scale(100));
        var world = topojson.feature(land, {
            type: "GeometryCollection",
            geometries: land.objects.track.geometries
        });
        var q = 1;
        svg.selectAll("path")
            .data(world.features)
            .enter().append("path")
            .attr("class", "tract")
            .attr("d", path);

    });

    /*
    Working examples:
    http://bl.ocks.org/mbostock/raw/5126418/
    nj-tracts.json
    var svg = d3.select("svg")
            .attr("width", 1000)
            .attr("height", 1000);

    d3.json("/json/nj-tracts.json", function(error, nj) {
        if (error) throw error;

        var land = topojson.feature(nj, {
            type: "GeometryCollection",
            geometries: nj.objects.tracts.geometries.filter(function(d) {
                return (d.id / 10000 | 0) % 100 !== 99;
            })
        });

        // EPSG:32111
        var path = d3.geoPath()
            .projection(d3.geoTransverseMercator()
                .rotate([74 + 30 / 60, -38 - 50 / 60])
                .fitExtent([[20, 20], [940, 1180]], land));

        svg.selectAll("path")
            .data(land.features)
            .enter().append("path")
            .attr("class", "tract")
            .attr("d", path)
            .append("title")
            .text(function(d) { return d.id; });

        svg.append("path")
            .datum(topojson.mesh(nj, nj.objects.tracts, function(a, b) { return a !== b; }))
            .attr("class", "tract-border")
            .attr("d", path);
    });*/


}
module.exports = d3init;