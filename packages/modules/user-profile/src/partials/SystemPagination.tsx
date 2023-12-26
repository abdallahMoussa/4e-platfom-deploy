import { FC } from 'react'
import { useIntl } from "react-intl";

export const SystemPagination: FC = () => {
	const intl = useIntl()

	return (
		<div className="d-flex flex-stack flex-wrap pt-5">
			<div className="d-flex flex-stack flex-wrap">
				<label>{intl.formatMessage({ id: "TheNumberOfRows" })}</label>
				<select name="t" aria-="" className="form-select form-select-sm form-select-solid w-75px ms-3">
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
			</div>
			<ul className="pagination pagination-outline">
				<li className="page-item previous disabled m-1">
					<a href="#" className="page-link"><i className="previous"></i></a>
				</li>
				<li className="page-item active m-1">
					<a href="#" className="page-link">1</a>
				</li>
				<li className="page-item m-1">
					<a href="#" className="page-link">2</a>
				</li>
				<li className="page-item m-1">
					<a href="#" className="page-link">3</a>
				</li>
				<li className="page-item next m-1"><a href="#" className="page-link"><i className="next"></i></a></li>
			</ul>
		</div>
	)
}

