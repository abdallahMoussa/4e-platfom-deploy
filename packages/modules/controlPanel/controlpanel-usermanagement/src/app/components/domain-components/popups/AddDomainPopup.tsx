import React, { FC, Fragment, useEffect, useState } from "react";
import { Modal, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
// import { KTSVG } from "../../../../helpers";
// import CheckBoxDropDown from "../../../pmo/output-review-tool/components/CheckBoxDropDown";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  domainProps,
  domainSchema,
} from "../../../validation/add-domain-validation";

import { useDispatch, useSelector } from "react-redux";
import { addDomain } from "../../../features/domains-slice/addDomainSlice";
import { fetchDomains } from "../../../features/domains-slice/domainsSlice";
import { useSearchParams } from "react-router-dom";

type inputTypes = {
  id: number;
  type: string;
  name: string;
  isRequired: boolean;
  inputName: string;
};

type AddDomainPopupProps = {
  showAddDomain: boolean;
  handleClose: () => void;
};
let language = localStorage?.getItem("selectedLang");

export const AddDomain: FC<AddDomainPopupProps> = ({
  showAddDomain,
  handleClose,
}) => {
  const intl = useIntl();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<domainProps>({
    resolver: yupResolver(domainSchema),
    mode: "all",
    reValidateMode: "onChange",
  });
  let dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const [inputs, setInputs] = useState<inputTypes[]>([
    {
      id: 1,
      type: "text",
      name: intl.formatMessage({
        id: "DomainName",
      }),
      inputName: "domainName",
      isRequired: true,
    },
    {
      id: 2,
      type: "text",
      name: intl.formatMessage({
        id: "ShorterName",
      }),
      isRequired: false,
      inputName: "domainNickName",
    },
    {
      id: 3,
      type: "text",
      name: intl.formatMessage({
        id: "Username",
      }),
      isRequired: true,
      inputName: "userName",
    },
    {
      id: 4,
      type: "text",
      name: intl.formatMessage({
        id: "Password",
      }),
      isRequired: true,
      inputName: "password",
    },
  ]);
  // let { message } = useSelector((state: RootState) => {
  //   return state?.addDomain;
  // });
  let [message,setMessage]=useState<string>("")
  let showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "AddedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  const AddDomain = async (formValues: domainProps) => {
    let body = {
      domainName: formValues.domainName,
      domainNickName: formValues.domainNickName,
      userName: formValues.userName,
      password: formValues.password,
      url: "a",
      value: "a",
      actionName: 0,
      body: "a",
      key: "a",
    };
    dispatch(addDomain(body as any) as any).then((res:any)=>{
      console.log("res",res)
      return setMessage(res?.payload?.message)});
  };

  useEffect(() => {
    let params: any = {
      pageSize: searchParams.get("pageSize"),
      pageNumber: searchParams.get("pageNumber"),
    };
    if (message == "domainAddedSuccessfully") {
      showSuccessAlert();
      dispatch(fetchDomains(params) as any);
      reset();
      handleClose();
    }
    return () => {
      // dispatch({ type: "addDomain/pending" });
      setMessage("")
    };
  }, [message]);
console.log("message",message)
  return (
    <>
      <div className="modal fade" id="rega_modal_add_domain" aria-hidden="true">
        <Modal centered show={showAddDomain} onHide={handleClose} size="xl">
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
            <div className="card">
              <div className="card-body mx-5">
                <form onSubmit={handleSubmit(AddDomain)}>
                  <div className="card-header px-1 pb-2 mb-5 flex-column">
                    <h2 className="flex-column align-items-center align-self-center mb-5">
                      <span className="fw-bolder mb-2">
                        {intl.formatMessage({
                          id: "AddDomain",
                        })}
                      </span>
                    </h2>
                    <div className="my-3">
                      <h2 className="flex-column align-items-center">
                        <span className="fw-bolder mb-2">
                          {intl.formatMessage({
                            id: "DomainInformation",
                          })}
                        </span>
                      </h2>
                      <span className="text-muted fw-lighter">
                        {intl.formatMessage({
                          id: "PleaseEnterTheFollowingData",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    {inputs.map((input) => (
                      <Fragment key={input.id}>
                        <div className="col-6">
                          <div className="mb-2 pt-2 pb-3">
                            <label
                              className={`form-label px-2  fs-6 text-gray-700 ${
                                input.isRequired ? "required" : ""
                              }`}
                            >
                              {input.name}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i
                                    className={`${
                                      input.id === 1
                                        ? "special fas fa-vector-square"
                                        : input.id === 2
                                        ? "special fas fa-clone"
                                        : input.id === 3
                                        ? "bi bi-person-circle special"
                                        : "fas fa-key special"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={input.name}
                                {...register(`${input.inputName}` as any)}
                              />
                            </div>
                          </div>
                          {DisplayErrorMessage(
                            errors?.[input?.inputName as keyof domainProps]
                              ?.message,
                            intl
                          )}
                        </div>
                      </Fragment>
                    ))}
                  </div>

                  <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
                    <div className="text-center">
                      <button
                        type="reset"
                        className="btn btn-light me-3"
                        onClick={() => {
                          handleClose();
                          reset();
                        }}
                      >
                        {intl.formatMessage({ id: "Cancel" })}
                      </button>
                      <button type="submit" className="btn btn-success">
                        <span className="indicator-label">
                          {intl.formatMessage({ id: "Add" })}
                        </span>
                        <span className="indicator-progress">
                          {intl.formatMessage({ id: "PleaseWait" })}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal.Body>
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
        width:"100%",
        textAlign:language=="Ar"?"right":"left"
      }}
    >
      <p style={{ width:"100%",
        textAlign:language=="Ar"?"right":"left"}}>
        {error
          ? intl.formatMessage({
              id: error,
            })
          : ""}
      </p>
    </div>
  );
};
