import React from "react";
import GaugeChart from "react-gauge-chart";

const InvestigatingCircularGuage = () => {
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <div style={{ position: "relative", width: "300px", height: "300px" }}>
        <GaugeChart
          id="gauge-chart"
          percent={0.85}
          arcPadding={0}
          cornerRadius={10}
          colors={["#FF5F6D", "#FFC371", "#FFA500"]}
          textColor="#000"
          needleColor="transparent"
          needleBaseColor="transparent"
          formatTextValue={() => ""}
        />
        <div
          style={{
            transform: "scaleY(-1)",
            position: "relative",
            top: "-42px",
          }}
        >
          <GaugeChart
            id="gauge-chart"
            percent={0.85}
            arcPadding={0}
            cornerRadius={10}
            colors={["#FF5F6D", "transparent", "#FFA500"]}
            textColor="#000"
            needleColor="transparent"
            needleBaseColor="transparent"
            formatTextValue={() => ""}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "37%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          <span className="fw-bolder fs-2">100</span>
          <br />
          <span className="text-muted">التفتيش والامتثال</span>
        </div>
      </div>
    </div>
  );
};

export default InvestigatingCircularGuage;
