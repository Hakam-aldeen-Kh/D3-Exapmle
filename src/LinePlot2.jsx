import { ResponsiveLine } from "@nivo/line";

const LinePlot2 = ({ data }) => {
  return (
    <div style={{ height: "400px" }}>
      <h3 style={{ marginTop: "100px" }}>Nivo Example:</h3>
      <p>
        Link to Documentation{" "}
        <a href="https://nivo.rocks/" target="_blank">
          Nivo
        </a>
      </p>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: true }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendPosition: "middle",
          legendOffset: 36,
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            translateY: 0,
            itemWidth: 80,
            itemHeight: 20,
            itemsSpacing: 0,
            symbolSize: 12,
          },
        ]}
        useMesh
      />
    </div>
  );
};

export default LinePlot2;
