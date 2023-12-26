import { FC, Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Actions } from "../Actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";


export const ManagerCard: FC = () => {
  const intl = useIntl();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalHShow, setModalHShow] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  let manager = useSelector((state: RootState) => {
    return state?.orgManager.data;
  });
  
  useEffect(() => {
        
  }, [manager]);
  return (
    <div>
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
      <div className="d-flex flex-column mb-6">
        <label className="fs-6 fw-bold mb-5" htmlFor="classNameification">
          {intl.formatMessage({ id: "ManagerName" })}{" "}
        </label>

        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user-cog special"></i>
            </span>
          </div>
          <input
            className="form-control"
            placeholder={intl.formatMessage({
              id: "ManagerName",
            })}
          />
          <div className="h-110 d-flex" role="button">
            <span
              className="input-group-text"
              // data-bs-target="#Rega_modal_viewEmployee_hierarchy"
              // data-bs-toggle="modal"
              onClick={() => setModalHShow(true)}
            >
              <i className="bi bi-diagram-3 fs-3 text-muted"></i>
            </span>
          </div>
        </div>
      </div>

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
              <th className="min-w-100px text-center border-end border-bottom">
                {intl.formatMessage({ id: "Options" })}{" "}
              </th>
            </tr>
          </thead>

          <tbody>
                        
                <Fragment key={Math.random()}>
                  <tr>
                    <td className="text-center border-end border-bottom ">
                      {" "}
                      {manager?.managerId}
                    </td>
                    <td className="text-center border-end border-bottom">
                      <div className="d-flex align-items-center">
                        <div className=" ms-1 symbol symbol-50 symbol-light mr-4">
                          <span className="symbol-label">
                            <img
                              src={manager?.imageUrl}
                              className="h-75 align-self-end rounded-circle "
                              alt=""
                            />
                          </span>
                        </div>
                        <div>
                          <span className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                            {manager?.managerUserName}
                          </span>
                          <span className="text-muted font-weight-bold d-block">
                            {manager?.fromAppointmentDay?.getDate()}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="text-center border-end border-bottom">
                      {manager?.toAppointmentDay?.getDate()}
                    </td>
                    <td className="text-center border-end border-bottom">
                      <Actions id={1} />
                    </td>
                  </tr>
                </Fragment>
              
          
          </tbody>
        </table>
      </div>
    </div>
  );
};
