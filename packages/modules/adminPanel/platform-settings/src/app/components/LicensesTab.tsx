import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useSystems } from "../providers/systems-provider";

function LicensesTab() {
  let { systems, setSystems } = useSystems();
  let intl = useIntl();

  // const handleCheckboxChange = (index) => {
  //   setSystems((prevMenuItems) => {
  //     const updatedMenuItems = [...prevMenuItems];
  //     updatedMenuItems[index].checked = !updatedMenuItems[index]?.checked;
  //     return updatedMenuItems;
  //   });
  // };

  const handleCheckboxChange = (index:number) => {
    setSystems((prevMenuItems:any) => {
      const updatedMenuItems = [...prevMenuItems];
      updatedMenuItems[index].checked = !updatedMenuItems[index]?.checked;
      // localStorage.setItem("systems", JSON.stringify(updatedMenuItems));
      return updatedMenuItems;
    });
  };

  // useEffect(() => {
  //   localStorage.setItem("systems", JSON.stringify(systems));
  // }, [systems]);

  // useEffect(() => {
  //   setSystems(JSON.parse(localStorage.getItem("systems")));
  // }, []);

  return (
    <Fragment>
      <div className="mb-3">
        <p className="fs-5 text-primary mb-3 fw-bolder mb-6">
          {" "}
          {intl.formatMessage({ id: "HideAndShowSystems" })}
        </p>
        {/* <p className="fs-6 text-muted mb-9">
        {" "}
        {intl.formatMessage({
          id: "AddMainItemsAndItsLinksToTheirSitesIntoWebsite",
        })}
      </p> */}
        <div className="d-flex align-items-center row">
          {systems?.map((system, index) => (
            <Fragment key={system.id}>
              <div className="col-12 col-md-3 col-sm-4 mb-5 ">
                <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id={system?.title}
                    checked={system?.checked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </div>
                <label htmlFor={system?.title} className="px-3">
                  <i className={`${system?.icon} mx-2`}></i>
                  <span className="fs-5">{system?.title}</span>
                </label>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default LicensesTab;
