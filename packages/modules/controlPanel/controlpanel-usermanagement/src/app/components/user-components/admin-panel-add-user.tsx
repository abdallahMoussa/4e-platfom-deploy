import { FC, Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { AddNewItemToolbar } from "./popups/AddNewItemToolbar";
import { AddPopup } from "./popups/AddPopup";
import { DepartmentalOrganizationalStructurePopup } from "./popups/DepartmentalOrganizationalStructurePopup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import {
  AddUserProps,
  AddUserSchema,
} from "../../validation/add-user-validation";
import Swal from "sweetalert2";
import {
  UserGender,
  UserTypeEnum,
  UserPosition,
  JobTime,
} from "../../models/users/users-enums";
import moment from "moment";
import UsersCheckBoxDropDown from "./components/UsersCheckBoxDropDown";
import { AddUserPermissionsActions } from "./components/AddUserPermissionsActions";
import { AddUserJobInfoActions } from "./components/AddUserJobInfoActions";
import { v4 as uuidv4 } from "uuid";
import { fetchRoles } from "../../features/role/rolesSlice";
import { fetchDomains } from "../../features/domains-slice/domainsSlice";
import { fetchJobDegree } from "../../features/users-slice/jobDegreeSlice";
import { jobDegreeModel } from "../../models/job-degree/job-degree-model";
import { addUser } from "../../features/users-slice/addUserSlice";
import { fetchJobRoles } from "../../features/jobRoles-slice/jobRolesSlice";
import { fetchJobNames } from "../../features/jobNames-slice/jobNamesSlice";
import { JobRoleModel } from "../../models/job-role/job-role";
import { JobNameModel } from "../../models/job-name/job-name";

