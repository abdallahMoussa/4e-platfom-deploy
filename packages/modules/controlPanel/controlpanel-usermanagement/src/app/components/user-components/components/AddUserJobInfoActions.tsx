import { FC, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { DeleteJobInfoPopup } from "../popups/DeleteJobInfoPopup";
import Swal from "sweetalert2";

type ActionProps = {
  id: any;
  informationJobsForTable: any;
  setInformationJobsForTable: any;
  handleEditForJob: any;
};

export const AddUserJobInfoActions: FC<ActionProps> = ({
  id,
  informationJobsForTable,
  setInformationJobsForTable,
  handleEditForJob,
}) => {
  const intl = useIntl();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "DeletedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          split
          variant="none"
          className=" p-0 text-center"
          id="dropdown-custom-2"
        >
          <i className="bi bi-three-dots fs-2" style={{ color: "#7e8299" }}></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link
              to={""}
              onClick={() => {
                handleEditForJob(id);
              }}
              className="menu-link px-3 text-primary active-text-light"
            >
              {/* <span className="svg-icon svg-icon-3 ms-2">
                  <KTSVG path="/media/icons/duotune/general/gen087.svg" />
                </span> */}
              {intl.formatMessage({ id: "Edit" })}
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <a
              //   onClick={() => setShowDelete(true)}
              className="menu-link px-3 text-danger"
              onClick={() => {
                setInformationJobsForTable(
                  informationJobsForTable.filter((item: any) => {
                    return item?.id != id;
                  })
                );
                showSuccessAlert();
              }}
            >
              {/* <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen088.svg" />
              </span> */}
              {intl.formatMessage({ id: "Delete" })}
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {showDelete ? (
        <>
          <div className="modal fade" aria-hidden="true">
            <DeleteJobInfoPopup
              handleCloseDelete={handleCloseDelete}
              showDelete={showDelete}
              id={id}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
