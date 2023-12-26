import React, { ChangeEvent, FC, useEffect } from "react";
import { useIntl } from "react-intl";
//import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  changePasswordProps,
  changePasswordSchema,
} from "../../../validation/change-password-validation";
import { changePassword } from "../../../features/users-slice/changePasswordSlice";
import { fetchUser } from "../../../features/users-slice/userSlice";
import { useLocation, useParams } from "react-router-dom";

type ChangePasswordPopupProps = {
  showChangePasswordPopup?: any;
  handleCloseChangePasswordPopup: ()=>any;
  id?: number | Number | string;
};

export const ChangePasswordPopup: FC<ChangePasswordPopupProps> = ({
  showChangePasswordPopup,
  handleCloseChangePasswordPopup,
  id,
}) => {
  const intl = useIntl();
  let dispatch = useDispatch();
  let location = useLocation();
  let { id: idFromUrl } = useParams();

  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "ModifiedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-success",
      },
    });
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<changePasswordProps>({
    resolver: yupResolver(changePasswordSchema),
    mode: "all",
    reValidateMode: "onSubmit",
  });
  const EditPassword = async (formValues: changePasswordProps) => {
    let body = {
      id: location.pathname.includes("admin-panel-users/details")
        ? idFromUrl
        : id,
      oldPassword: "123456Aa",
      newPassword: formValues?.newPassword,
    };
    dispatch(changePassword(body as any) as any);
  };
  let { message } = useSelector((state: RootState) => {
    return state?.changePassword;
  });

  useEffect(() => {
    if (message == "passwordChangedSuccessfully") {
      showSuccessAlert();
      handleCloseChangePasswordPopup();
    }
  }, [message]);

  useEffect(() => {
    return () => {
      dispatch({ type: "changePassword/pending" } as any);
    };
  }, []);
  return (
    <>
      <div className="modal-dialog modal-dialog-centered mw-1000px">
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showChangePasswordPopup}
          onHide={handleCloseChangePasswordPopup}
        >
          <div className="card">
            <Modal.Header
              closeButton
              style={{
                alignItems: intl.locale == "ar" ? "flex-start" : "center",
                flexDirection: intl.locale == "en" ? "column-reverse" : "row",
              }}
            >
              <div className="card-header w-100 px-1 d-flex justify-content-center pb-2  border-bottom-0 mt-10">
                <Modal.Title>
                  <h2 className="flex-column align-items-center">
                    <span className="fw-bolder mb-2 fs-3">
                      {intl.formatMessage({
                        id: "ChangePassword",
                      })}
                    </span>
                  </h2>
                </Modal.Title>
              </div>
            </Modal.Header>

            <form onSubmit={handleSubmit(EditPassword)}>
              <Modal.Body>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "NewPassword" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text h-100">
                            <i className="special fas fa-key"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder={intl.formatMessage({
                            id: "NewPassword",
                          })}
                          {...register("newPassword")}
                        />
                        {DisplayErrorMessage(
                          errors?.newPassword?.message,
                          intl
                        )}
                      </div>

                      <span className="d-block text-muted">
                        {intl.formatMessage({ id: "PasswordHint" })}
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "ConfirmNewPassword",
                        })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text h-100">
                            <i className="special fas fa-key"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder={intl.formatMessage({
                            id: "ConfirmNewPassword",
                          })}
                          {...register("passwordConfirmation")}
                        />
                        {DisplayErrorMessage(
                          errors?.passwordConfirmation?.message,
                          intl
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="mt-8 mb-5 col-12 col-lg-7 mx-auto">
                  <div className="text-center">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      onClick={handleCloseChangePasswordPopup}
                    >
                      {intl.formatMessage({ id: "Cancel" })}
                    </button>
                    <button type="submit" className="btn btn-primary">
                      <span className="indicator-label">
                        {intl.formatMessage({ id: "Edit" })}
                      </span>
                      <span className="indicator-progress">
                        {intl.formatMessage({ id: "PleaseWait" })}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                </div>
              </Modal.Footer>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};
const DisplayErrorMessage = (error: any, intl: any) => {
  return (
    <div
      className="invalid-feedback"
      style={{
        display: error ? "block" : "none",
      }}
    >
      <p>
        {error
          ? intl.formatMessage({
              id: error,
            })
          : ""}
      </p>
    </div>
  );
};