interface IProps {}
let language:string=localStorage.getItem("selectedLang") || ""
export const AdminPanelAddUser: FC<IProps> = () => {
  const [employeeRolseOptions, setEemployeeRolseOptions] = useState([
    {
      id: 1,
      name: "الدور الاول",
    },
    {
      id: 2,
      name: "الدور الثاني",
    },
    {
      id: 3,
      name: "الدور الثالث",
    },
  ]);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoles({ pageSize: 1000, pageNumber: 1 } as any) as any);
    dispatch(fetchDomains({ pageSize: 1000, pageNumber: 1 } as any) as any);
    dispatch(fetchJobDegree({ pageSize: 1000, pageNumber: 1 } as any) as any);
    dispatch(fetchJobRoles({ pageSize: 1000, pageNumber: 1 } as any) as any);
    dispatch(fetchJobNames({ pageSize: 1000, pageNumber: 1 } as any) as any);
  }, []);

  let roles = useSelector((state: RootState) => {
    return state?.roles?.data?.data;
  });
  let domains = useSelector((state: RootState) => {
    return state?.domains?.data;
  });
  let jobDegrees = useSelector((state: RootState) => {
    return state?.jobDegrees?.data;
  });
  let jobRoles = useSelector((state: RootState) => {
    return state?.jobRoles?.data;
  });
  let jobNames = useSelector((state: RootState) => {
    return state?.jobNames?.data;
  });

  useEffect(() => {
    setEemployeeRolseOptions(roles as any);
  }, [roles]);

  let [showHierarchy, setShowHierarchy] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const intl = useIntl();
  const [employeeRole, setEmployeeRole] = useState([]);

  const jobDegreeOptions = [
    {
      id: "1",
      name: "الدرجة الاولي",
    },
    {
      id: "2",
      name: "الدرجة الثانية",
    },
    {
      id: "3",
      name: "الدرجة الثالثة",
    },
  ];

  const jobTitleOptions = [
    {
      id: 1,
      name: "الوظيفه الاولي",
    },
    {
      id: 2,
      name: "الوظيفه الثانية",
    },
    {
      id: 3,
      name: "الوظيفه الثالثة",
    },
  ];

  const employeeManagementOptions = [
    {
      id: 1,
      name: "الادارة الاولي",
    },
    {
      id: 2,
      name: "الادارة الثانية",
    },
    {
      id: 3,
      name: "الادارة الثالثة",
    },
  ];
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<AddUserProps>({
    resolver: yupResolver(AddUserSchema),
    mode: "all",
    reValidateMode: "onSubmit",
  });
  // useEffect(()=>{setValue("userType",true)},[])
  console.log("errors", errors as any);
  console.log("values of form", watch());
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

  let showFailureOrgAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "YouMustSelectTheEmployee'sDepartment" }),
      icon: "error",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  let showFailureRolesAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "YouMustSelectTheEmployee'sRoles" }),
      icon: "error",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  let showRequiredInputsAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "YouMustFillRequiredInputs" }),
      icon: "error",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };

  // let message = useSelector((state: RootState) => {
  //   return state?.addUser?.message;
  // });
  let [message,setMessage]=useState<any>("")

  // all radio varables

  let [userGender, setuserGender] = useState<UserGender>(UserGender.Male);
  let [userType, setUserType] = useState<UserTypeEnum>(UserTypeEnum.systemUser);
  let [userPosition, setUserPosition] = useState<UserPosition>(
    UserPosition.Manager
  );
  let [jobTime, setJobTime] = useState<JobTime>(JobTime.Main);
  let [isNafaz, setIsNafaz] = useState<boolean>(true);
  let [isExpired, setIsExpired] = useState<boolean>(true);
  // for getting data from form
  let formValues = watch();

  let [orgId, setOrgId] = useState<string>(
    ""
  );
  let [orgName, setOrgName] = useState<string>("");

  interface informationJobs {
    id?: number | Number | string;
    orgId?: string;
    orgName?: string;
    // jobName:string;
    startDate: Date | string;
    endDate: Date | string;
    jobTime: JobTime;
    hiringDate: Date | string;
    jobDegreeId: string;
    jobRoleId: string;
    userKind: UserPosition;
  }
  let [informationJobsForTable, setInformationJobsForTable] = useState<
    informationJobs[]
  >([]);
  let [informationJobsForPosting, setInformationJobsForPosting] = useState<
    informationJobs[]
  >([]);

  useEffect(() => {
    setValue("userType", 0);
    setValue("isExpired", true);
  }, []);
  const handleUserTypeChange = (e: any) => {
    setValue("userType", e.currentTarget.value);
    trigger("userType");
  };
  const handleIsExpiredChange = (e: any) => {
    setValue("isExpired", e.currentTarget.value == 0 ? true : false);
    trigger("isExpired");
  };

  let addInformationJobs = (data: informationJobs) => {
    // trigger("hiringDate");
    // trigger("endDate");
    // trigger("startDate");
    console.log(
      "errors array length from job info",
      Object.keys(errors).length
    );
    if (orgId !="" && orgName!="") {
      if (formValues.startDate && formValues.endDate && formValues.hiringDate && !errors?.startDate?.message && !errors?.endDate?.message && !errors?.hiringDate?.message) {
        if (editedItemIndexForJobs > -1) {
          // logic for add edited item to its exact position
          let newTableData = informationJobsForTable?.splice(
            editedItemIndexForJobs,
            0,
            {
              id: Math.random() * 100000,
              orgId: data?.orgId,
              orgName: data?.orgName,
              // jobName:data?.jobName,
              startDate: data.startDate,
              endDate: data.endDate,
              jobTime: data.jobTime,
              hiringDate: data.hiringDate,
              jobDegreeId: data.jobDegreeId,
              jobRoleId: data.jobRoleId,
              userKind: data.userKind,
            }
          );
          setInformationJobsForTable((prevState: informationJobs[]) => {
            return [...prevState, ...newTableData];
          });
          setInformationJobsForPosting((prevState: informationJobs[]) => {
            return [...prevState, ...newTableData];
          });
          showSuccessAlert();
          setEditedItemIndexForJobs(-1);
          // setValue("hiringDate", "" as any);
          // setValue("startDate", "" as any);
          // setValue("endDate", "" as any);
          setJobTime(JobTime.Main);
          setOrgName("");
        } else {
          setInformationJobsForTable((prevState: informationJobs[]) => {
            return [
              ...prevState,
              {
                id: Math.random() * 100000,
                orgId: data?.orgId,
                orgName: data?.orgName,
                // jobName:data?.jobName,
                startDate: data.startDate,
                endDate: data.endDate,
                jobTime: data.jobTime,
                hiringDate: data.hiringDate,
                jobDegreeId: data.jobDegreeId,
                jobRoleId: data.jobRoleId,
                userKind: data.userKind,
              },
            ];
          });
          setInformationJobsForPosting((prevState: informationJobs[]) => {
            return [
              ...prevState,
              {
                orgId: data?.orgId,
                // jobName:data?.jobName,
                startDate: data.startDate,
                endDate: data.endDate,
                jobTime: data.jobTime,
                hiringDate: data.hiringDate,
                jobDegreeId: data.jobDegreeId,
                jobRoleId: data.jobRoleId,
                userKind: data.userKind,
              },
            ];
          });
          showSuccessAlert();
          // setValue("hiringDate", "" as any);
          // setValue("startDate", "" as any);
          // setValue("endDate", "" as any);
          setJobTime(JobTime.Main);
          setOrgName("");
          setOrgId("");
        }
      } 
      else{
        showRequiredInputsAlert()
      }
    }
    else {
      showFailureOrgAlert();
    }
  };
  var [editedItemIndexForJobs, setEditedItemIndexForJobs] =
    useState<number>(-1);
  let handleEditForJob = (id: number | string | Number) => {
    // for finding item that has this id
    let editedItemForJobs: informationJobs | undefined =
      informationJobsForTable?.find((item) => {
        return item?.id == id;
      });
    // for finding item index that has this id
    setEditedItemIndexForJobs(
      informationJobsForTable?.findIndex((item) => {
        return item?.id == id;
      })
    );

    // to remove item from table
    setInformationJobsForTable(
      informationJobsForTable?.filter((item) => {
        return item?.id != id;
      })
    );
    setValue("startDate", editedItemForJobs?.startDate as string);
    setValue("endDate", editedItemForJobs?.endDate as string);
    setValue("hiringDate", editedItemForJobs?.hiringDate as unknown as string);
    setJobTime(editedItemForJobs?.jobTime as JobTime);
    setOrgName(editedItemForJobs?.orgName as string);
    setOrgId(editedItemForJobs?.orgId as string);
  };

  interface Permissions {
    id?: number | string | Number;
    isExpired: boolean;
    isNafaz: boolean;
    expirationDateFrom: string;
    expirationDateTo: string;
  }

  let [permissionsForTable, setPermissionsForTable] = useState<Permissions[]>(
    []
  );
  let [permissionsForPosting, setPermissionsForPosting] = useState<
    Permissions[]
  >([]);

  const addPermissions = (data: Permissions) => {
    // trigger("expirationDateFrom");
    // trigger("expirationDateTo");
    console.log(
      "errors array length from permissions",
      Object.keys(errors).length
    );
    if (formValues.expirationDateFrom && formValues.expirationDateTo) {
      if (editedItemIndexForPermissions > -1) {
        let newTableData = permissionsForTable?.splice(
          editedItemIndexForPermissions,
          0,
          {
            id: Math.random() * 100000,
            isExpired: data.isExpired,
            isNafaz: data.isNafaz,
            expirationDateFrom: data.expirationDateFrom,
            expirationDateTo: data.expirationDateTo,
          }
        );
        console.log("newTableDataPermission", newTableData);
        console.log("permissionsForTable from edit");
        setPermissionsForTable((prevState: Permissions[]) => {
          return [...prevState, ...newTableData];
        });
        setPermissionsForPosting((prevState: Permissions[]) => {
          return [...prevState, ...newTableData];
        });
        setEditedItemIndexForPermissions(-1);
        showSuccessAlert();
        // setValue("expirationDateFrom", "" as any);
        // setValue("expirationDateTo", "" as any);
        // setIsExpired(true);
        setIsNafaz(true);
      } else {
        setPermissionsForTable((prevState: any) => {
          return [
            ...prevState,
            {
              id: Math.random() * 100000,
              isExpired: data.isExpired,
              isNafaz: data.isNafaz,
              expirationDateFrom: data.expirationDateFrom,
              expirationDateTo: data.expirationDateTo,
            },
          ];
        });
        setPermissionsForPosting((prevState: any) => {
          return [
            ...prevState,
            {
              id: Math.random() * 100000,
              isExpired: data.isExpired,
              isNafaz: data.isNafaz,
              expirationDateFrom: data.expirationDateFrom,
              expirationDateTo: data.expirationDateTo,
            },
          ];
        });
        showSuccessAlert();
        // setValue("expirationDateFrom", "" as any);
        // setValue("expirationDateTo", "" as any);
        // setIsExpired(true);
        // setIsNafaz(true);
      }
    } else {
      showRequiredInputsAlert();
    }
  };
  let [selectedEmployeeRolesIds, setSelectedEmployeeRolesIds] = useState<
    string[]
  >([]);
  console.log("selected roles ids are :", selectedEmployeeRolesIds);

  const AddUser = async (formValues: AddUserProps) => {
    let body = {
      userName: formValues.userName,
      firstName: formValues.quadrupleName?.split(" ")[0],
      secondName: formValues.quadrupleName?.split(" ")[1],
      thirdName: formValues.quadrupleName?.split(" ")[2],
      forthName: formValues.quadrupleName?.split(" ")[3],
      email: formValues.email,
      phoneNumber: formValues.phoneNumber,
      address: formValues.address,
      nationalId: formValues.nationalId.toString(),
      userType: formValues.userType,
      userGender: userGender,
      // userKind: userPosition,
      domainId: formValues.domainId || "00000000-0000-0000-0000-000000000000",
      jobNameId: formValues.jobNameId || "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      informationJobs: informationJobsForTable?.map((item: any) => {
        return {
          orgId: item?.orgId,
          startDate: moment(item?.startDate).toISOString(),
          endDate: moment(item?.endDate).toISOString(),
          jobTime: item?.jobTime,
          hiringDate: moment(item?.hiringDate).toISOString(),
          jobDegreeId: item?.jobDegreeId,
          jobRoleId: item?.jobRoleId,
          userKind: item?.userKind,
        };
      }),
      loginPermissions: permissionsForTable?.map((item) => {
        return {
          isExpired: item?.isExpired,
          isNafaz: item?.isNafaz,
          expirationDateFrom:
            moment(item?.expirationDateFrom).toISOString() ||
            moment().toISOString(),
          expirationDateTo:
            moment(item?.expirationDateTo).toISOString() ||
            moment().toISOString(),
        };
      }),
      roleIds: selectedEmployeeRolesIds.map((item) => {
        return item.toString();
      }),
    };
    console.log("body", body);
    dispatch(addUser(body) as any).then((res:any)=>{
      return setMessage(res?.payload?.message)
    });
  };
