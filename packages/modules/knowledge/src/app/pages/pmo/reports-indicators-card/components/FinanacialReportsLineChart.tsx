import React, { Fragment, useState } from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
interface CustomTooltipProps {
  x?: number;
  y?: number;
  datum?: { x: string; y: number };
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ x, y, datum }) => {
  return (
    <g>
      <rect
        x={x - 30}
        y={y - 30}
        width={120}
        height={40}
        fill="rgba(0, 0, 0, 0.8)"
        className="d-flex justify-content-center align-items-center"
      />
      <text x={x + 30} y={y - 20} textAnchor="middle" fontSize={7} fill="white">
        x:{datum.x}
      </text>
      <text x={x + 30} y={y} textAnchor="middle" fontSize={7} fill="white">
        y: {datum.y}
      </text>
    </g>
  );
};
function FinanacialReportsLineChart() {
  let [sampleData1, setSampleData1] = useState<any>([
    { x: "مكتمل", y: 2 },
    { x: "ملغي", y: 7 },
    { x: "قيد التنفيذ", y: 13 },
    { x: "معلق", y: 4 },
    { x: "تحت التخطيط", y: 20 },
    { x: " لا يوجد", y: 11 },
  ]);

  let [sampleData2, setSampleData2] = useState<any>([
    { x: "مكتمل", y: 12 },
    { x: "ملغي", y: 7 },
    { x: "قيد التنفيذ", y: 15 },
    { x: "معلق", y: 4 },
    { x: "تحت التخطيط", y: 3 },
    { x: " لا يوجد", y: 15 },
  ]);

  let [sampleData3, setSampleData3] = useState<any>([
    { x: "مكتمل", y: 15 },
    { x: "ملغي", y: 8 },
    { x: "قيد التنفيذ", y: 4 },
    { x: "معلق", y: 4 },
    { x: "تحت التخطيط", y: 8 },
    { x: " لا يوجد", y: 12 },
  ]);
  return (
    <Fragment>
      <VictoryChart
        theme={VictoryTheme.material}
        height={300}
        width={700}
        domainPadding={20}
      >
        <VictoryLine
          labelComponent={
            <VictoryTooltip
              style={{
                fill: "white", // Tooltip background color
                fontSize: 12, // Font size of the text in the tooltip
                padding: 8, // Padding around the tooltip content
              }}
              flyoutStyle={{
                fill: "rgba(0, 0, 0, 0.8)", // Tooltip arrow and border color
              }}
              flyoutWidth={100} // Width of the tooltip
              flyoutHeight={40} // Height of the tooltip
              renderInPortal // Renders the tooltip outside the chart for positioning
              center={{ x: 2, y: 6 }} // Positions the tooltip relative to the data point
              flyoutComponent={<CustomTooltip />}
            />
          }
          x="x"
          y="y"
          //   domain={[0, 100]}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              stroke: "#c43a31",
              strokeWidth: 2,
              strokeLinecap: "round",
            },
          }}
          events={[
            {
              target: "parent",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      eventKey: "all",
                      mutation: ({ style }) => {
                        return style.stroke === "black"
                          ? null
                          : { style: { stroke: "black", strokeWidth: 5 } };
                      },
                    },
                  ];
                },
              },
            },
          ]}
          data={sampleData1}
          labels={({ datum }) => `x : ${datum.x}`}
        />
        <VictoryLine
          labelComponent={
            <VictoryTooltip
              flyoutWidth={5}
              flyoutHeight={5}
              flyoutComponent={<CustomTooltip />}
            />
          }
          x="x"
          y="y"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              stroke: "blue",
              strokeWidth: 2,
              strokeLinecap: "round",
            },
          }}
          events={[
            {
              target: "parent",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      eventKey: "all",
                      mutation: ({ style }) => {
                        return style.stroke === "black"
                          ? null
                          : { style: { stroke: "black", strokeWidth: 5 } };
                      },
                    },
                  ];
                },
              },
            },
          ]}
          data={sampleData2}
          labels={({ datum }) => `x : ${datum.x}`}
        />
        <VictoryLine
          labelComponent={
            <VictoryTooltip
              style={{
                fill: "white", // Tooltip background color
                fontSize: 12, // Font size of the text in the tooltip
                padding: 8, // Padding around the tooltip content
              }}
              flyoutStyle={{
                fill: "rgba(0, 0, 0, 0.8)", // Tooltip arrow and border color
              }}
              flyoutWidth={100} // Width of the tooltip
              flyoutHeight={40} // Height of the tooltip
              renderInPortal // Renders the tooltip outside the chart for positioning
              center={{ x: 2, y: 6 }} // Positions the tooltip relative to the data point
              flyoutComponent={<CustomTooltip />}
            />
          }
          x="x"
          y="y"
          //   domain={[0, 100]}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              stroke: "green",
              strokeWidth: 2,
              strokeLinecap: "round",
            },
          }}
          events={[
            {
              target: "parent",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      eventKey: "all",
                      mutation: ({ style }) => {
                        return style.stroke === "black"
                          ? null
                          : { style: { stroke: "black", strokeWidth: 5 } };
                      },
                    },
                  ];
                },
              },
            },
          ]}
          data={sampleData3}
          labels={({ datum }) => `x : ${datum.x}`}
        />
        <VictoryAxis
          tickValues={sampleData1?.map((item) => item.x)} // Specify tick values
          style={{ tickLabels: { fontSize: "20" } }} // Rotate labels by 45 degrees
          tickFormat={sampleData1?.map((item) => item.x)} // Use the same values for formatting
        />
        <VictoryAxis
          dependentAxis
          domain={[0, 20]}
          height={400}
          style={{ tickLabels: { fontSize: "20" } }}
          tickLabelComponent={<VictoryLabel dx={-20} />}
        />
      </VictoryChart>
    </Fragment>
  );
}

export default FinanacialReportsLineChart;
