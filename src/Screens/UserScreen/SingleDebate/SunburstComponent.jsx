import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Sunburst from './Sunburst'; // Assuming you have a Sunburst component

const SunburstComponent = ({ data }) => {
  useEffect(() => {
    const color = d3.scaleOrdinal().domain(["pros", "cons"]).range(["green", "red"]);
    const chart = Sunburst()
      .data(data)
      .size("size")
      .color((d) => color(d.name))
      .tooltipContent((d, node) => `Value: <i>${node.value}</i>`)
      .onClick((d) => {
        // Handle click event here if needed
        console.log("Clicked", d);
      });

    const chartContainer = document.getElementById("chart");
    chartContainer.innerHTML = "";
    chart(chartContainer);

    return () => {
      // Cleanup function if needed
    };
  }, [data]);


  return <div id="chart" />;
};

export default SunburstComponent;