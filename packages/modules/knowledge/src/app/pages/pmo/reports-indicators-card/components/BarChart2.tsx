import React, { Fragment, useState } from "react";
import {
  VictoryAxis,
  VictoryBar,
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
        x={x - 10}
        y={y - 10}
        width={200}
        height={120}
        fill="rgba(0, 0, 0, 0.8)"
      />

      <text
        x={x + 100}
        y={y + 50}
        textAnchor="middle"
        fontSize={16}
        fill="white"
      >
        {datum.x}: x
      </text>

      <text
        x={x + 100}
        y={y + 80}
        textAnchor="middle"
        fontSize={16}
        fill="white"
      >
        y: {datum.y}
      </text>
    </g>
  );
};
const getColor = (yValue: number) => {
  if (yValue >= 7) {
    return "green";
  } else if (yValue >= 5) {
    return "blue";
  } else {
    return "red";
  }
};

const calculateGradientStops = (yValue: number) => {
  if (yValue >= 20) {
    return ["red", "orange"]; // Gradient for higher values
  } else if (yValue >= 10 && yValue < 20) {
    console.log(yValue)
    console.log("red")
    return ["blue", "red"]; // Gradient for intermediate values
  } else {
    return ["lightblue", "blue"]; // Gradient for lower values
  }
};
function BarChart2() {
  let [sampleData, setSampleData] = useState<any>([
    { x: "الانجاز", y: 7 },
    { x: "الجدول الزمني", y: 19 },
    { x: "المشاكل", y: 25 },
    { x: "المخاطر", y: 30 },
  ]);

  return (
    <Fragment>
      <VictoryChart
        theme={VictoryTheme.material}
        width={600}
        height={500}
        domainPadding={50}
      >
        <VictoryBar
          barRatio={1}
          alignment="middle"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          barWidth={30}
          style={{
            data: {
              fill: ({ datum }) => `url(#gradient-${datum.x})`,
              // fill: "red",
            },
            labels: { fill: "none", fontSize: "15px" },
          }}
          labels={({ datum }) => `x : ${datum.x}`}
          x="x"
          y="y"
          labelComponent={
            <VictoryTooltip
              flyoutWidth={5}
              flyoutHeight={5}
              flyoutComponent={<CustomTooltip />}
            />
          }
          data={sampleData}
          eventKey="x"
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        const fill = props.style && props.style.fill;
                        return fill === "black"
                          ? null
                          : { style: { fill: "black" } };
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
        <defs>
          {sampleData?.map((datum) => {
            const stops = calculateGradientStops(datum.y);
            return (
              <linearGradient
                id={`gradient-${datum.x}`}
                key={datum.x}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={stops[0]} />
                <stop offset="100%" stopColor={stops[1]} />
              </linearGradient>
            );
          })}
        </defs>
        <VictoryAxis
          tickValues={sampleData.map((item) => item.x)} // Specify tick values
          style={{ tickLabels: { fontSize: 16 } }} // Rotate labels by 45 degrees
          tickFormat={sampleData.map((item) => item.x)} // Use the same values for formatting
          width={400}
          height={400}
          theme={VictoryTheme.material}
          tickLabelComponent={<VictoryLabel dy={5} />}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[5, 10, 15, 20, 25, 30, 35, 40]}
          style={{ tickLabels: { fontSize: 16 } }}
          domain={[0, 40]}
          tickLabelComponent={<VictoryLabel dx={-20} />}
          width={400}
          height={400}
          theme={VictoryTheme.material}
        />
      </VictoryChart>
    </Fragment>
  );
}

export default BarChart2;
