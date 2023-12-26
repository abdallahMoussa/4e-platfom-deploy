import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";
import { AddPopup } from "../../../partials/AddPopup";

const IdeaRating: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const intl = useIntl();

  return (
    <>
      <div>
        <div>
          <div className="mb-4 pt-2">
            <div className="border-bottom mb-2 py-1">
              <h5>التأييد</h5>
            </div>
            <div className="row gy-5 py-5 my-4 align-items-center">
              <div className="col-md-3">
                <div>
                  <h5 className="text-gray-500">
                    {intl.formatMessage({ id: "DoYouSupportThisIdea" })}
                  </h5>
                </div>
              </div>
              <div className="col-md-9">
                <div className="d-flex justify-content-start align-items-center">
                  <div
                    role="button"
                    className="bg-success px-3 py-2 rounded-2 text-white mx-2"
                  >
                    <i className="fa-regular fa-thumbs-up mx-1 fs-3 fa-fw"></i>{" "}
                    {intl.formatMessage({ id: "ISupport" })}
                  </div>
                  <div
                    role="button"
                    className="bg-danger px-3 py-2 rounded-2 text-white mx-2"
                  >
                    <i className="fa-regular fa-thumbs-down mx-1 fs-3 fa-fw"></i>{" "}
                    {intl.formatMessage({ id: "Objection" })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 pt-2">
            <div className="border-bottom mb-2 py-1">
              <h5>{intl.formatMessage({ id: "Reviews" })}</h5>
            </div>
            <div className="row gy-5 py-5 my-4 align-items-center">
              <div className="col-md-2">
                <div>
                  <h5 className="text-gray-500">
                    {intl.formatMessage({ id: "AddYourReview" })}
                  </h5>
                </div>
              </div>
              <div className="col-md-10">
                <div className="d-flex justify-content-start align-items-center">
                  <div className="mx-1">
                    <i className="fa-solid fa-star mx-1 fs-3 fa-fw text-warning"></i>
                  </div>
                  <div className="mx-1">
                    <i className="fa-solid fa-star mx-1 fs-3 fa-fw text-warning"></i>
                  </div>
                  <div className="mx-1">
                    <i className="fa-solid fa-star mx-1 fs-3 fa-fw text-warning"></i>
                  </div>
                  <div className="mx-1">
                    <i className="fa-solid fa-star mx-1 fs-3 fa-fw text-warning"></i>
                  </div>
                  <div className="mx-1">
                    <i className="fa-solid fa-star mx-1 fs-3 fa-fw text-warning"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <div className="border-bottom mb-2 py-1">
              <h5>{intl.formatMessage({ id: "Comments" })}</h5>
            </div>
            <div className="row gy-5 py-5 my-4 align-items-center">
              <div className="col-md-2">
                <div>
                  <h5 className="text-gray-500">
                    {intl.formatMessage({ id: "AddAComment" })}
                  </h5>
                </div>
              </div>
              <div className="col-md-10">
                <div className="d-flex justify-content-start align-items-center">
                  <div className="my-1 bg-light p-4 rounded-2 w-100">
                    <div className="text-gray-600">
                      لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                      الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع
                      ودور النشر.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center my-5">
              <button
                type="reset"
                data-bs-dismiss="modal"
                aria-hidden="true"
                className="btn btn-sm btn-secondary px-15 me-5"
              >
                {intl.formatMessage({ id: "Cancel" })}
              </button>
              <button
                className="btn btn-sm btn-success px-15 ms-5"
                // data-kt-element="send"
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_add"
                onClick={() => setModalShow(true)}
              >
                {intl.formatMessage({ id: "Add" })}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </>
  );
};

export { IdeaRating };
