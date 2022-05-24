import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //this is gonna return an array(dataPoints) with just the values of all datapoints

    const totalMaximum = Math.max(...dataPointValues); // using the spread operator we will get all the values of the 12 months that were mapped in the dapaPointValues variable declaration.

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />;
            })}
        </div>
    );
};

export default Chart;
