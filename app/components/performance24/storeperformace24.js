/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import * as d3 from 'd3';

function chart(element, data) {
    //arcGenerator
    let arcGenerator = d3
        .arc()
        .innerRadius(70)
        .outerRadius(210)
        .padAngle(0.02)
        .padRadius(100)
        .cornerRadius(4);

    //pie generator to be used by arc generator
    let GeneratedDatafunction = d3.pie().value(function(d) {
        return d.revenue;
    });

    let chartdata = GeneratedDatafunction(data);



    d3.select(element)
        .selectAll('path')
        .data(chartdata)
        .join('path')
        .attr('fill', 'pink')
        .attr('d', arcGenerator);

    d3.select(element)
        .selectAll('text')
        .data(chartdata)
        .join('text')
        .each(function(d) {
            var centroid = arcGenerator.centroid(d);
            d3.select(this)
                .attr('x', centroid[0])
                .attr('y', centroid[1])
                .attr('dy', '0.33em')
                .text(d.data.label);
        });
}
export default class Performance24Storeperformace24Component extends Component {
    svg(element, [model]) {
        chart(element, model);
    }
}