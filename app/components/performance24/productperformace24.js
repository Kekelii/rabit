/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import * as d3 from 'd3';

let datainfo;

function revenueCalculator(data) {
    /**
     * It takes an array of objects, loops through each object, and adds the revenue property of each
     * object to a variable called revenue
     * @param data - an array of objects
     * @returns The total revenue of all the iteams in the array.
     */
    let revenue = 0;
    data.forEach((iteam) => {
        revenue += iteam.revenue;
    })
    return revenue;
}

/**
 * We're using the d3.pie() function to generate the data for the chart, and then we're using the
 * d3.arc() function to generate the SVG path for each arc
 * @param element - The DOM element where the chart will be rendered.
 * @param data - The data to be used to generate the chart.
 * @returns the data that is being passed in.
 */

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
        // .attr('fill', 'pink')
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
                .attr('text-anchor', 'middle')
                .text([d.data.label]);
        });
}

export default class Performance24Productperformace24Component extends Component {
    constructor(own, args) {
        super(own, args)
        datainfo = args.data
    }
    @tracked Revenue = revenueCalculator(datainfo);
    @tracked Level = datainfo[0].catlogue;
    svg(element) {
        chart(element, datainfo);
        console.log(datainfo);
    }
}