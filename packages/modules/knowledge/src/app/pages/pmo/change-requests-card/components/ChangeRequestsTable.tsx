import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { RiFilter2Fill } from "react-icons/ri";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../partials/SystemPagination";
import { DeletePopup } from "../../../partials/DeletePopup";
import { FilterChangesPopup } from "../popup/filter-changes-popup";

const ChangeRequestsTable: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  const intl = useIntl();
  const changes = [
    {
      name: "اسم المشروع",
      OrdersNum: 14,
      lastOrderDate: "25 Jun 2022",
    },
    {
      name: "اسم المشروع",
      OrdersNum: 20,
      lastOrderDate: "25 Jun 2022",
    },
    {
      name: "اسم المشروع",
      OrdersNum: 25,
      lastOrderDate: "25 Jun 2022",
    },
  ];

  const getPriority = (ordersNum: number) => {
    if (ordersNum > 20) {
      return (
        <div className="d-inline py-2 px-7 fw-bolder fs-6 badgex badge-light-danger">
          {intl.formatMessage({ id: "BIG" })}
        </div>
      );
    } else if (ordersNum <= 20 && ordersNum >= 15) {
      return (
        <div className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-warning">
          {intl.formatMessage({ id: "MEDIUM" })}
        </div>
      );
    } else {
      return (
        <div className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-secondary text-muted">
          {intl.formatMessage({ id: "LOW" })}
        </div>
      );
    }
  };

  return (
    <div className="my-10">
      <div className="card card-xl-stretch mb-xl-8">
        <div className="card-header border-0 pt-3 pb-2 mb-2">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-4 mb-1 ">
              {intl.formatMessage({ id: "ChangeRequests" })}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted">
              {" "}
              {intl.formatMessage({ id: "CHANGE.REQUESTS.TABLE" })}
            </span>
          </h3>
          <div className="card-toolbar ">
            <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
              <div
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_filter-changes"
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
                className="btn btn-secondary w-bolder mx-1 text-center mw-100"
              >
                <RiFilter2Fill
                  size={17}
                  // data-bs-toggle="modal"
                  // data-bs-target="#Rega_modal_filter-changes"
                />
                {intl.formatMessage({ id: "Filtering" })}
              </div>

              {/* <Link to={'/pmo-add-new-change-request'}
              className=" btn btn-primary fw-bolder  mx-1 text-center mw-100">
              {intl.formatMessage({ id: "ADD.NEW.CHANGE" })}    
              </Link>   */}
            </div>
          </div>
        </div>
        <div className="card-body py-3">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="REGA_table_widget_5_tab_1"
            >
              <div className="table-responsive">
                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {" "}
                        {intl.formatMessage({ id: "ProjectName" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {" "}
                        {intl.formatMessage({ id: "ORDERS.NUMBER" })}
                      </th>
                      <th className="px-2 pb-3 min-w-100px max-w-350px">
                        {intl.formatMessage({ id: "PRIORITY" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "DATE.OF.LAST.ORDER" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {changes?.map((change, index) => (
                      <tr key={index} className="align-middle ">
                        <td className="d-flex align-items-center justify-content-center py-8">
                          <Link to={"/pmo-change-request-details"}>
                            <div className="d-flex flex-column mx-3">
                              <label
                                role="button"
                                className="text-center text-primary fw-bolder ms-auto"
                              >
                                {change?.name}
                              </label>
                            </div>
                          </Link>
                        </td>
                        <td className="fw-bolder fs-5 ">{change?.OrdersNum}</td>
                        <td>{getPriority(change?.OrdersNum)}</td>
                        <td>
                          <span>{change?.lastOrderDate}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
                <SystemPagination />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
      </div> */}
      <FilterChangesPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
    </div>
  );
};

export default ChangeRequestsTable;
