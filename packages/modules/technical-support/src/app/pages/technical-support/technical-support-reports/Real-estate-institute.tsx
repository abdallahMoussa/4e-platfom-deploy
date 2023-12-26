import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { RealEstateInstituteToolbar } from "./toolbar/RealEstateInstituteToolbar";
import RealEstateInstituteCharts from "./components/RealEstateInstituteCharts";
import { RealEstateInstituteTable } from "./components/RealEstateInstituteTable";

const RealEstateInstitute: FC = () => {
  return (
    <>
      <RealEstateInstituteToolbar />
      <RealEstateInstituteCharts />
      <RealEstateInstituteTable />
      <RightToolbar />
    </>
  );
};

export { RealEstateInstitute };