import { FC } from "react";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../../../helpers";
import { RightToolbar } from "../../partials/RightToolbar";
import { getCurrentSystemLanguage } from "../../../../partials/functions/language";
import {
  NewFeasibilityStudyToolbar,
  NewFeasibilityStudyToolbarLinkType,
} from "../toolbar/NewFeasibilityStudyToolbar";

export const SingleProjectDetail: FC = () => {
  const intl = useIntl();

  return (
    <>
      <NewFeasibilityStudyToolbar
        isNewFeasibilityStudy={false}
        type={NewFeasibilityStudyToolbarLinkType.FeasibilityStudy}
      />
      <RightToolbar />
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div
            className="flex-lg-row-fluid"
            data-select2-id="select2-data-129-tmo1"
          >
            <div className="card mb-5 mb-xl-8">
              <div className="card-body py-3 px-3 mx-8">
                <div className="row">
                  <div className="col-lg-12 mb-2 pt-8 pb-3 d-flex flex-stack flex-wrap">
                    <div className="d-flex mb-3">
                      <div
                        className="image-input image-input-outline"
                        data-kt-image-input="true"
                        style={{
                          backgroundImage: `url('${toAbsoluteUrl(
                            "/media/avatars/blank-img.png"
                          )}')`,
                        }}
                      >
                        <div
                          className="image-input-wrapper w-125px h-125px bgi-position-center"
                          style={{
                            backgroundSize: "75%",
                            backgroundImage: `url('${toAbsoluteUrl(
                              "/media/logos/Molak.png"
                            )}')`,
                          }}
                        ></div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center ms-3">
                        <div>
                          <h2 className="text-dark mb-2 fs-3 fw-bolder">
                            اسم المشروع
                          </h2>
                          <span className="text-muted fs-7">
                            إسم الاداره صاحبه المشروع
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-lg-nowrap flex-md-nowrap flex-wrap w-100 w-lg-50">
                      <div className="card shadow p-3 mb-5 bg-white w-100 w-lg-50 rounded  h-100px d-flex align-items-center justify-content-center me-3">
                        <div className="text-success text-center fs-1 fw-bolder">
                          قيد التنفيذ
                        </div>
                        <div className="text-muted fw-bolder text-center mt-3">
                          {intl.formatMessage({ id: "ProjectState" })}
                        </div>
                      </div>
                      <div className="card shadow p-3 mb-5 bg-white w-100 w-lg-50 rounded  h-100px d-flex align-items-center justify-content-center ms-3">
                        <div className="text-primary text-center fs-1 fw-bolder">
                          14
                        </div>
                        <div
                          className={`text-muted fw-bolder text-center ${
                            getCurrentSystemLanguage() == "ar" ? "mt-3" : ""
                          }`}
                        >
                          {intl.formatMessage({
                            id: "NumberOfProjectApprovals",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-2  pb-3">
                    <div className="table-responsive">
                      <table className="table table-rounded border table-row-gray-200 align-middle gs-0 gy-4 text-center">
                        <thead>
                          <tr className="text-dark fw-bold fs-6 bg-light">
                            <th className="px-2 pb-3 min-w-50px max-w-200px">
                              {intl.formatMessage({ id: "ProjectOwner" })}
                            </th>
                            <th className="px-2 pb-3 min-w-50px max-w-200px">
                              {intl.formatMessage({ id: "ProjectManager" })}
                            </th>
                            <th className="px-2 pb-3 min-w-50px max-w-350px">
                              {intl.formatMessage({ id: "ProjectValue" })}
                            </th>
                            <th className="px-2 pb-3 min-w-50px max-w-350px">
                              {intl.formatMessage({
                                id: "DurationOfTheProject",
                              })}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-muted">
                          <tr className="h-60px">
                            <td className="text-primary">اتمه العمليه</td>
                            <td className="text-primary">المواصفات</td>
                            <td>وحده القياس</td>
                            <td>وحده القياس</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    className="col-lg-12 mb-2 pb-3"
                    style={{
                      border: "3px solid #EBEDF3",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="mx-20 fw-bolder text-muted mt-5 fs-6">
                      {intl.formatMessage({ id: "ProjectApprovals" })}
                    </div>
                    <div className="card-body my-2">
                      <div className="timeline-label">
                        <div className="timeline-item">
                          <div className="timeline-label fw-bold text-gray-800 fs-6"></div>
                          <div className="timeline-badge px-4 my-8">
                            <img
                              src="/media/avatars/300-3.jpg"
                              style={{ width: "64px", borderRadius: "50%" }}
                            />
                          </div>
                          <div className="fw-mormal timeline-content text-muted ps-3 mx-5">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                  <p className="text-dark fw-bolder">
                                    تركى العطالله
                                  </p>
                                  <p className="text-muted mb-0">مسؤل تفتيش </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                  <p className="text-primary fw-bolder">
                                    25 Jun 2022
                                  </p>
                                  <p className="text-muted mb-0">
                                    تاريخ الاستلام
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                  <p className="text-success fw-bolder ">
                                    25 Jun 2022
                                  </p>
                                  <p className="text-muted mb-0">
                                    تاريخ الموافقة
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-label fw-bold text-gray-800 fs-6 "></div>
                          <div className="timeline-badge px-4 my-8">
                            <img
                              src="/media/avatars/300-3.jpg"
                              style={{ width: "64px", borderRadius: "50%" }}
                            />
                          </div>
                          <div className="fw-mormal timeline-content text-muted ps-3 mx-5">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                  <p className="text-dark fw-bolder">
                                    خلود العجلان
                                  </p>
                                  <p className="text-muted mb-0">مسؤل تفتيش </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                  <p className="text-primary fw-bolder">
                                    25 Jun 2022
                                  </p>
                                  <p className="text-mute mb-0">
                                    تاريخ الاستلام
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                  <p className="text-success  fw-bolder">
                                    25 Jun 2022
                                  </p>
                                  <p className="text-mute mb-0">
                                    تاريخ الموافقة
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-2 pb-3 mt-5">
                    <div className="table-responsive">
                      <table className="table table-rounded border table-row-gray-200 align-middle gs-0 gy-4 text-center">
                        <thead>
                          <tr className="text-dark fw-bold fs-6">
                            <th className="px-2 pb-3 min-w-50px max-w-200px">
                              {intl.formatMessage({
                                id: "PurchaseStageRequired",
                              })}
                            </th>
                            <th className="px-2 pb-3 min-w-50px max-w-200px">
                              {intl.formatMessage({ id: "TotalCost" })}
                            </th>
                            <th className="px-2 pb-3 min-w-50px max-w-350px">
                              {intl.formatMessage({
                                id: "LinkToInferentialPillars",
                              })}
                            </th>
                            <th className="px-2 pb-3 min-w-50px max-w-350px">
                              {intl.formatMessage({ id: "ChiefAppointees" })}
                            </th>
                            <th className="px-2 pb-3 min-w-50px max-w-350px">
                              {intl.formatMessage({ id: "Clause" })}
                            </th>
                            <th className="px-2 pb-3 min-w-50px max-w-350px">
                              {intl.formatMessage({ id: "Budget" })}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-muted">
                          <tr className="h-60px text-primary">
                            <td>لا</td>
                            <td>423,234,223 ر.س</td>
                            <td>مرتبط</td>
                            <td>عبد الله</td>
                            <td>لس هناك بند</td>
                            <td>423,234,223 ر.س</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <h2 className="text-primary mb-3 fs-3 mt-3">
                    {intl.formatMessage({ id: "WorkArea" })}
                  </h2>
                  <div
                    className="col-lg-12 mb-2"
                    style={{
                      border: "3px solid #EBEDF3",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="text-muted fs-6 mt-7 ms-3">
                      1 - المساهمه في زيادة الدخل القومي الخاص بالمشورع
                      الاستثماري
                    </div>
                    <div className="text-muted fs-6 my-7 ms-3">
                      2 - توفير فرص عمل للشباب
                    </div>
                    <div className="text-muted fs-6 mb-7 ms-3">
                      3 - تحقيق السيولة والتدفق النقدري
                    </div>
                  </div>
                  <h2 className="text-primary mb-3 fs-3 mt-7 ">
                    {intl.formatMessage({ id: "ProblemOpportunities" })}
                  </h2>
                  <div
                    className="col-lg-12 mb-2"
                    style={{
                      border: "3px solid #EBEDF3",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="text-muted fs-6 mt-7 ms-3">
                      1 - المساهمه في زيادة الدخل القومي الخاص بالمشورع
                      الاستثماري
                    </div>
                    <div className="text-muted fs-6 my-7 ms-3">
                      2 - توفير فرص عمل للشباب
                    </div>
                    <div className="text-muted fs-6 mb-7 ms-3">
                      3 - تحقيق السيولة والتدفق النقدري
                    </div>
                  </div>
                  <h2 className="text-primary mb-3 fs-3 mt-7 ">
                    {intl.formatMessage({ id: "MainOutputs" })}
                  </h2>
                  <div
                    className="col-lg-12 mb-2"
                    style={{
                      border: "3px solid #EBEDF3",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="text-muted fs-6 mt-7 ms-3">
                      1 - المساهمه في زيادة الدخل القومي الخاص بالمشورع
                      الاستثماري
                    </div>
                    <div className="text-muted fs-6 my-7 ms-3">
                      2 - توفير فرص عمل للشباب
                    </div>
                    <div className="text-muted fs-6 mb-7 ms-3">
                      3 - تحقيق السيولة والتدفق النقدري
                    </div>
                  </div>
                  <h2 className="text-primary mb-3 fs-3 mt-7 ">
                    {intl.formatMessage({ id: "BenefitsAndImpact" })}
                  </h2>
                  <div
                    className="col-lg-12 mb-2 mb-5"
                    style={{
                      border: "3px solid #EBEDF3",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="text-muted fs-6 mt-7 ms-3">
                      1 - المساهمه في زيادة الدخل القومي الخاص بالمشورع
                      الاستثماري
                    </div>
                    <div className="text-muted fs-6 my-7 ms-3">
                      2 - توفير فرص عمل للشباب
                    </div>
                    <div className="text-muted fs-6 mb-7 ms-3">
                      3 - تحقيق السيولة والتدفق النقدري
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
