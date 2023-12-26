import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { SystemPagination } from "../../../partials/SystemPagination";
import { KTSVG } from "../../../../helpers";
import { DeletePopup } from "../../../partials/DeletePopup";

export const ApprovalsTable: FC = () => {
  const intl = useIntl();
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  const Employees = [
    {
      id: 1,
      employeeName: "محمد على",
      notes: intl.formatMessage({ id: "Note1" }),
    },
    {
      id: 2,
      employeeName: "حسين ابراهبم",
      notes: intl.formatMessage({ id: "Note2" }),
    },
    {
      id: 3,
      employeeName: "محمد على",
      notes: intl.formatMessage({ id: "Note3" }),
    },
  ];

  return (
    <>
      <div className="table-responsive">
        <table
          id="kt_project_users_table"
          className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder"
        >
          <thead className="fs-7 text-gray-400 text-uppercase">
            <tr>
              <th className="min-w-80px text-center">
                {intl.formatMessage({ id: "EmployeeName" })}
              </th>
              <th className="min-w-100px text-center">
                {intl.formatMessage({ id: "Notes" })}
              </th>
              <th className="min-w-100px text-center">
                {intl.formatMessage({ id: "Procedures" })}
              </th>
            </tr>
          </thead>

          <tbody>
            {Employees?.map((employee) => (
              <tr className="text-center">
                <td>{employee?.employeeName}</td>
                <td>{employee?.notes}</td>
                <td className="text-center">
                  <span
                    role="button"
                    onClick={(event) => {
                      event.preventDefault();
                      setModalDShow(true);
                    }}
                    className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center text-muted "
                  >
                    <span className="svg-icon svg-icon-3 mx-2">
                      <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <SystemPagination />
      </div>
      <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
      </div>
    </>
  );
};
