import LinePlot from "./LinePlot";

function App() {
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

  return (
    <>
      <LinePlot data={pathwayData} />
    </>
  );
}

export default App;
