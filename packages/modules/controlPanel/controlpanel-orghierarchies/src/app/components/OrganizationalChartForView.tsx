import { FC, Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import CheckBoxDropDown from "./CheckBoxDropDown";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../app/features/store";
import { useDispatch,useSelector } from "react-redux";
import { fetchOrgs } from "../app/features/orghierarchies-slice/orgSlice";

const OrganizationalChartForView: FC = () => {
  const intl = useIntl();
  let [tableData, setTableData] = useState([
    {
      id: 1,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "مدير الاداره ",
      date: "25 Jun 2022",
      img: "/media/avatars/300-3.jpg",
    },
    {
      id: 2,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "مدير الدعم الفني",
      img: "/media/avatars/300-3.jpg",
    },
    {
      id: 3,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "عضو الدعم الفني",
      img: "/media/avatars/300-3.jpg",
    },
  ]);

  let [showHierarchy1, setShowHierarchy1] = useState<boolean>(false);
  let [showHierarchy2, setShowHierarchy2] = useState<boolean>(false);
  let [showHierarchy3, setShowHierarchy3] = useState<boolean>(false);
  let [showHierarchy4, setShowHierarchy4] = useState<boolean>(false);
  const [category, setCategory] = useState([]);

  const optionsOne = [
    {
      id: 1,
      name: "الكل",
    },
    {
      id: 2,
      name: "قطاع أداره عامه",
    },
    {
      id: 3,
      name: "أداره",
    },
    {
      id: 4,
      name: "أداره تنفيذية",
    },
  ];

  
 
  return (
    <>
      <div className="card card-xl-stretch mb-xl-0">
        <div className="card-header px-3 pt-3 pb-2 mb-3  d-flex justify-content-between">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fs-4 my-5 ">
              {" "}
              {intl.formatMessage({ id: "OrganizationalChart" })}{" "}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted my-5">
              {intl.formatMessage({ id: "View&RepresentOrganizationalChart" })}{" "}
            </span>
          </h3>
        </div>
        <div className="card-body py-3 px-3">
          <div className="tab-content">
            <div className="row h-100 w-100">
              <div className="col-md-6">
                <div className="h-100 border border-end-0 border-start-1  border-bottom-0  border-top-0 border-secondary">
                  <div className="d-flex flex-stack flex-wrap px-0 border-0 pb-2 mb-4 ">
                    <h3 className="card-title align-items-start flex-column">
                      <p className="fw-bolder fs-4 mb-7 text-primary">
                        {intl.formatMessage({
                          id: "DepartmentsClassification",
                        })}{" "}
                      </p>
                    </h3>
                    <div className="d-flex">
                      <div className="card-toolbar card-diff-toolbar mx-5">
                        <div className="mx-auto mt-1">
                          <CheckBoxDropDown
                            selectedOptions={category}
                            setSelectedOptions={setCategory}
                            options={optionsOne}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tree_main mb-5">
                    <ul id="tree1" className="  tree tree3 list-unstyled">
                      <div
                        className="bg-light fs-5 mx-2 mb-7 d-flex justify-content-between align-items-center"
                        onClick={() => {
                          setShowHierarchy1((prevState) => {
                            return !prevState;
                          });
                        }}
                      >
                        <div>
                          {" "}
                          <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                          <a className="basic-item" role="button">
                            إدارة 1
                          </a>
                        </div>
                      </div>
                      {showHierarchy1 && (
                        <li className="basic-branch">
                          <ul className="list-unstyled">
                            <li className="branch fs-5 mb-7">
                              <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center ">
                                {intl.formatMessage({
                                  id: "DigitalRealEstate",
                                })}{" "}
                              </label>
                              <ul>
                                <li className="branch fs-5 mb-10">
                                  <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3">
                                    {intl.formatMessage({
                                      id: "Processes",
                                    })}{" "}
                                  </label>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="tree_main mb-5 ">
                    <ul id="tree1" className="  tree tree3 list-unstyled">
                      <div
                        className="bg-light fs-5 mx-2 mb-7 d-flex justify-content-between align-items-center"
                        onClick={() => {
                          setShowHierarchy2((prevState) => {
                            return !prevState;
                          });
                        }}
                      >
                        <div>
                          {" "}
                          <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                          <a className="basic-item" role="button">
                            إدارة 2
                          </a>
                        </div>
                      </div>
                      {showHierarchy2 && (
                        <li className=" branch">
                          <ul className="list-unstyled ">
                            <li className="branch fs-5 mb-7  ">
                              <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3  ">
                                {intl.formatMessage({
                                  id: "CommitteeManagement",
                                })}{" "}
                              </label>

                              <ul>
                                <li className="branch fs-5 mb-10">
                                  <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center ">
                                    {intl.formatMessage({
                                      id: "SpecimenRegistration",
                                    })}{" "}
                                  </label>

                                  <ul>
                                    <li className="branch fs-5 mb-10">
                                      <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3">
                                        {intl.formatMessage({
                                          id: "OrganizationAndLegalAffairs",
                                        })}{" "}
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="tree_main mb-5 ">
                    <ul id="tree1" className="  tree tree3 list-unstyled">
                      <div
                        className="bg-light fs-5 mx-2 mb-7 d-flex justify-content-between align-items-center"
                        onClick={() => {
                          setShowHierarchy3((prevState) => {
                            return !prevState;
                          });
                        }}
                      >
                        <div>
                          {" "}
                          <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                          <a className="basic-item" role="button">
                            إدارة 3
                          </a>
                        </div>
                      </div>
                      {showHierarchy3 && (
                        <li className=" branch">
                          <ul className="list-unstyled  ">
                            <li className="branch fs-5 mb-7  ">
                              <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3  ">
                                {intl.formatMessage({
                                  id: "StrategicPlanning",
                                })}{" "}
                              </label>

                              <ul>
                                <li className="branch fs-5 mb-10">
                                  <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3 ">
                                    {intl.formatMessage({
                                      id: "BusinessDevelopment",
                                    })}{" "}
                                  </label>

                                  <ul>
                                    <li className="branch fs-5 mb-10">
                                      <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3 ">
                                        {intl.formatMessage({
                                          id: "InstitutionalExcellence",
                                        })}{" "}
                                      </label>

                                      <ul>
                                        <li className="branch fs-5 mb-10">
                                          <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3 ">
                                            {intl.formatMessage({
                                              id: "CorporateAndInternationalCooperation",
                                            })}{" "}
                                          </label>

                                          <ul>
                                            <li className="branch fs-5 mb-10">
                                              <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center ">
                                                {intl.formatMessage({
                                                  id: "ResearchAndStudies",
                                                })}{" "}
                                              </label>
                                            </li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="tree_main mb-5 ">
                    <ul id="tree1" className="  tree tree3 list-unstyled">
                      <div
                        className="bg-light fs-5 mx-2 mb-7 d-flex justify-content-between align-items-center"
                        onClick={() => {
                          setShowHierarchy4((prevState) => {
                            return !prevState;
                          });
                        }}
                      >
                        <div>
                          {" "}
                          <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                          <a className="basic-item" role="button">
                            إدارة 4
                          </a>
                        </div>
                      </div>
                      {showHierarchy4 && (
                        <li className=" branch">
                          <ul className="list-unstyled  ">
                            <li className="branch fs-5 mb-7  ">
                              <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3">
                                {intl.formatMessage({
                                  id: "DocumentsAndArchivesCenter",
                                })}{" "}
                              </label>

                              <ul>
                                <li className="branch fs-5 mb-10">
                                  <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3 ">
                                    {intl.formatMessage({
                                      id: "HumanCapital",
                                    })}{" "}
                                  </label>

                                  <ul>
                                    <li className="branch fs-5 mb-10">
                                      <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3">
                                        {intl.formatMessage({
                                          id: "FinancialAffairs",
                                        })}{" "}
                                      </label>

                                      <ul>
                                        <li className="branch fs-5 mb-10">
                                          <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3 ">
                                            {intl.formatMessage({
                                              id: "AdministrativeAffairs",
                                            })}{" "}
                                          </label>

                                          <ul>
                                            <li className="branch fs-5 mb-10">
                                              <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3 ">
                                                {intl.formatMessage({
                                                  id: "ProcurementAndContracts",
                                                })}{" "}
                                              </label>
                                            </li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="h-50 pt-0 p-4 pt-0  ">
                  <p className="fw-bolder fs-4 mb-3">
                    {intl.formatMessage({ id: "RealEstateOperations" })} /{" "}
                    {intl.formatMessage({ id: "DigitalRealEstate" })} /{" "}
                    {intl.formatMessage({ id: "Processes" })}{" "}
                  </p>

                  <p className="fw-bolder fs-4 mb-3 my-5 text-primary">
                    {intl.formatMessage({
                      id: "AdministrationManagerData",
                    })}{" "}
                  </p>
                  <div className="table-responsive">
                    <table className="table table-rounded border  table-row-gray-200 align-middle gs-0 gy-4 text-center">
                      <thead>
                        <tr className="fw-bold bg-light">
                          <th className="min-w-100px text-center  border-end border-bottom">
                            ID
                          </th>
                          <th className="min-w-150px text-center  border-end border-bottom">
                            {intl.formatMessage({ id: "ManagerData" })}{" "}
                          </th>
                          <th className="min-w-100px text-center border-end border-bottom">
                            {intl.formatMessage({
                              id: "Date",
                            })}{" "}
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {tableData.slice(0, 1)?.map((item) => {
                          let { name, id, img, jobPosition, date } = item;
                          return (
                            <Fragment key={Math.random()}>
                              <tr>
                                <td className="text-center border-end border-bottom ">
                                  {" "}
                                  {id}
                                </td>
                                <td className="text-center border-end border-bottom">
                                  <div className="d-flex align-items-center justify-content-center">
                                    <div className=" ms-1 symbol symbol-50 symbol-light mr-4">
                                      <span className="symbol-label">
                                        <img
                                          src={img}
                                          className="h-75 align-self-end rounded-circle "
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                                        {name}
                                      </span>
                                      <span className="text-muted font-weight-bold d-block">
                                        {jobPosition}
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="text-center border-end border-bottom">
                                  {date}
                                </td>
                              </tr>
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <p className="fw-bolder fs-4 my-5 text-primary ">
                    {intl.formatMessage({
                      id: "ManagementMembersData",
                    })}{" "}
                  </p>
                  <div className="table-responsive">
                    <table className="table table-rounded border  table-row-gray-200 align-middle gs-0 gy-4 text-center">
                      <thead>
                        <tr className="fw-bold bg-light">
                          <th className="min-w-100px text-center  border-end border-bottom">
                            ID
                          </th>
                          <th className="min-w-150px text-center  border-end border-bottom">
                            {intl.formatMessage({ id: "EmployeesData" })}{" "}
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {tableData?.map((item) => {
                          let { name, id, img, jobPosition } = item;
                          return (
                            <Fragment key={Math.random()}>
                              <tr>
                                <td className="text-center border-end border-bottom ">
                                  {" "}
                                  {id}
                                </td>
                                <td className="text-center border-end border-bottom">
                                  <div className="d-flex align-items-center">
                                    <div className=" ms-1 symbol symbol-50 symbol-light mr-4">
                                      <span className="symbol-label">
                                        <img
                                          src={img}
                                          className="h-75 align-self-end rounded-circle "
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                                        {name}
                                      </span>
                                      <span className="text-muted font-weight-bold d-block">
                                        {jobPosition}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OrganizationalChartForView };
  function useSelectors(arg0: (state: RootState) => any) {
    throw new Error("Function not implemented.");
  }

