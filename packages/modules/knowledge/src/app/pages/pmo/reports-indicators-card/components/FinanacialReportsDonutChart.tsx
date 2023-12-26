import React, { Fragment, useState } from "react";
import { VictoryPie, VictoryTooltip } from "victory";
const CustomTooltip = ({ x, y }) => {
  return (
    <div style={{ background: "white", padding: "10px" }}>
      <p>Label: {x}</p>
      <p>Value: {y}</p>
    </div>
  );
};

function FinanacialReportsDonutChart() {
  const [data, setData] = useState([
    { x: "Apples", y: 2 },
    { x: "Bananas", y: 1 },
    { x: "Oranges", y: 1 },
    { x: "Or", y: 1 },
    { x: "O", y: 1 },
  ]);
  const colorScale = ["red", "green", "blue", "orange", "black"]; // Define your colors here

  return (
    <Fragment>
      <VictoryPie
        padAngle={({ datum }) => datum.y} //this represents space between sectors كل لما ال y تبقي كبيره , كل لما المسافه تبقي كبيره
        innerRadius={100}
        data={data} // data
        colorScale={colorScale} // to control colors of sectors
        labels={() => null} // to hide labels of sectors
        // labelComponent={
        //   <VictoryTooltip renderInPortal component={<CustomTooltip />} />
        // }
      />
    </Fragment>
  );
}

export default FinanacialReportsDonutChart;
