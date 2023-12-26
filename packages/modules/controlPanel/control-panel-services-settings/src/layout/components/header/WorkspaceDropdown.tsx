/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../helpers";
import { useSystems } from "../../../providers/systems-provider";

const WorkspaceDropdown: FC = () => {
  const intl = useIntl();
  let { systems } = useSystems();
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredData, setFilteredData] = useState(systems);

  // Effect to update filtered data when search term changes
  useEffect(() => {
    // Filter data based on search term
    const filtered = systems.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, systems]);

  // Function to handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {" "}
      <div
        className="spe-scroll menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold pt-4 fs-6 w-100 w-lg-950px menu-gray-600 menu-title-gray-700 menu-state-bullet-primary menu-state-title-primary menu-state-icon-primary menu-state-bg-light-primary fw-bold"
        data-kt-menu="true"
      >
        <div className="d-flex justify-content-center">
          <div className="position-relative w-md-400px ms-md-0 me-4">
            <div className="pt-2 pb-2">
                <div className="d-flex align-items-center position-relative">
                  <KTSVG
                    path="/media/icons/duotune/general/gen021.svg"
                    className="svg-icon-1 position-absolute text-muted mx-3"
                  />
                  <input
                    type="text"
                    data-kt-user-table-filter="search"
                    className="form-control form-control-solid px-11"
                    placeholder={intl.formatMessage({
                      id: "Search",
                    })}
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
            </div>
          </div>
        </div>
        <div className="row mx-0 mb-5">
          {filteredData.map((system) =>
            system.checked && !system.comingSoon && (
              <div className="col-lg-3 p-0" key={system.id}>
                <div className="menu-item px-0 mt-2">
                  <Link
                    to={{ pathname: system.pathname }}
                    className="menu-link px-3"
                  >
                    <span className="menu-icon mx-2">
                      <i className={system.icon}></i>
                    </span>
                    <span className="menu-title">{system.title}</span>
                  </Link>
                </div>
              </div>
            ) 
          )}
        </div>
        <div className="row rounded mx-0 pb-4 bg-light-primary">
          <h1 className="my-4 text-primary fs-2x px-10">
            {intl.formatMessage({ id: "ComingSoon" })}
          </h1>
          {filteredData.map((system) =>
            system.checked && system.comingSoon && (
              <div className="col-lg-3 p-0" key={system.id}>
                <div className="menu-item px-0 mt-2">
                  <Link
                    to={{ pathname: system.pathname }}
                    className="menu-link px-3"
                  >
                    <span className="menu-icon mx-2">
                      <i className={system.icon}></i>
                    </span>
                    <span className="menu-title">{system.title}</span>
                  </Link>
                </div>
              </div>
            ) 
          )}
        </div>
      </div>
    </>
  );
};

export { WorkspaceDropdown };
