import { FC } from "react";
import { useIntl } from "react-intl";

const PaymentsDigram: FC = () => {
    const intl = useIntl();
  
    return (
    <>
  <div className="card card-xl-stretch mb-xl-8 my-5">
  <div className="card-header border-0 pt-5 pb-2 mb-2">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bold fs-4 mb-1 ">
              {intl.formatMessage({ id: "PaymentScheduleIllustration" })}             </span>
              <span className="mt-1 fw-semibold fs-6  text-muted">
              {intl.formatMessage({ id: "PaymentsTable" })}              </span>
            </h3>
         
          </div>
          <div className="card-body py-5">

            
          </div>
          </div>
          </>
    )
}
export {PaymentsDigram}