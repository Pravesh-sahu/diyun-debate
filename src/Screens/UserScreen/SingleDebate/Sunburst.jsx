import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import Tooltip from "./Tooltip";

const SunburstChart = ({ data, width, height, setOldTitle, debateDetails , setDebateDetails}) => {
  const svgRef = useRef();
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  function convertToProsAndCons(data) {
    let pros = [];
    let cons = [];
    
    for (const item of data) {
        if (item.side === 'pros') {
            pros.push(item);
        } else if (item.side === 'cons') {
            cons.push(item);
        }
    }
    
    return { pros, cons };
}

  useEffect(() => {
    if (!data) return;

    console.log("Data:", data);

    const color = d3.scaleOrdinal().domain(["pros", "cons"]).range(["green", "red"]);

    const handleClick = (event, d) => {
      console.log("Clicked on:", d); // You can perform actions based on the clicked element here
      setOldTitle(d.data.title)
      const marshalData = convertToProsAndCons(d.data.children);
      console.log(marshalData);
      setDebateDetails({ ...debateDetails, pros: marshalData.pros, cons: marshalData.cons });
      
    };

    const handleMouseOver = (event, d) => {
      const [x, y] = d3.pointer(event);
      const svg = d3.select(svgRef.current);
      const svgX = parseFloat(svg.attr("x")) || 0;
      const svgY = parseFloat(svg.attr("y")) || 0;
      setTooltipPosition({ x: x + svgX, y: y + svgY });
      setTooltipContent(d.data.title);
    };

    const handleMouseOut = () => {
      setTooltipContent("");
    };

    const svg = d3.select(svgRef.current);

    // Define dimensions and margin
    const radius = Math.min(width, height) / 2;

    const partition = d3.partition().size([2 * Math.PI, radius]);

    // Format the data
    const root = d3.hierarchy(data).sum(d => d.children ? 1 : 0);

    // Compute the partition layout and returns an array of nodes
    partition(root);

    // Compute the maximum depth to calculate the scale for x1
    const maxDepth = root.height + 1;

    // Clear existing elements
    svg.selectAll('*').remove();

    // Add arcs
    // Add arcs with padding
    const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

    const arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(d => Math.max(0, d.y0))
      .outerRadius(d => Math.max(0, d.y1));

    g.selectAll('path')
      .data(root.descendants())
      .enter()
      .append('path')
      .attr('display', d => (d.depth ? null : 'none'))
      .attr('d', arc) // Add padding between arcs
      .attr('fill', d => color(d.data.title))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7)
      .on('click', handleClick) // Attach click event handler
      .on('mouseover', handleMouseOver) // Attach mouseover event handler
      .on('mouseout', handleMouseOut); // Attach mouseout event handler

  }, [data, height, width]);

  return (
    <div style={{ position: "relative" }} className="d-flex justify-content-center sunbrust m-auto">
      <svg ref={svgRef} width={width} height={height}></svg>
      {tooltipContent && (
        <Tooltip x={tooltipPosition.x} y={tooltipPosition.y} title={tooltipContent} />
      )}
    </div>
  );
};

export default SunburstChart;
