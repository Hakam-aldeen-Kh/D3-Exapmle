import LinePlot from "./LinePlot";
import LinePlot1 from "./LinePlot1";

function App() {
  // D3js data
  const pathwayData = [
    { x: 0, y: 0 },
    { x: 10, y: 20 },
    { x: 20, y: 15 },
    { x: 30, y: 25 },
    { x: 40, y: 10 },
    { x: 50, y: 25 },
    { x: 60, y: 20 },
    { x: 75, y: 15 },
    { x: 100, y: 15 },
  ];

  
  const pointData = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 4500 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 9000 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <>
      {/* D3js example */}
      <LinePlot data={pathwayData} />

      <LinePlot1 data={pointData}/>
    </>
  );
}

export default App;
