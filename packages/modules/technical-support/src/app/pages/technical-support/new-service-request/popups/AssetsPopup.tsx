import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../app/helpers";
import Swal from "sweetalert2";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";

const AssetsPopup: React.FC = () => {
  const intl = useIntl();

  let showAlert = () => {
    Swal.fire({
      text: "تمت الاضافه بنجاح",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "موافق",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  let [assetsTableData, setassetsTableData] = useState([
    {
      id: 1,
      serialNumber: 12345,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 2,
      serialNumber: 42365,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 3,
      serialNumber: 16545,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 4,
      serialNumber: 12367,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 5,
      serialNumber: 11145,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 6,
      serialNumber: 17765,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
  ]);
  return (
    <Fragment>
      <div
        className="modal fade"
        id="Rega_modal_assets"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content rounded">
            <div className="modal-header pb-0 border-0 justify-content-end">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <KTSVG
                  path="/media/icons/duotune/general/gen106_close.svg"
                  className="svg-icon-4 me-1"
                />
              </div>
            </div>
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15 mb-7">
              <div className="mb-9 text-center">
                <h1 className="mb-3">
                  {intl.formatMessage({
                    id: "AssetsThatHaveTechnicalMalfunction",
                  })}
                </h1>
                <h6 className="mb-2 text-muted">
                  {intl.formatMessage({
                    id: "PleaseSelectAssets",
                  })}
                </h6>
              </div>
              <hr />
              <br />
              <br />
              <div>
                <form
                  className="d-block w-100"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="table-responsive mb-3">
                    <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                      <thead>
                        <tr className="fw-bolder">
                          <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                            {intl.formatMessage({ id: "SerialNumber" })}
                          </th>

                          <th className="px-2 pb-3 min-w-50px  text-muted">
                            {intl.formatMessage({ id: "ItemName" })}
                          </th>
                          <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                            {intl.formatMessage({ id: "Trademark" })}{" "}
                          </th>
                          <th className="px-2 pb-3 min-w-50px  text-muted">
                            {intl.formatMessage({ id: "ItemCategory" })}{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {assetsTableData?.map((item) => {
                          let {
                            id,
                            serialNumber,
                            tradeMark,
                            category,
                            itemName,
                          } = item;
                          return (
                            <Fragment key={Math.random()}>
                              <tr>
                                <td>
                                  <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                    <div className="d-flex mx-4  form-check form-check-custom form-check-success form-check-solid">
                                      <input
                                        className="form-check-input  form-check-success"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                    </div>
                                    <div>{serialNumber}</div>
                                  </div>
                                </td>

                                <td className="text-center">{itemName}</td>
                                <td className="text-center">{tradeMark}</td>
                                <td className="text-center">{category}</td>
                              </tr>
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                    <SystemPagination />
                  </div>
                  <div className="mt-5 mb-5 col-12 col-lg-8 mx-auto">
                    <div className="outputCard card-diff-toolbar pt-5 w-100 mt-3 d-flex justify-content-center">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <div
                          data-bs-dismiss="modal"
                          className="btn btn-secondary mx-3 text-center w-100"
                        >
                          {intl.formatMessage({ id: "Cancel" })}
                        </div>
                        <button
                          type="button"
                          data-bs-dismiss="modal"
                          className="btn btn-success mx-3 text-center w-100 border-0"
                          onClick={() => {
                            showAlert();
                          }}
                        >
                          {intl.formatMessage({ id: "Add" })}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AssetsPopup;
