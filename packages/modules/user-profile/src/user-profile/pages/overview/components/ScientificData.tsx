import React, { useState, Fragment } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { SystemPagination } from "../../../../partials/SystemPagination";
import { Actions } from "./Actions";

function ScientificData() {
  let intl = useIntl();
  let [tableData, setTableData] = useState([
    {
      id: 1,
      certificate: "دكتوراه",
      university: "الامير سلطان",
      specialization: "اداره الاعمال",
      date: "2023",
      practicalExperiences: "دوره تدريبيه في اداره الاعمال ",
      attachments: {
        title: "Managment",
        subtitle: "19mb",
        img: "/media/pmo/docIcon.png",
      },
    },
    {
      id: 2,
      certificate: "ماجيستير",
      university: "الامير فهد",
      specialization: "اداره الاعمال",
      date: "2020",
      practicalExperiences: "دوره تدريبيه في اداره الاعمال ",
      attachments: {
        title: "Mohamed Ali",
        subtitle: "19mb",
        img: "/media/pmo/pdfIcon.png",
      },
    },
    {
      id: 3,
      certificate: "بكالوريوس",
      university: "الملك فيصل",
      specialization: "اداره الاعمال",
      date: "2017",
      practicalExperiences: "دوره تدريبيه في اداره الاعمال ",
      attachments: {
        title: "Business",
        subtitle: "19mb",
        img: "/media/pmo/docIcon.png",
      },
    },
  ]);
  return (
    <div className="card shadow p-6 ">
      <div className="d-flex justify-content-between px-3 mb-2">
        <p className="fw-bolder fs-4 ">
          {" "}
          {intl.formatMessage({ id: "ScientificDataAndExperiences" })}
        </p>
        <div className="btn btn-sm  btn-primary text-white">
          <Link to="/user-profile/overview/add-scientific-data">
            <i className="fa-solid fa-plus fs-4"></i>
            <span className="text-white">
              {" "}
              {intl.formatMessage({ id: "Add" })}
            </span>
          </Link>
        </div>
      </div>
      <hr />
      <div className="mt-2 px-3">
        <div className="table-responsive">
          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
              <tr className="fw-bolder text-muted">
                <th className="min-w-50px text-center">
                  {intl.formatMessage({ id: "ID" })}
                </th>
                <th className="min-w-100px text-center">
                  {intl.formatMessage({
                    id: "TypeOfQualification/Certificate",
                  })}{" "}
                </th>
                <th className="min-w-100px text-center">
                  {intl.formatMessage({
                    id: "University/Location",
                  })}{" "}
                </th>
                <th className="min-w-100px text-center">
                  {intl.formatMessage({
                    id: "Specialization",
                  })}{" "}
                </th>
                <th className="min-w-100px text-center">
                  {intl.formatMessage({
                    id: "Date",
                  })}{" "}
                </th>
                <th className="min-w-100px text-center">
                  {intl.formatMessage({
                    id: "PracticalExperiences",
                  })}{" "}
                </th>
                <th className="min-w-150px text-center">
                  {intl.formatMessage({
                    id: "Attachments",
                  })}{" "}
                </th>
                <th className="min-w-50px text-center">
                  {intl.formatMessage({ id: "Procedures" })}
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item: any, index) => {
                let {
                  id,
                  certificate,
                  university,
                  specialization,
                  date,
                  practicalExperiences,
                  attachments: { title, subtitle, img },
                } = item;
                return (
                  <Fragment key={Math.random()}>
                    <tr>
                      <td className="text-center">{id}</td>
                      <td className="text-center text-primary">
                        {certificate}
                      </td>
                      <td className="text-center">{university}</td>
                      <td className="text-center">{specialization}</td>
                      <td className="text-center">{date}</td>
                      <td className="text-center">{practicalExperiences}</td>
                      <td>
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
                              {title}
                            </span>
                            <span className="text-muted font-weight-bold d-block">
                              {subtitle}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <Actions id={id} />
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
          <SystemPagination />
        </div>
      </div>
    </div>
  );
}

export default ScientificData;
