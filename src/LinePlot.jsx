import React from "react";
import * as d3 from "d3";

const Pathway = ({ data, width = 800, height = 500 }) => {
  // Create scales for x and y
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.x)]) // x values
    .range([50, width - 50]); // Add some padding

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)]) // y values
    .range([height - 50, 50]); // Invert to make origin (0, 0) at bottom-left

  // Create ticks for axes
  const xTicks = xScale.ticks(20); // Generate 20 ticks for x-axis
  const yTicks = yScale.ticks(5); // Generate 5 ticks for y-axis

  // Create a line generator
  const lineGenerator = d3
    .line()
    .x((d) => xScale(d.x)) // Map x values
    .y((d) => yScale(d.y)) // Map y values
    .curve(d3.curveMonotoneX); // Optional: Smooth the line

  // Generate the path data string
  const pathData = lineGenerator(data);

  return (
    <svg width={width} height={height} style={{ border: "1px solid black" }}>
      {/* Axes */}
      <line
        x1="50"
        y1={height - 50}
        x2={width - 50}
        y2={height - 50}
        stroke="black"
      />
      <line x1="50" y1={50} x2="50" y2={height - 50} stroke="black" />

      {/* X-Axis Ticks */}
      {xTicks.map((tick, i) => (
        <g key={i} transform={`translate(${xScale(tick)}, ${height - 50})`}>
          <line y2="5" stroke="black" /> {/* Tick mark */}
          <text y="15" textAnchor="middle" fontSize="10" fill="black">
            {tick}
          </text>
        </g>
      ))}

      {/* Y-Axis Ticks */}
      {yTicks.map((tick, i) => (
        <g key={i} transform={`translate(50, ${yScale(tick)})`}>
          <line x2="-5" stroke="black" /> {/* Tick mark */}
          <text x="-10" textAnchor="end" fontSize="10" fill="black" dy="0.3em">
            {tick}
          </text>
        </g>
      ))}

      {/* Path */}
      <path d={pathData} fill="none" stroke="blue" strokeWidth={2} />

      {/* Points */}
      {data.map((point, i) => (
        <circle
          key={i}
          cx={xScale(point.x)}
          cy={yScale(point.y)}
          r={5}
          fill="red"
        />
      ))}
    </svg>
  );
};

export default Pathway;