console.log("message",message)
  useEffect(() => {
    if (message) {
      if (message === "userAddedSuccessfully") {
        showSuccessAlert();
        navigate("/admin-panel-users-workspace/admin-panel-users/users");
      }
      // else if (message === ["userAlreadyExists"]) {
      //   Swal.fire({
      //     text: "Error in Add User",
      //     icon: "error",
      //     heightAuto: false,
      //     buttonsStyling: false,
      //     confirmButtonText: intl.formatMessage({ id: "Agree" }),
      //     customClass: {
      //       confirmButton: "btn btn-primary",
      //     },
      //   });
      // }
       else {
        Swal.fire({
          text: "Error in Add User",
          icon: "error",
          heightAuto: false,
          buttonsStyling: false,
          confirmButtonText: intl.formatMessage({ id: "Agree" }),
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }
    }
    return ()=>{setMessage("")}
  }, [message]);
  console.log("informationJobsForTable", informationJobsForTable);

  var [editedItemIndexForPermissions, setEditedItemIndexForPermissions] =
    useState<number>(-1);

  let handleEditForPermission = (id: number | string | Number) => {
    let editedItemForPermissions: Permissions | undefined =
      permissionsForTable?.find((item) => {
        return item?.id == id;
      });
    // for finding item index that has this id
    setEditedItemIndexForPermissions(
      permissionsForTable?.findIndex((item) => {
        return item?.id == id;
      })
    );

    setPermissionsForTable(
      permissionsForTable?.filter((item) => {
        return item?.id != id;
      })
    );
    setValue(
      "expirationDateFrom",
      editedItemForPermissions?.expirationDateFrom as string
    );
    setValue(
      "expirationDateTo",
      editedItemForPermissions?.expirationDateTo as string
    );
    setIsNafaz(editedItemForPermissions?.isNafaz as any);
    // setIsExpired(editedItemForPermissions?.isExpired as any);
    setValue("isExpired", editedItemForPermissions?.isExpired);
  };

  console.log("editedItemIndexForJobs", editedItemIndexForJobs);
  console.log("editedItemIndexForPermissions", editedItemIndexForPermissions);

  let language = localStorage.getItem("selectedLang");

  return (
    <>
      <AddNewItemToolbar title="AddUser" />
      {/* <RightToolbar /> */}

      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div
            className="flex-lg-row-fluid"
            data-select2-id="select2-data-129-tmo1"
          >
            <form onSubmit={handleSubmit(AddUser)}>
              <div className="card mb-5 mb-xl-8 pt-5">
                <div>
                  <div className="card-header px-1 pb-2 mb-5 mt-5 px-2 px-3">
                    <p className="card-title align-items-start flex-column px-5 pb-5">
                      <span className="card-label fw-bolder fs-3 mb-2 ">
                        {intl.formatMessage({
                          id: "AddNewUser",
                        })}
                      </span>
                      <span className="mt-1 fw-semibold fs-5 text-muted">
                        {intl.formatMessage({
                          id: "PleaseEnterTheData",
                        })}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <h3
                      className="h1 mb-8"
                      style={{ textAlign: language == "Ar" ? "right" : "left" }}
                    >
                      {intl.formatMessage({ id: "BasicData" })}
                    </h3>
                    {/* <div className="col-12 col-sm-3 col-md-3">
                      <div className="mb-2 pt-2 pb-3">
                        <label className="form-label px-2  fs-6 text-gray-700 required">
                          {intl.formatMessage({
                            id: "FirstName",
                          })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="bi bi-person special"></i>
                            </span>
                          </div>
                          <input
                            {...register("firstName")}
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "FirstName",
                            })}
                          />
                          {DisplayErrorMessage(
                            errors?.firstName?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3">
                      <div className="mb-2 pt-2 pb-3">
                        <label className="form-label px-2  fs-6 text-gray-700 required">
                          {intl.formatMessage({
                            id: "SecondName",
                          })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="bi bi-person special"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "SecondName",
                            })}
                            {...register("secondName")}
                          />
                          {DisplayErrorMessage(
                            errors?.secondName?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3">
                      <div className="mb-2 pt-2 pb-3">
                        <label className="form-label px-2  fs-6 text-gray-700 required">
                          {intl.formatMessage({
                            id: "ThirdName",
                          })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="bi bi-person special"></i>
                            </span>
                          </div>
                          <input
                            {...register("thirdName")}
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "ThirdName",
                            })}
                          />
                          {DisplayErrorMessage(
                            errors?.thirdName?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3">
                      <div className="mb-2 pt-2 pb-3">
                        <label className="form-label px-2  fs-6 text-gray-700 required">
                          {intl.formatMessage({
                            id: "ForthName",
                          })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="bi bi-person special"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "ForthName",
                            })}
                            {...register("forthName")}
                          />
                          {DisplayErrorMessage(
                            errors?.forthName?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div> */}
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                          className="form-label px-2  fs-6 text-gray-700 required"
                        >
                          {intl.formatMessage({
                            id: "QuadrupleName",
                          })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="bi bi-person special"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "QuadrupleName",
                            })}
                            {...register("quadrupleName")}
                          />
                          {DisplayErrorMessage(
                            errors?.quadrupleName?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "Username" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="bi bi-person-circle special"></i>
                            </span>
                          </div>
                          <input
                            {...register("userName")}
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "Username",
                            })}
                          />
                          {DisplayErrorMessage(errors?.userName?.message, intl)}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "Email" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="special bi bi-envelope"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            {...register("email")}
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "Email",
                            })}
                          />
                          {DisplayErrorMessage(errors?.email?.message, intl)}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "PhoneNumber" })}
                        </label>
                        <div className="input-group ">
                          <div className="input-group-prepend">
                            <span className="input-group-text">966+</span>
                          </div>

                          <input
                            type="number"
                            className="form-control"
                            placeholder="5xxxxxxxx"
                            {...register("phoneNumber")}
                          />
                          {DisplayErrorMessage(
                            errors?.phoneNumber?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({
                            id: "Gender",
                          })}
                        </label>
                        <div className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 d-flex">
                          <div className="form-check form-check-success form-check-sm form-check-custom">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="gender"
                              id="male_gender"
                              onClick={() => {
                                setuserGender(UserGender.Male);
                              }}
                              checked={
                                userGender == UserGender.Male ? true : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="male_gender"
                            >
                              {intl.formatMessage({
                                id: "Male",
                              })}
                            </label>
                          </div>
                          <div className="form-check form-check-success form-check-sm form-check-custom me-8">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="gender"
                              id="female_gender"
                              onClick={() => {
                                setuserGender(UserGender.Female);
                              }}
                              checked={
                                userGender == UserGender.Female ? true : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female_gender"
                            >
                              {intl.formatMessage({
                                id: "Female",
                              })}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {`${intl.formatMessage({
                            id: "IDNumber",
                          })}
                                    /${intl.formatMessage({
                                      id: "Residence",
                                    })}`}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="special fa-solid fa-id-card"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            {...register("nationalId")}
                            placeholder={`${intl.formatMessage({
                              id: "IDNumber",
                            })}/${intl.formatMessage({
                              id: "Residence",
                            })}`}
                          />
                          {DisplayErrorMessage(
                            errors?.nationalId?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-12 col-sm-3 col-md-4"></div> */}
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "UserType" })}
                        </label>
                        <div className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 d-flex">
                          <div className="form-check form-check-success form-check-sm form-check-custom">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              // name="userType"
                              value={0}
                              id="systemUser"
                              // {...register("userType")}
                              onClick={(e) => {
                                // setUserType(UserTypeEnum.systemUser);
                                // setValue("userType", true);
                                handleUserTypeChange(e);
                              }}
                              checked={
                                // userType == UserTypeEnum.systemUser
                                //   ? true
                                //   : false
                                formValues.userType == 0 ? true : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="systemUser"
                            >
                              {intl.formatMessage({
                                id: "SystemUser",
                              })}
                            </label>
                          </div>
                          <div className="form-check form-check-success form-check-sm form-check-custom me-8">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              // name="userType"
                              {...register("userType")}
                              id="domainUser"
                              value={1}
                              onClick={(e) => {
                                // setUserType(UserTypeEnum.domainUser);
                                // setValue("userType", false);
                                handleUserTypeChange(e);
                              }}
                              checked={
                                // userType == UserTypeEnum.domainUser
                                //   ? true
                                //   : false
                                // !formValues.userType
                                formValues.userType == 1 ? true : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="domainUser"
                            >
                              {intl.formatMessage({
                                id: "DomainUser",
                              })}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {formValues.userType == 1 ? (
                      <>
                        <div className="col-12 col-sm-3 col-md-4">
                          <div className="mb-2 pt-2 pb-3 ">
                            <label
                              className="form-label px-2  fs-6 text-gray-700 required"
                              style={{
                                textAlign: language == "Ar" ? "right" : "left",
                                width: "100%",
                                display: "block",
                              }}
                            >
                              {intl.formatMessage({ id: "Domains" })}
                            </label>

                            <div className="mx-auto mt-1  ">
                              <select
                                {...register("domainId")}
                                className="form-select form-select-solid"
                              >
                                <option value={""} selected disabled>
                                  {intl.formatMessage({ id: "ChooseDomain" })}
                                </option>
                                {domains?.map((domain) => (
                                  <option value={domain?.id} key={domain?.id}>
                                    {domain?.domainName}
                                  </option>
                                ))}
                              </select>
                              {DisplayErrorMessage(
                                errors?.domainId?.message,
                                intl
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="col-12">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "Address" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text h-100">
                              <i className="special bi bi-geo-alt"></i>
                            </span>
                          </div>
                          <textarea
                            className="form-control"
                            {...register("address")}
                            placeholder={intl.formatMessage({
                              id: "Address",
                            })}
                          ></textarea>
                          {DisplayErrorMessage(errors?.address?.message, intl)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <h3
                      className="h1 mb-8"
                      style={{ textAlign: language == "Ar" ? "right" : "left" }}
                    >
                      {intl.formatMessage({ id: "JobInformation" })}
                    </h3>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3 ">
                        <label
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                          className="form-label px-2  fs-6 text-gray-700 required"
                        >
                          {intl.formatMessage({ id: "JobDegree" })}
                        </label>

                        <div className="mx-auto mt-1  ">
                          {/* <CheckBoxDropDown
                            selectedOptions={jobDegree}
                            setSelectedOptions={setJobDegree}
                            options={jobDegreeOptions}

                          /> */}
                          <select
                            {...register("jobDegreeId")}
                            className="form-select form-select-solid"
                          >
                            <option value={""} selected disabled>
                              {intl.formatMessage({ id: "ChooseJobDegree" })}
                            </option>
                            {jobDegrees?.map((jobDegree: jobDegreeModel) => (
                              <option value={jobDegree?.id} key={jobDegree?.id}>
                                {language == "Ar"
                                  ? jobDegree?.nameAr
                                  : jobDegree?.nameEn}
                              </option>
                            ))}
                          </select>
                          {DisplayErrorMessage(
                            errors?.jobDegreeId?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "JobRole" })}
                        </label>
                        <div className="mx-auto mt-1  ">
                          {/* <CheckBoxDropDown
                            selectedOptions={jobTitle}
                            setSelectedOptions={setJobTitle}
                            options={jobTitleOptions}
                          /> */}
                          <select
                            {...register("jobRoleId")}
                            className="form-select form-select-solid"
                          >
                            <option value={""} selected disabled>
                              {intl.formatMessage({
                                id: "ChooseJobRole",
                              })}
                            </option>
                            {/* {jobDegreeOptions?.map((role) => (
                              <option value={role?.id} key={role?.id}>
                                {role?.name}
                              </option>
                            ))} */}
                            {jobRoles?.map((role: JobRoleModel) => (
                              <option value={role?.id} key={role?.id}>
                                {language == "Ar" ? role?.nameAr : role?.nameEn}
                              </option>
                            ))}
                          </select>
                          {DisplayErrorMessage(
                            errors?.jobRoleId?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({
                            id: "JobPosition",
                          })}
                        </label>
                        <div className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 d-flex">
                          <div className="form-check form-check-success form-check-sm form-check-custom">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="jobPosition"
                              id="managerPosition"
                              onClick={() => {
                                setUserPosition(UserPosition.Manager);
                              }}
                              checked={
                                userPosition == UserPosition.Manager
                                  ? true
                                  : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="managerPosition"
                            >
                              {intl.formatMessage({
                                id: "Manager",
                              })}
                            </label>
                          </div>
                          <div className="form-check form-check-success form-check-sm form-check-custom me-8">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="jobPosition"
                              id="employeePosition"
                              onClick={() => {
                                setUserPosition(UserPosition.Employee);
                              }}
                              checked={
                                userPosition == UserPosition.Employee
                                  ? true
                                  : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="employeePosition"
                            >
                              {intl.formatMessage({
                                id: "Employee",
                              })}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "JobName" })}
                        </label>
                        <div className="mx-auto mt-1  ">
                          {/* <CheckBoxDropDown
                            selectedOptions={jobTitle}
                            setSelectedOptions={setJobTitle}
                            options={jobTitleOptions}
                          /> */}
                          <select
                            {...register("jobNameId")}
                            className="form-select form-select-solid"
                          >
                            <option value={""} selected disabled>
                              {intl.formatMessage({ id: "ChooseJobName" })}
                            </option>
                            {/* {jobDegreeOptions?.map((role) => (
                              <option value={role?.id} key={role?.id}>
                                {role?.name}
                              </option>
                            ))} */}
                            {jobNames?.map((jobName: JobNameModel) => (
                              <option value={jobName?.id} key={jobName?.id}>
                                {language == "Ar"
                                  ? jobName?.nameAr
                                  : jobName?.nameEn}
                              </option>
                            ))}
                          </select>
                          {DisplayErrorMessage(
                            errors?.jobNameId?.message,
                            intl
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3 ">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({
                            id: "EmployeeManagement",
                          })}
                        </label>

                        <div className="mx-auto mt-1  ">
                          <div
                            className="input-group"
                            role="button"
                            onClick={() => {
                              setShowHierarchy(true);
                            }}
                            // data-bs-toggle="modal"
                            // data-bs-target="#rega_modal_departmental_organizational_structure"
                          >
                            <input
                              type="select"
                              className="form-control form-control-solid ps-10"
                              name="search"
                              value={orgName}
                              placeholder={intl.formatMessage({
                                id: "Choose",
                              })}
                              role="button"
                              readOnly={true}
                            />

                            <i className="bi bi-diagram-3 fs-1 input-group-text border-radius-0"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "DateFrom" })}
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          placeholder={intl.formatMessage({
                            id: "DateFrom",
                          })}
                          {...register("startDate")}
                        />
                        {DisplayErrorMessage(errors?.startDate?.message, intl)}
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "DateTo" })}
                        </label>
                        <input
                          type="date"
                          {...register("endDate")}
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          placeholder={intl.formatMessage({
                            id: "DateTo",
                          })}
                        />
                        {DisplayErrorMessage(errors?.endDate?.message, intl)}
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({
                            id: "JobPeriod",
                          })}
                        </label>
                        <div className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 d-flex">
                          <div className="form-check form-check-success form-check-sm form-check-custom">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="JobPeriod"
                              id="main"
                              onClick={() => {
                                setJobTime(JobTime.Main);
                              }}
                              checked={jobTime == JobTime.Main ? true : false}
                            />
                            <label className="form-check-label" htmlFor="main">
                              {intl.formatMessage({
                                id: "Main",
                              })}
                            </label>
                          </div>
                          <div className="form-check form-check-success form-check-sm form-check-custom me-8">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="JobPeriod"
                              id="delegated"
                              onClick={() => {
                                setJobTime(JobTime.Delegated);
                              }}
                              checked={
                                jobTime == JobTime.Delegated ? true : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="delegated"
                            >
                              {intl.formatMessage({
                                id: "Delegated",
                              })}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "HiringDate" })}
                        </label>
                        <input
                          type="date"
                          {...register("hiringDate")}
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          placeholder={intl.formatMessage({
                            id: "HiringDate",
                          })}
                        />
                        {DisplayErrorMessage(errors?.hiringDate?.message, intl)}
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4"></div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3 d-flex flex-column w-100">
                        <label className="form-label px-2  fs-6 text-gray-700 required invisible">
                          {intl.formatMessage({ id: "Add" })}
                        </label>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            addInformationJobs({
                              orgId,
                              orgName,
                              // jobName:formValues.jobNameId,
                              startDate: formValues.startDate,
                              endDate: formValues.endDate,
                              jobTime,
                              hiringDate: formValues.hiringDate,
                              jobDegreeId: formValues.jobDegreeId,
                              jobRoleId: formValues.jobRoleId,
                              userKind: userPosition,
                            });
                          }}
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 bg-transparent border border-primary text-primary w-300px align-self-end"
                        >
                          <i className="bi bi-plus-lg text-primary border border-primary fw-bolder rounded-1 ms-2 px-1"></i>
                          {intl.formatMessage({
                            id: "Add",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2 pt-2 pb-3 d-flex flex-column">
                        <div className="table-responsive px-2  fs-6 ">
                          <table className="table table-borderless align-middle">
                            <thead className="bg-light p-4 text-center fw-lighter border">
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "AffiliatedManagementAndJob",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "DateFrom",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "DateTo",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "HiringDate",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "WorkPeriod",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "Actions",
                                })}
                              </td>
                            </thead>
                            <tbody className="text-center border">
                              {informationJobsForTable?.map(
                                (job: informationJobs, index: number) => {
                                  return (
                                    <Fragment key={index}>
                                      <tr className="text-center fw-lighter">
                                        <td className="p-5">
                                          {/* الادارة الاولي */}
                                          {job.orgName}
                                          <span className="d-block text-center fa-sm text-muted mt-3">
                                            {jobNames?.find((item)=>{return item?.id ==formValues?.jobNameId})?.nameAr}
                                            {/* عالم */}
                                          </span>
                                        </td>

                                        <td className="p-5">
                                          {moment(job.startDate).format(
                                            "YYYY-MM-DD"
                                          )}
                                        </td>
                                        <td className="p-5">
                                          {moment(job.endDate).format(
                                            "YYYY-MM-DD"
                                          )}
                                        </td>
                                        <td className="p-5">
                                          {moment(job.hiringDate).format(
                                            "YYYY-MM-DD"
                                          )}
                                        </td>
                                        <td className="p-5">
                                          {job.jobTime == 0
                                            ? intl.formatMessage({
                                                id: "Main",
                                              })
                                            : intl.formatMessage({
                                                id: "Delegated",
                                              })}
                                        </td>
                                        <td className="p-5">
                                          <div>
                                            <AddUserJobInfoActions
                                              id={job.id}
                                              informationJobsForTable={
                                                informationJobsForTable
                                              }
                                              setInformationJobsForTable={
                                                setInformationJobsForTable
                                              }
                                              handleEditForJob={
                                                handleEditForJob
                                              }
                                            />
                                          </div>
                                        </td>
                                      </tr>
                                    </Fragment>
                                  );
                                }
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <h3
                      className="h1 mb-8"
                      style={{ textAlign: language == "Ar" ? "right" : "left" }}
                    >
                      {intl.formatMessage({ id: "Permissions" })}
                    </h3>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({
                            id: "UnifiedEntry",
                          })}
                        </label>
                        <div className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 d-flex">
                          <div className="form-check form-check-success form-check-sm form-check-custom">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="unifiedEntry"
                              id="unifiedEntryEnabled"
                              checked={isNafaz ? true : false}
                              onClick={() => {
                                setIsNafaz(true);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="unifiedEntryEnabled"
                            >
                              {intl.formatMessage({
                                id: "Enabled",
                              })}
                            </label>
                          </div>
                          <div className="form-check form-check-success form-check-sm form-check-custom me-8">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="unifiedEntry"
                              id="unifiedEntryDisabled"
                              checked={!isNafaz ? true : false}
                              onClick={() => {
                                setIsNafaz(false);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="unifiedEntryDisabled"
                            >
                              {intl.formatMessage({
                                id: "Disabled",
                              })}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({ id: "DetermineEmployeeRole" })}
                        </label>
                        <div className="mx-auto mt-1">
                          <UsersCheckBoxDropDown
                            selectedOptions={employeeRole}
                            setSelectedOptions={setEmployeeRole}
                            options={employeeRolseOptions}
                            selectedRoleIds={selectedEmployeeRolesIds}
                            setSelectedRoleIds={setSelectedEmployeeRolesIds}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3 d-flex flex-column">
                        <label className="form-label px-2  fs-6 text-gray-700 required invisible">
                          {intl.formatMessage({ id: "Add" })}
                        </label>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            addPermissions({
                              isNafaz,
                              isExpired:
                                formValues?.isExpired as unknown as boolean,
                              expirationDateFrom: formValues.expirationDateFrom,
                              expirationDateTo: formValues.expirationDateTo,
                            });
                          }}
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 bg-transparent border border-primary text-primary w-300px align-self-end"
                        >
                          <i className="bi bi-plus-lg text-primary border border-primary fw-bolder rounded-1 ms-2 px-1"></i>
                          {intl.formatMessage({
                            id: "Add",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }} className="form-label px-2  fs-6 text-gray-700 required">
                          {intl.formatMessage({
                            id: "EnablePermission",
                          })}
                        </label>
                        <div className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 d-flex">
                          <div className="form-check form-check-success form-check-sm form-check-custom">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="enablePermission"
                              id="enabled"
                              value={0}
                              onChange={(e) => {
                                handleIsExpiredChange(e);
                              }}
                              // onClick={() => {
                              //   setIsExpired(true);
                              // }}
                              checked={formValues.isExpired ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="enabled"
                            >
                              {intl.formatMessage({
                                id: "Enabled",
                              })}
                            </label>
                          </div>
                          <div className="form-check form-check-success form-check-sm form-check-custom me-8">
                            <input
                              className="form-check-input text-danger"
                              type="radio"
                              name="enablePermission"
                              id="disabled"
                              // onClick={() => {
                              //   setIsExpired(false);
                              // }}
                              value={1}
                              onChange={(e) => {
                                handleIsExpiredChange(e);
                              }}
                              checked={!formValues?.isExpired ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="disabled"
                            >
                              {intl.formatMessage({
                                id: "Disabled",
                              })}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({
                            id: "PermissionPeriodFrom",
                          })}
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          placeholder={intl.formatMessage({
                            id: "PermissionPeriodFrom",
                          })}
                          {...register("expirationDateFrom")}
                        />
                        {DisplayErrorMessage(
                          errors?.expirationDateFrom?.message,
                          intl
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-4">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          className="form-label px-2  fs-6 text-gray-700 required"
                          style={{
                            textAlign: language == "Ar" ? "right" : "left",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          {intl.formatMessage({
                            id: "PermissionPeriodTo",
                          })}
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          placeholder={intl.formatMessage({
                            id: "PermissionPeriodTo",
                          })}
                          {...register("expirationDateTo")}
                        />
                        {DisplayErrorMessage(
                          errors?.expirationDateTo?.message,
                          intl
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2 pt-2 pb-3 d-flex flex-column">
                        <div className="table-responsive px-2  fs-6 ">
                          <table className="table table-borderless align-middle">
                            <thead className="bg-light p-4 text-center fw-lighter border">
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "UnifiedEntry",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "EnablePermission",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "PermissionPeriodFrom",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "PermissionPeriodTo",
                                })}
                              </td>
                              <td className="p-5">
                                {intl.formatMessage({
                                  id: "Actions",
                                })}
                              </td>
                            </thead>
                            <tbody className="text-center border">
                              {permissionsForTable?.map(
                                (permission: Permissions, index: number) => {
                                  return (
                                    <Fragment key={index}>
                                      <tr className="text-center fw-lighter">
                                        <td className="p-5">
                                          {permission?.isNafaz
                                            ? intl.formatMessage({
                                                id: "Enabled",
                                              })
                                            : intl.formatMessage({
                                                id: "Disabled",
                                              })}
                                        </td>
                                        <td className="p-5">
                                          {permission?.isExpired
                                            ? intl.formatMessage({
                                                id: "Enabled",
                                              })
                                            : intl.formatMessage({
                                                id: "Disabled",
                                              })}
                                        </td>
                                        <td className="p-5">
                                          {permission?.expirationDateFrom
                                            ? moment(
                                                permission?.expirationDateFrom
                                              ).format("YYYY-MM-DD")
                                            : "--"}
                                        </td>
                                        <td className="p-5">
                                          {" "}
                                          {permission?.expirationDateTo
                                            ? moment(
                                                permission?.expirationDateTo
                                              ).format("YYYY-MM-DD")
                                            : "--"}
                                        </td>
                                        <td className="p-5">
                                          <div>
                                            <AddUserPermissionsActions
                                              id={permission?.id}
                                              permissionsForTable={
                                                permissionsForTable
                                              }
                                              setPermissionsForTable={
                                                setPermissionsForTable
                                              }
                                              handleEditForPermission={
                                                handleEditForPermission
                                              }
                                            />
                                          </div>
                                        </td>
                                      </tr>
                                    </Fragment>
                                  );
                                }
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center pb-5">
                  <Link
                    className="btn btn-secondary m-3 px-5 py-3"
                    style={{ width: "125px" }}
                    to="/admin-panel-users-workspace/admin-panel-users/users"
                  >
                    {intl.formatMessage({
                      id: "Cancel",
                    })}
                  </Link>

                  {selectedEmployeeRolesIds.length > 0 ? (
                    <>
                      <button
                        type="submit"
                        className="btn btn-success m-3 px-5 py-3"
                        style={{ width: "125px" }}
                      >
                        {intl.formatMessage({
                          id: "Add",
                        })}
                      </button>
                    </>
                  ) : (
                    <>
                      <div
                        className="btn btn-success m-3 px-5 py-3"
                        onClick={() => {
                          showFailureRolesAlert();
                        }}
                        style={{ width: "125px" }}
                      >
                        {intl.formatMessage({
                          id: "Add",
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <div
        className="modal fade"
        id="rega_modal_departmental_organizational_structure"
        aria-hidden="true"
      >
        <DepartmentalOrganizationalStructurePopup
          showHierarchy={showHierarchy}
          orgId={orgId}
          setOrgId={setOrgId}
          orgName={orgName}
          setOrgName={setOrgName}
          handleClose={() => {
            setShowHierarchy(false);
          }}
        />
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
