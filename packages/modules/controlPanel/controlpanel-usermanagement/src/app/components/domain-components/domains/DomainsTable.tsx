import { FC } from "react";
import { DomainsTableHeader } from "./domain-table-header";
import { DomainsTableRows } from "./domain-table-rows";
import { AuthorsSystemPagination } from "../../../shared/SystemPagination";
import { useSearchParams } from "react-router-dom";
// import { ElementStatus } from "./ElementStatus";
// import { Actions } from "./ActionsComponent";
// import { toAbsoluteUrl } from "../../../../helpers";
import { useIntl } from "react-intl";
import { RootState } from "../../../features/store";
import { useSelector } from "react-redux";

export const DomainsTable: FC = () => {
  const intl = useIntl();
  let [searchParams] = useSearchParams();
  let domains = useSelector((state: RootState) => {
    return state?.domains?.data;
  });

  let totalPages = useSelector((state: RootState) => {
    return state?.domains?.totalPages;
  });
  return (
    <div className="table-responsive">
      <table
        className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        id="REGA-WS-caseList"
      >
        <DomainsTableHeader />
        <DomainsTableRows />
      </table>
      {domains?.length ? (
        <AuthorsSystemPagination
          totalPages={totalPages}
          page={searchParams?.get("pageNumber") as unknown as number}
        />
      ) : (
        <div className="d-flex fw-bolder justify-content-center align-items-center">
          {intl.formatMessage({ id: "No_data_yet" })}
        </div>
      )}
    </div>
  );
};
