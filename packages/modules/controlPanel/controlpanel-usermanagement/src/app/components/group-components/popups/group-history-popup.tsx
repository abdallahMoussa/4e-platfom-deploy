import { FC, useState } from "react";
import { useIntl } from "react-intl";
//import { KTSVG, toAbsoluteUrl } from "../../../../helpers";

const GroupHistoryPopup: FC = () => {
  const intl = useIntl();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: true,
      isDisabled: true,
    },
    {
      id: 2,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: false,
      isDisabled: false,
    },
    {
      id: 3,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: true,
      isDisabled: false,
    },
    {
      id: 4,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: false,
      isDisabled: false,
    },
    {
      id: 5,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: true,
      isDisabled: false,
    },
  ]);

  return (
    <div
      className="modal fade creatForm"
      id="Rega_modal_group_history"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content rounded">
          <div className="modal-header pb-0 border-0 justify-content-end">
            <div
              className="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              {/* <span className="svg-icon svg-icon-1">
                <KTSVG
                  path="/media/icons/duotune/general/gen101_close.svg"
                  className="svg-icon-2x"
                />
              </span> */}
            </div>
          </div>
          <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15 mb-7">
            <div className="text-center fw-bolder  pb-13 border-bottom border-gray-300">
              <h1 className="mb-3">
                {intl.formatMessage({ id: "GroupHistory" })}
              </h1>
            </div>

            <div className="mb-15">
              <div className='d-flex justify-content-end align-items-center my-5'>
                <button
                  className="btn btn-primary w-bolder mx-4 text-center mw-100"
                >
                  {/* <span className="svg-icon svg-icon-5 svg-icon-gray-500 m-0">
                      <KTSVG
                        path="/media/icons/duotune/general/gen100_filter.svg"
                        className="svg-icon-1x"
                      />
                  </span> */}
                  {intl.formatMessage({ id: "Filtering" })}
                </button>
              </div>
              <div className="border-top border-1 h-200px overflow-auto px-8">
                {users.map((user) => (
                  <div className="d-flex justify-content-between my-8">
                    <div className="d-flex align-items-center">
                      <div className="symbol position-relative  symbol-circle symbol-35px">
                        <img
                          alt="Pic"
                          className="mx-4"
                          // src={toAbsoluteUrl(
                          //   `/media/avatars/${user.avatar}`
                          // )}
                          src={''}
                        />
                      </div>

                      <div>
                        <p className="mb-0">{user.name}</p>
                        <p className="mb-0 text-muted fw-lighter">
                          {user.title}
                        </p>
                      </div>
                    </div>
                    <span className='text-muted'>تحديث تاريخ التسليم</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GroupHistoryPopup };
