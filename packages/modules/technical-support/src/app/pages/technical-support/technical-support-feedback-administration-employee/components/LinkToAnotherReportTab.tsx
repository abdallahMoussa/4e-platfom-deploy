import React, { FC, Fragment, useState } from "react";
import { useIntl } from "react-intl";
interface Iprop {
  active: any;
}

const LinkToAnotherReportTab: FC<Iprop> = ({ active }) => {
  let intl = useIntl();
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes({ ...checkboxes, [checkboxName]: !checkboxes[checkboxName] });
  };
  let [reportsData, setReportsData] = useState([
    { id: 1, number: 12345, title: "بلاغ عطل فني" },
    { id: 2, number: 59845, title: "بلاغ عطل في الايميل" },
    { id: 3, number: 65345, title: "بلاغ عطل في الماوس" },
    { id: 4, number: 15375, title: "بلاغ عطل في الجهاز" },
  ]);
  return (
    <Fragment>
      <div
        className="tab-pane fade show"
        id="link"
        role="tabpanel"
        aria-labelledby="link-tab"
      >
        <div className="position-relative text-center py-4 w-90 mb-4 mx-auto">
          <input
            type="search"
            name="searchForProject"
            className="input input-group searchBoxDesign search_input"
            id="searchForProject"
            placeholder={intl.formatMessage({
              id: "EnterTheReportNumberOrAddress",
            })}
          />
          <i className="fa-solid fa-light fa-magnifying-glass my-magnify fs-3 text-muted fa-fw position-absolute"></i>
        </div>
        {reportsData?.map((item, index, arr) => {
          let { id, number, title } = item;
          return (
            <Fragment key={Math.random()}>
              <div
                className={`d-flex justify-content-between align-items-center my-5 pb-3 mx-5 h-fit ${
                  index !== arr.length - 1 ? "my-gray-dash-border" : ""
                }`}
              >
                <div className="d-flex align-items-center ">
                  <div className="d-flex mx-3 form-check form-check-custom form-check-success form-check-solid">
                    <input
                      className="form-check-input  form-check-success"
                      type="checkbox"
                      id="flexCheckDefault"
                      checked={checkboxes[`checkbox${id}`]}
                      onChange={() => handleCheckboxChange(`checkbox${id}`)}
                    />
                  </div>
                  <p className="text-muted p-0 m-0 mx-3">{number}</p>
                  <p className="text-primary p-0 m-0 fw-bolder">{title}</p>
                </div>
                {checkboxes[`checkbox${id}`] ? (
                  <Fragment>
                    <div
                      className="w-20px h-20px d-flex justify-content-center align-items-center myrounded bg-danger text-white cursor-pointer"
                      onClick={() => {
                        setReportsData(
                          reportsData
                            .slice(0, index)
                            .concat(reportsData.slice(index + 1))
                        );
                      }}
                    >
                      x
                    </div>
                  </Fragment>
                ) : (
                  ""
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default LinkToAnotherReportTab;
