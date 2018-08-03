import React, { Component } from 'react';
import { BarChart } from 'react-d3-components';
import { Chart } from 'react-d3-components';
import * as d3 from 'd3';
import axios from 'axios';
import './char.css';

var data = [{
    label: 'somethingA',
    values: [{ x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 }]
}];




class CityChart extends Component {

    constructor() {
        super();
        this.state = {
            x: false,
        }
    }

    componentDidMount() {
        let values = [];
        let labels = [];
        axios.get('/api/venues')
            .then(res => {
                res.data.forEach(venue => {
                    labels.push(venue.city);
                    values.push({ x: venue.city, y: +venue.count })
                })
                data[0].label = labels;
                data[0].values = values;
                console.log(labels);
                console.log(data);
                this.setState({ x: !this.state.x })
            });
    }
    render() {
        return (
            <div className="chart">
                <h1>Top Venues </h1>
                {/* <Chart 
                    width={960}
                    height={500}

                > */}
                    <BarChart
                        data={data}
                        width={1200}
                        height={500}
                        margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
                    />
                {/* </Chart> */}
            </div>
        )

    }
}

export default CityChart;