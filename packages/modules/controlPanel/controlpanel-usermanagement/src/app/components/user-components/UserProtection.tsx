import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { EditPopup } from "./popups/EditPopup";
import { ChangePasswordPopup } from "./popups/change-password-popup";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/users-slice/userSlice";
import { RootState } from "../../features/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import {
  userProtectionProps,
  userProtectionSchema,
} from "../../validation/user-protection-validation";
import { editUserSummary } from "../../features/users-slice/editUserSummarySlice";
import {
  AddUserLoginPermissionProps,
  AddUserLoginPermissionSchema,
} from "../../validation/add-login-permission.-validation";
import { addUserLoginPermission } from "../../features/users-slice/addUserLoginPermission";

type UserInfoTypes = {
  username: string;
  phoneNumber: string;
  idNumber: string;
  address: string;
  gender: string;
};

type inputTypes = {
  id: number;
  title: string;
  value: string;
  name: string;
  inputType: string;
  readonly?: boolean;
  options?: {
    id: number;
    name: string;
  }[];
  attributes?: {};
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type emailNotificationsCheckBoxTypes = {
  id: number;
  title: string;
  subTitle: string;
  name: string;
  isChecked: boolean;
  className?: string;
  onChange: (input: emailNotificationsCheckBoxTypes) => void;
};
let language = localStorage?.getItem("selectedLang");

export const UserProtection: FC = () => {
  const {
    register: register1,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<userProtectionProps>({
    resolver: yupResolver(userProtectionSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setValue: setValue2,
    watch: watch2,
    formState: { errors: errors2, isSubmitting: isSubmitting2 },
  } = useForm<AddUserLoginPermissionProps>({
    resolver: yupResolver(AddUserLoginPermissionSchema),
    mode: "all",
    reValidateMode: "onChange",
  });
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(id as string) as any);
  }, [id]);
  let user = useSelector((state: RootState) => {
    return state?.user?.data;
  });
  const intl = useIntl();
  const [showChangePasswordPopup, setChangePasswordPopup] = useState(false);
  const handleCloseChangePasswordPopup = () => setChangePasswordPopup(false);
  const handleShowChangePasswordPopup = () => setChangePasswordPopup(true);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  let [isNafaz, setIsNafaz] = useState<boolean>(true);
  let [isExpired, setIsExpired] = useState<boolean>(true);

  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "ModifiedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  let showSuccessAlertForAdd = () => {
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
  const [inputs, setInputs] = useState<any>();

  useEffect(() => {
    setValue("email", user?.email);
    setInputs([
      {
        id: 1,
        title: intl.formatMessage({ id: "Email" }),
        value: user?.email,
        name: "email",
        inputType: "text",
        readonly: true,
        onChange: handleChange,
        inputName: "email",
      },
      {
        id: 2,
        title: intl.formatMessage({ id: "Password" }),
        value: "01000000000",
        name: "password",
        inputType: "password",
        readonly: true,
        onChange: handleChange,
        inputName: "password",
        attributes: {
          "data-bs-toggle": "modal",
          "data-bs-target": "#rega_modal_change_password",
        },
      },
    ]);
  }, [user]);

  const [inputPermissions, setInputPermissions] = useState<any>([
    {
      id: 1,
      title: intl.formatMessage({ id: "EnablePermission" }),
      value: intl.formatMessage({ id: "Enabled" }),
      name: "enablePermission",
      inputType: "radio",
      options: [
        {
          id: 1,
          name: intl.formatMessage({ id: "Enabled" }),
        },
        {
          id: 2,
          name: intl.formatMessage({ id: "Disabled" }),
        },
      ],
      onChange: handleInputPermissionChange,
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "UnifiedEntry" }),
      value: intl.formatMessage({ id: "Disabled" }),
      name: "unifiedEntry",
      inputType: "radio",
      options: [
        {
          id: 1,
          name: intl.formatMessage({ id: "Enabled" }),
        },
        {
          id: 2,
          name: intl.formatMessage({ id: "Disabled" }),
        },
      ],
      onChange: handleInputPermissionChange,
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "PermissionPeriodFrom" }),
      value: new Date("2022-07-05").toISOString().slice(0, 10),
      name: "permissionPeriodFrom",
      inputType: "date",
      onChange: handleInputPermissionChange,
      inputName:"expirationDateFrom"
    },
    {
      id: 4,
      title: intl.formatMessage({ id: "PermissionPeriodTo" }),
      value: new Date("2024-07-05").toISOString().slice(0, 10),
      name: "permissionPeriodTo",
      inputType: "date",
      onChange: handleInputPermissionChange,
      inputName:"expirationDateTo"
    },
  ]);

  const [emailNotificationCheckBox, setEmailNotificationCheckBox] = useState<
    emailNotificationsCheckBoxTypes[]
  >([
    {
      id: 1,
      title: intl.formatMessage({ id: "SelectAll" }),
      subTitle: "",
      name: "selectAll",
      isChecked: false,
      className: "text-primary",
      onChange: selectAllNotificationsCheckBox,
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "Tasks" }),
      subTitle: intl.formatMessage({
        id: "ReceiveNotificationForNewTasks",
      }),
      name: "tasks",
      isChecked: false,
      onChange: handleEmailNotificationCheckBoxChange,
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "AddNewIdeaChallenge" }),
      subTitle: intl.formatMessage({
        id: "ReceiveNotificationForNewIdeas",
      }),
      name: "newIdeaChallenge",
      isChecked: false,
      onChange: handleEmailNotificationCheckBoxChange,
    },
  ]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs((inputs: any) =>
      inputs.map((input: any) =>
        input.name === name ? { ...input, value: value } : input
      )
    );
  }

  function handleInputPermissionChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    if (name == "enablePermission") {
      setIsExpired(
        value == intl.formatMessage({ id: "Enabled" }) ? true : false
      );
    }
    if (name == "unifiedEntry") {
      setIsNafaz(
        value == intl.formatMessage({ id: "Enabled" }) ? true : false
      );
    }
    setInputPermissions((inputs:any) =>
      inputs.map((input:any) =>
        input.name === name ? { ...input, value: value } : input
      )
    );
  }

  const handleEdit = (input: inputTypes) => {
    input.readonly = !input.readonly;
    setInputs([...inputs]);
  };

  function handleEmailNotificationCheckBoxChange(
    input: emailNotificationsCheckBoxTypes
  ) {
    input.isChecked = !input.isChecked;
    setEmailNotificationCheckBox([...emailNotificationCheckBox]);
  }

  function selectAllNotificationsCheckBox(
    input: emailNotificationsCheckBoxTypes
  ) {
    input.isChecked = !input.isChecked;
    let items: emailNotificationsCheckBoxTypes[] =
      emailNotificationCheckBox.map(
        (
          item: emailNotificationsCheckBoxTypes
        ): emailNotificationsCheckBoxTypes => {
          item.isChecked = input.isChecked;
          return item;
        }
      );
    setEmailNotificationCheckBox(items);
  }
  let [message, setMessage] = useState<string>("");
  let [messageForAddPermission, setMessageForAddPermission] =
    useState<string>("");
  let [messageForEditPermission, setMessageForEditPermission] =
    useState<string>("");

  const AddUserData = async (formValues: userProtectionProps) => {
    let body = {
      id,
      userName: user?.userName,
      email: formValues?.email,
      phoneNumber: user?.phoneNumber,
      address: user?.address,
      nationalId: user?.nationalId,
      userGender: user?.userGender,
    };
    dispatch(editUserSummary(body as any) as any).then((res: any) => {
      console.log("res", res);
      return setMessage(res?.payload?.message);
    });
  };

  useEffect(() => {
    if (message == "userUpdatedSuccessfully") {
      showSuccessAlert();
      dispatch(fetchUser(id as any) as any);
    }
    return () => {
      setMessage("");
    };
  }, [message]);

  const AddUserLoginPermission = async (
    formValues: AddUserLoginPermissionProps
  ) => {
    let body = {
      id,
      isNafaz,
      isExpired,
      expirationDateFrom: moment(formValues?.expirationDateFrom).toISOString(),
      expirationDateTo: moment(formValues?.expirationDateTo).toISOString(),
    };
    console.log(body)
    dispatch(addUserLoginPermission(body as any) as any).then((res: any) => {
      console.log("res", res);
      return setMessageForAddPermission(res?.payload?.message);
    });
  };

  useEffect(() => {
    if (messageForAddPermission == "userPermissionAddedSuccessfully") {
      showSuccessAlertForAdd();
    }
    return () => {
      setMessageForAddPermission("");
    };
  }, [messageForAddPermission]);
  const EditUserLoginPermission = async (
    formValues: AddUserLoginPermissionProps
  ) => {
    let body = {
      id,
      isNafaz,
      isExpired,
      expirationDateFrom: moment(formValues?.expirationDateFrom).toISOString(),
      expirationDateTo: moment(formValues?.expirationDateTo).toISOString(),
    };
    dispatch(addUserLoginPermission(body as any) as any).then((res: any) => {
      console.log("res", res);
      return setMessage(res?.payload?.message);
    });
  };
  useEffect(() => {
    if (messageForEditPermission == "userPermissionUpdatedSuccessfully") {
      showSuccessAlert();
    }
    return () => {
      setMessageForEditPermission("");
    };
  }, [messageForEditPermission]);

  console.log("errors2", errors2)
  return (
    <>
      <div className="mb-10">
        <div className="card card-xl-stretch mb-xl-0 pb-4 pt-15">
          <div className="d-flex justify-content-between p-4 align-items-center"></div>
          <div className="card-body py-3 px-3 mx-8">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="REGA_table_widget_5_tab_1"
              >
                <h3>
                  {intl.formatMessage({
                    id: "MyProfile",
                  })}
                </h3>
                <form onSubmit={handleSubmit(AddUserData)}>
                  <div>
                    {inputs?.map((input: any) => (
                      <div key={input?.id} className="my-5">
                        <label
                          className="form-label fw-bolder text-dark fs-6 d-flex justify-content-between"
                          onClick={() => {
                            if (input.inputType == "password") {
                              handleShowChangePasswordPopup();
                            }
                            handleEdit(input);
                          }}
                          htmlFor={input?.name}
                          {...(input.inputType === "password" &&
                            input.attributes)}
                        >
                          <p className="fw-bolder mb-1">{input.title}</p>
                          <i
                            className={`bi bi-${
                              input?.readonly || input?.inputType == "password"
                                ? "pencil-square"
                                : "check-lg"
                            } fs-3 text-muted`}
                            role="button"
                          ></i>
                        </label>
                        {input?.inputType !== "select" ? (
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text h-100">
                                <i
                                  className={`${
                                    input.id === 1
                                      ? "fa-regular fa-envelope special"
                                      : "fa-solid fa-key special"
                                  }`}
                                ></i>
                              </span>
                            </div>
                            <input
                              type={input?.inputType}
                              className="form-control"
                              // value={input.value}
                              // name={input.name}
                              readOnly={input?.readonly}
                              // onChange={input.onChange}
                              id={input?.id}
                              {...register1(`${input?.inputName}` as any)}
                            />
                            {DisplayErrorMessage(
                              errors?.[
                                input?.inputName as keyof userProtectionProps
                              ]?.message,
                              intl
                            )}
                          </div>
                        ) : (
                          <>
                            {/* <select
                          className="form-select form-select-solid fw-bolder"
                          aria-label="Default select example"
                          disabled={input.readonly}
                        >
                          {input.options?.map((option:any) => (
                            <option
                              key={option.id}
                              selected={option.name === input.value}
                            >
                              {option.name}
                            </option>
                          ))}
                        </select> */}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-success m-3 px-5 py-3"
                      style={{ width: "125px" }}
                      type="submit"
                    >
                      {intl.formatMessage({
                        id: "Save",
                      })}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="card card-xl-stretch mb-xl-0 py-4">
          <div className="d-flex justify-content-between p-4 align-items-center"></div>
          <div className="card-body py-3 px-3 mx-8">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="REGA_table_widget_5_tab_1"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h3>
                    {intl.formatMessage({
                      id: "TwoFactorAuthentication",
                    })}
                  </h3>
                  <button className="btn btn-primary ">
                    <i className="bi bi-plus fs-2"></i>
                    {intl.formatMessage({
                      id: "AddAuthentication",
                    })}
                  </button>
                </div>
                <p className="text-muted">
                  {intl.formatMessage({
                    id: "TwoFactorAuthenticationDescription",
                  })}
                </p>
                <div className="border-bottom py-4">
                  <h3>
                    {intl.formatMessage({
                      id: "SMS",
                    })}
                  </h3>
                  <span className="text-muted fw-bolder">
                    <bdi>+61 412 345 678</bdi>
                  </span>
                </div>
                <p className="pt-5">
                  {intl.formatMessage({
                    id: "LostPhoneNumberOrSecurityCode",
                  })}{" "}
                  <a href="#">
                    {intl.formatMessage({
                      id: "CreateBackupCode",
                    })}
                  </a>{" "}
                  {intl.formatMessage({
                    id: "ForLoginToYourAccount",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="card card-xl-stretch mb-xl-0 py-4">
          <div className="d-flex justify-content-between p-4 align-items-center"></div>
          <div className="card-body py-3 px-3 mx-8">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="REGA_table_widget_5_tab_1"
              >
                <h3>
                  {intl.formatMessage({
                    id: "MyProfile",
                  })}
                </h3>
                <form onSubmit={handleSubmit2(AddUserLoginPermission)}>
                  <div className="row">
                    {inputPermissions?.map((input:any) => (
                      <div
                        key={input.id}
                        className="my-5 col-12 col-lg-6 col-md-6 col-sm-6"
                      >
                        <label
                          className="form-label fw-bolder text-dark fs-6 d-flex justify-content-between"
                          htmlFor={input.name}
                        >
                          <p className="fw-bolder mb-1">{input.title}</p>
                        </label>
                        {input.inputType !== "radio" ? (
                          <>
                          <input
                            type={input.inputType}
                            className="form-control form-control-solid"
                            // value={input.value}
                            // name={input.name}
                            readOnly={input.readonly}
                            // onChange={input.onChange}
                            id={input.name}
                            {...register2(input?.inputName)}
                          />
                          {DisplayErrorMessage(
                            errors2?.[
                              input?.inputName as keyof AddUserLoginPermissionProps
                            ]?.message,
                            intl
                          )}
                          </>
                        ) : (
                          buildRatioButtons(input)
                        )}
                      </div>
                    ))}

                    <div className="p-3 text-center pb-5">
                      <Link
                        className="btn btn-secondary m-3 px-5 py-3"
                        style={{ width: "125px" }}
                        to="/admin-panel-users/users"
                      >
                        {intl.formatMessage({
                          id: "Cancel",
                        })}
                      </Link>

                      <button
                        className="btn btn-success m-3 px-5 py-3"
                        style={{ width: "125px" }}
                        type="submit"
                      >
                        {intl.formatMessage({
                          id: "Save",
                        })}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="card card-xl-stretch mb-xl-0 py-4">
          <div className="d-flex justify-content-between p-4 align-items-center"></div>
          <div className="card-body py-3 px-3 mx-8">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="REGA_table_widget_5_tab_1"
              >
                <h3>
                  {intl.formatMessage({
                    id: "EmailNotification",
                  })}
                </h3>
                <p className="text-muted">
                  {intl.formatMessage({
                    id: "SelectMessagesYouWantToReceive",
                  })}
                </p>

                {emailNotificationCheckBox.map((input) => (
                  <div className="border-bottom py-4">
                    <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md d-flex align-items-center">
                      <input
                        className="form-check-input widget-9-check xCheckBg"
                        type="checkbox"
                        defaultValue={0}
                        name={input.name}
                        checked={input.isChecked}
                        onChange={() => input.onChange(input)}
                      />
                      <label className="me-3">
                        <span className={`fw-bolder ${input.className}`}>
                          {input.title}
                        </span>
                        <p className="mb-0">{input.subTitle}</p>
                      </label>
                    </div>
                  </div>
                ))}

                <div className="p-3 text-center pb-5">
                  <Link
                    className="btn btn-secondary m-3 px-5 py-3"
                    style={{ width: "125px" }}
                    to="/admin-panel-users/users"
                  >
                    {intl.formatMessage({
                      id: "Cancel",
                    })}
                  </Link>

                  <button
                    className="btn btn-success m-3 px-5 py-3"
                    style={{ width: "125px" }}
                    onClick={handleShowEdit}
                  >
                    {intl.formatMessage({
                      id: "Save",
                    })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" aria-hidden="true">
        <EditPopup handleCloseEdit={handleCloseEdit} showEdit={showEdit} />
      </div>
      {showChangePasswordPopup ? (
        <>
          {" "}
          <div className="modal fade" aria-hidden="true">
            <ChangePasswordPopup
              handleCloseChangePasswordPopup={() => setChangePasswordPopup(false)}
              showChangePasswordPopup={showChangePasswordPopup}
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

const buildRatioButtons = (input: inputTypes) => {
  return (
    <div className="form-control form-control-solid d-flex gap-2 w-100">
      {input?.options?.map((option) => (
        <div
          className="form-check form-check-success form-check-sm form-check-custom col-6 "
          key={option.id}
        >
          <input
            className="form-check-input"
            type="radio"
            name={input.name}
            value={option.name}
            id={`${input.name}${option.id}`}
            checked={input.value === option.name ? true : false}
            onChange={input.onChange}
          />
          <label
            className="form-check-label"
            htmlFor={`${input.name}${option.id}`}
          >
            {option.name}
          </label>
        </div>
      ))}
    </div>
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
