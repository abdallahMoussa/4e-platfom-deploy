import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";

interface Iprop {
  totalPages: number;
  page: number;
}
export const AuthorsSystemPagination: React.FC<Iprop> = ({ totalPages, page }) => {
  const intl = useIntl();
  const [searchParams, setSearchParams] = useSearchParams();
  const updatePageNumber = (newPage: number) => {
    searchParams.set("pageNumber", newPage.toString());
    setSearchParams(searchParams);
    if (newPage == 1) {
      searchParams.set("pageNumber", "1");
      setSearchParams(searchParams);
    }
  };
  const updatePageSize = (value) => {
    searchParams.set("pageSize", value.toString());
    setSearchParams(searchParams);
  };
  return (
    <div className="d-flex flex-stack flex-wrap pt-10">
      <div className="d-flex flex-stack flex-wrap">
        <label>{intl.formatMessage({ id: "TheNumberOfRows" })}</label>
        <select
          onChange={(e) => {
            updatePageSize(e.target.value);
          }}
          value={+searchParams.get("pageSize")}
          name="t"
          aria-=""
          className="form-select form-select-sm form-select-solid w-75px ms-3"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <ul className="pagination pagination-outline">
        <li
          className={`page-item previous m-1 border-0 outline-0 ${page === 1 ? "disabled" : ""}`}
          onClick={() => {
            if (page > 1) {
              updatePageNumber(page - 1);
            }
          }}
        >
          <div className="page-link cursor-pointer">
            <i className="previous"></i>
          </div>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            className={`page-item cursor-pointer  m-1 ${page == index + 1 && +searchParams.get("pageNumber") == index + 1 ? "active text-hover-white" : ""}`}
            onClick={() => {
              updatePageNumber(index + 1);
            }}
          >
            <div className="page-link">{index + 1}</div>
          </li>
        ))}
        <li
          className={`page-item next m-1 border-0 outline-0 ${page === totalPages ? "disabled" : ""}`}
          onClick={() => {
            if (page < totalPages) {
              updatePageNumber(page + 1);
            }
          }}
        >
          <div className="page-link cursor-pointer">
            <i className="next"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};
