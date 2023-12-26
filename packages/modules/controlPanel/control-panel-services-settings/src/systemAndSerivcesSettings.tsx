import { FC } from "react";
import { RightToolbar } from "./partials/RightToolbar";
import { SystemsAndservicesTable } from "./components/SystemsAndservicesTable";
import { SystemsAndServicesToolbar } from "./toolbar/systemsAndServicesToolbar";

const SystemAndSerivcesSettings: FC = () => {
  return (
    <>
      <SystemsAndServicesToolbar />
      <SystemsAndservicesTable />
      <RightToolbar />
    </>
  );
};

export { SystemAndSerivcesSettings };
