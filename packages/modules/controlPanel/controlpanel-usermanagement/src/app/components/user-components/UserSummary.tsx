import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../features/users-slice/userSlice";
import { RootState } from "../../features/store";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  userSummaryProps,
  userSummarySchema,
} from "../../validation/user-summary-validation";
import { editUserSummary } from "../../features/users-slice/editUserSummarySlice";
type inputTypes = {
  id: number;
  title: string;
  value: string;
  name: string;
  inputType: string;
  readonly: boolean;
  options?: {
    id: number;
    name: string;
  }[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
let language = localStorage?.getItem("selectedLang");

export const UserSummary: FC = () => {
  const intl = useIntl();
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(id as string) as any);
  }, [id]);
  let user = useSelector((state: RootState) => {
    return state?.user?.data;
  });

  console.log("user from summary", user);

  const [inputs, setInputs] = useState<any>([]);

  useEffect(() => {
    setValue("address", user?.address);
    setValue("nationalId", user?.nationalId);
    setValue("phoneNumber", user?.phoneNumber);
    setValue("userName", user?.userName);
    setValue(
      "userGender",
      user?.userGender == 0
        ? intl.formatMessage({ id: "Male" })
        : intl.formatMessage({ id: "Female" })
    );
    setInputs([
      {
        id: 1,
        title: intl.formatMessage({ id: "Username" }),
        value: user?.userName,
        name: "username",
        inputName: "userName",
        inputType: "text",
        readonly: true,
        onChange: handleChange,
      },
      {
        id: 2,
        title: intl.formatMessage({ id: "PhoneNumber" }),
        value: user?.phoneNumber,
        name: "phoneNumber",
        inputName: "phoneNumber",
        inputType: "text",
        readonly: true,
        onChange: handleChange,
      },
      {
        id: 3,
        title: `${intl.formatMessage({ id: "IDNumber" })}/${intl.formatMessage({
          id: "Residence",
        })}`,
        value: user?.nationalId,
        name: "idNumber",
        inputName: "nationalId",
        inputType: "text",
        readonly: true,
        onChange: handleChange,
      },
      {
        id: 4,
        title: intl.formatMessage({ id: "Address" }),
        value: user?.address,
        name: "address",
        inputName: "address",
        inputType: "text",
        readonly: true,
        onChange: handleChange,
      },
      {
        id: 5,
        title: intl.formatMessage({ id: "Gender" }),
        value:
          user?.userGender == 0
            ? intl.formatMessage({ id: "Male" })
            : intl.formatMessage({ id: "Female" }),
        name: "gender",
        inputName: "userGender",
        inputType: "select",
        readonly: true,
        options: [
          {
            id: 0,
            name: intl.formatMessage({ id: "Male" }),
          },
          {
            id: 1,
            name: intl.formatMessage({ id: "Female" }),
          },
        ],
        onChange: handleChange,
      },
    ]);
  }, [user]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs((inputs: any) =>
      inputs.map((input: any) =>
        input.name === name ? { ...input, value: value } : input
      )
    );
  }

  const handleEdit = (input: inputTypes) => {
    input.readonly = !input.readonly;
    setInputs([...inputs]);
  };

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
  } = useForm<userSummaryProps>({
    resolver: yupResolver(userSummarySchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const EditUserSummary = async (formValues: userSummaryProps) => {
    let body = {
      id,
      userName: formValues?.userName,
      email: user?.email,
      phoneNumber: formValues?.phoneNumber,
      address: formValues?.address,
      nationalId: formValues?.nationalId,
      userGender:
        formValues?.userGender == intl.formatMessage({ id: "Male" }) ? 0 : 1,
    };
    dispatch(editUserSummary(body as any) as any);
  };
  let { message } = useSelector((state: RootState) => {
    return state?.userSummary;
  });
  useEffect(() => {
    if (message == "userUpdatedSuccessfully") {
      showSuccessAlert();
      dispatch(fetchUser(id as any) as any);
    }
  }, [message]);
  useEffect(() => {
    return () => {
      dispatch({ type: "editUserSummary/pending" });
    };
  }, []);
  let formValues = watch();
  console.log("formValues are :", formValues);
  console.log("errors", errors);

  return (
    <div className="card card-xl-stretch mb-xl-0 pb-4 pt-15">
      <div className="d-flex justify-content-between p-4 align-items-center"></div>
      <div className="card-body py-3 px-3 mx-8">
        <div className="tab-content">
          <div
            className="tab-pane fade active show"
            id="REGA_table_widget_5_tab_1"
          >
            <h3 style={{ textAlign: language == "Ar" ? "right" : "left" }}>
              {intl.formatMessage({
                id: "BasicInformation",
              })}
            </h3>
            <div>
              <form onSubmit={handleSubmit(EditUserSummary)}>
                {inputs?.map((input: any) => (
                  <div key={input.id} className="my-5">
                    <label
                      className="form-label fw-bolder text-dark fs-6 d-flex justify-content-between"
                      onClick={() => handleEdit(input)}
                      htmlFor={input.name}
                    >
                      <p className="fw-bolder mb-1">{input.title}</p>
                      <i
                        className={`bi bi-${
                          input.readonly ? "pencil-square" : "check-lg"
                        } fs-3 text-muted`}
                        role="button"
                      ></i>
                    </label>
                    {input.inputType === "text" ? (
                      <div className="input-group">
                        <div className="input-group-prepend">
                          {input.id === 2 ? (
                            <span className="input-group-text">966+</span>
                          ) : (
                            <span className="input-group-text h-100">
                              <i
                                className={`${
                                  input.id === 1
                                    ? "special bi bi-person-circle"
                                    : input.id === 3
                                    ? "fa-solid fa-id-card special"
                                    : "fas fa-map-marker-alt special"
                                }`}
                              ></i>
                            </span>
                          )}
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          // value={input.value}
                          // name={input.name}
                          readOnly={input.readonly}
                          // onChange={input.onChange}
                          id={input.id}
                          {...register(`${input.inputName}` as any)}
                        />
                        {DisplayErrorMessage(
                          errors?.[input?.inputName as keyof userSummaryProps]
                            ?.message,
                          intl
                        )}
                      </div>
                    ) : (
                      <select
                        className="form-select form-select-solid fw-bolder"
                        aria-label="Default select example"
                        disabled={input.readonly}
                        {...register("userGender")}
                      >
                        {input.options?.map((option: any) => (
                          <option
                            key={option.id}
                            selected={option.name === input.value}
                          >
                            {option.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                ))}

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
