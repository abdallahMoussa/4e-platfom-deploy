import { FC, Fragment, useState } from "react";
import { EmployeeActions } from "../employee-actions";
import { useIntl } from "react-intl";

export const OrgUsers: FC = () => {
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

  return (
    <div>
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

              <th className="min-w-100px text-center border-end border-bottom">
                {intl.formatMessage({ id: "Options" })}{" "}
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

                    <td className="text-center border-end border-bottom">
                      <EmployeeActions id={1} />
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
