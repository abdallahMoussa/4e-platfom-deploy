import React, { Fragment } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
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
const getColor = (yValue: number) => {
  if (yValue <= 5) {
    return "green";
  } else if (yValue >= 6 && yValue <= 10) {
    return "yellow";
  } else if (yValue >= 10 && yValue <= 15) {
    return "orange";
  } else if (yValue >= 15 && yValue <= 20) {
    return "red";
  }
  else return "red"
};

const calculateGradientStops = (yValue: number) => {
  if (yValue >= 7 && yValue < 10) {
    return ["red", "orange"];
  } // Gradient for higher values
  else if (yValue > 10) {
    return ["red", "orange"];
  } else if (yValue >= 5 && yValue < 7) {
    return ["blue", "green"]; // Gradient for intermediate values
  } else {
    return ["lightblue", "blue"]; // Gradient for lower values
  }
};
function ScheduledReportsBarChart() {
  const data = [
    { x: "مكتب خبراء النزاعات", y: 5 },
    { x: "مركز التحكيم العقاري", y: 7 },
    { x: "strategy and PMO", y: 3 },
    { x: "Risk and management", y: 21 },
    { x: "Research and Development", y: 18 },
    { x: "Operations", y: 10 },
    { x: "LRP", y: 8 },
    { x: "Law", y: 4 },
    { x: "IT", y: 10 },
    { x: "Exellence Mangement", y: 5 },
    { x: "Enterprise Resource", y: 15 },
    { x: "Cyper security", y: 9 },
    { x: "Communication", y: 6 },
  ];
  return (
    <Fragment>
      <VictoryChart
        theme={VictoryTheme.material}
        width={600}
        height={250}
        domainPadding={20}
      >
        <VictoryBar
          barRatio={2}
          alignment="middle"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          barWidth={20}
          style={{
            data: {
              fill: ({ datum }) => getColor(datum.y),
            },
            labels: { fill: "none", fontSize: "5px" },
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
          data={data}
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
                        const yValue = props.datum && props.datum.y;
                        if (yValue > 10) {
                          // If y-value is greater than 10, prevent color change
                          return calculateGradientStops(yValue);
                        }
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
          {data.map((datum) => {
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
          domain={[0, 12]}
          tickValues={data.map((item) => item.x)} // Specify tick values
          style={{ tickLabels: { angle: 25, fontSize: 6 } }} // Rotate labels by 45 degrees
          tickFormat={data.map((item) => item.x)} // Use the same values for formatting
        />
        <VictoryAxis
          dependentAxis
          tickValues={[0, 5, 10, 15, 20, 25, 30]}
          tickLabelComponent={<VictoryLabel dx={-10} />}
        />
      </VictoryChart>
    </Fragment>
  );
}

export default ScheduledReportsBarChart;
