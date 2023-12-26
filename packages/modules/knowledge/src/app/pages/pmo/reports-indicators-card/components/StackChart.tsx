import React, { Fragment, useState } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryStack,
  VictoryTheme,
} from "victory";

function StackChart() {
  let [data1, setData1] = useState([
    { quarter: "المشروع الاول", percentage: 10 },
    { quarter: "المشروع الثاني", percentage: 20 },
    { quarter: "المشروع الثالث", percentage: 50 },
    { quarter: "المشروع الرابع", percentage: 60 },
  ]);

  let [data2, setData2] = useState([
    { quarter: "المشروع الاول", percentage: 10 },
    { quarter: "المشروع الثاني", percentage: 60 },
    { quarter: "المشروع الثالث", percentage: 70 },
    { quarter: "المشروع الرابع", percentage: 90 },
  ]);

  let [data3, setData3] = useState([
    { quarter: "المشروع الاول", percentage: 10 },
    { quarter: "المشروع الثاني", percentage: 80 },
    { quarter: "المشروع الثالث", percentage: 50 },
    { quarter: "المشروع الرابع", percentage: 40 },
  ]);

  let [data4, setData4] = useState([
    { quarter: "المشروع الاول", percentage: 70 },
    { quarter: "المشروع الثاني", percentage: 30 },
    { quarter: "المشروع الثالث", percentage: 20 },
    { quarter: "المشروع الرابع", percentage: 90 },
  ]);
  const yAxisTickCount = 5; // Adjust the number of ticks (labels) on the y-axis

  return (
    <Fragment>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={[
            "المشروع الاول",
            "المشروع الثاني",
            "المشروع الثالث",
            "المشروع الرابع",
          ]}
        />

        <VictoryAxis
          dependentAxis
          //   tickValues={[10,20,30,40,50,60,70,80,90]} // Specify tick values
          tickCount={yAxisTickCount} // Set the number of ticks on the y-axis
          style={{
            axis: { stroke: "black" }, // Style for the axis line
            tickLabels: { fontSize: 10, padding: 10 }, // Style for the tick labels
          }}
          tickFormat={(x) => `${x}%`}
          tickLabelComponent={<VictoryLabel dx={-20} />}
        />
        <VictoryStack colorScale={"warm"}>
          <VictoryBar data={data1} x="quarter" y="percentage" />
          <VictoryBar data={data2} x="quarter" y="percentage" />
          <VictoryBar data={data3} x="quarter" y="percentage" />
          <VictoryBar data={data4} x="quarter" y="percentage" />
        </VictoryStack>
      </VictoryChart>
    </Fragment>
  );
}

export default StackChart;
