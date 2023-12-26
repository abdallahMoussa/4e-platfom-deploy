import { FC, Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Row } from "react-bootstrap";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { RenderAgreedPopup } from "./RenderAgreedPopup";
import { useDispatch } from "react-redux";
import { deleteOrgAsync } from "../features/orghierarchies-slice/delete-orgSlice";
type DeletePopupProps = {
  OrgId: string;
  handleDelete?: (id: string, additionalData: {}) => void;
  additionalData?: {};
  showDelete?: any;
  handleCloseDelete?: any;
};
export const DeleteDepartmentPopup: FC<DeletePopupProps> = ({
  showDelete,
  handleCloseDelete,
  OrgId ,
 
  additionalData = {},
}) => {
  const intl = useIntl();
  const [showAgreed, setShowAgreed] = useState(false);
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
   const dispatch=useDispatch();
  const handleDelete=()=>{
  

  dispatch(deleteOrgAsync(OrgId)as any);

  }
  return (
    <Fragment>
      <div className="modal fade" aria-hidden="true">
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
            <Row className="justify-content-center mt-5 mb-20">
              <div className="text-center">
                <h1>{intl.formatMessage({ id: "DeleteDepartment/Sector" })}</h1>
              </div>
            </Row>
            <Row className="justify-content-center mb-5">
              <div className="text-center">
                <h5 className="mb-3">هذه الاداره او القطاع تابع له موظفين</h5>
                <h5>من فضلك قم بنقل الموظفين اولا</h5>
              </div>
            </Row>

            <div className="row">
              <div className="col-12 col-lg-7 mx-auto mb-20 mt-5">
                <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center w-100">
                    <button
                      type="submit"
                      onClick={() => {
                        setShowAgreed(true);
                      }}
                      className="btn btn-success me-5 w-50"
                    >
                      <span className="indicator-label">
                        {intl.formatMessage({ id: "Delete" })}
                      </span>
                      <span className="indicator-progress">
                        {intl.formatMessage({ id: "Agree" })}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                      onClick={() => {
                        handleCloseDelete();
                        showSuccessAlert();
                        if (handleDelete) {
                          handleDelete();
                        }
                      }}
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
      <div className="modal fade" aria-hidden="true">
        <RenderAgreedPopup
          handleClose={() => {
            setShowAgreed(false);
          }}
          show={showAgreed}
          id={+OrgId}
        />
      </div>
    </Fragment>
  );
};
