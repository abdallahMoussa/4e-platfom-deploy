import { FC, useEffect } from "react";
import { useIntl } from "react-intl";
//import { KTSVG } from "../../helpers";
import { Row } from "react-bootstrap";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { useSearchParams } from "react-router-dom";
import { fetchUsers } from "../../../features/users-slice/usersSlice";
import { deleteUser } from "../../../features/users-slice/deleteUserSlice";

type DeletePopupProps = {
  id?: number | string | Number;
  handleDelete?: (id: number, additionalData: {}) => void;
  additionalData?: {};
  showDelete?: any;
  handleCloseDelete?: any;
};

export const DeleteUserPopup: FC<DeletePopupProps> = ({
  showDelete,
  handleCloseDelete,
  id = 0,
  handleDelete = null,
  additionalData = {},
}) => {
  const intl = useIntl();
  let dispatch = useDispatch();
  let message = useSelector((state: RootState) => {
    return state?.deleteUser?.message;
  });

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
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let params: any = {
      pageSize: searchParams.get("pageSize"),
      pageNumber: searchParams.get("pageNumber"),
    };
    if (message == "userRemovedSuccessfully") {
      handleCloseDelete();
      showSuccessAlert();
      dispatch(fetchUsers(params) as any);
    }
  }, [message]);

  return (
    <div className="modal-dialog modal-dialog-centered mw-650px">
      <Modal centered show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header
          closeButton
          style={{
            alignItems: intl.locale == "ar" ? "flex-start" : "center",
            flexDirection: intl.locale == "en" ? "column-reverse" : "row",
          }}
        >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center my-5 pb-4">
            <div className="text-center">
              <h3> {intl.formatMessage({ id: "ConfirmDeletion" })}</h3>
            </div>
          </Row>

          <Row className="justify-content-center mb-5">
            <div className="text-center">
              <h5>
                {intl.formatMessage({ id: "AreYouSureToDeleteThisItem" })}
              </h5>
            </div>
          </Row>
        </Modal.Body>

        <Modal.Footer className="justify-content-center py-2">
          <div className="row">
            <div className="col-12 col-lg-7 mx-auto my-2 pb-2">
              <div className="outputCard card-diff-toolbar w-100 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center w-100">
                  <button
                    type="reset"
                    className="btn btn-secondary me-3 w-100"
                    onClick={handleCloseDelete}
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </button>
                  <div
                    // onClick={() => {
                    //   dispatch(deleteUser(id) as any);
                    // }}
                    className="  btn btn-danger me-5 w-100 "
                  >
                    <span className="indicator-label">
                      {intl.formatMessage({ id: "Delete" })}
                    </span>
                    <span className="indicator-progress">
                      {intl.formatMessage({ id: "Deleting" })}
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
