/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useLayout } from '../core'
import { useIntl } from "react-intl";

const Footer: FC = () => {
    const intl = useIntl()
    const { classes } = useLayout()
    return (
        <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
            {/* begin::Container */}
            <div
                className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
            >
                {/* begin::Copyright */}
                <div className='text-dark order-2 order-md-1'>

                    <a href='#' className='text-gray-800 text-hover-primary'>
                        {intl.formatMessage({ id: "AllRightsReservedToRegaWorkSpace" })}
                    </a>
                    <span className='text-muted fw-bold me-2'>&copy; {new Date().getFullYear()} </span>
                </div>
                {/* end::Copyright */}

                {/* begin::Nav */}
                <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
                    <li className='menu-item'>
                        <a href='#' className='menu-link ps-0 fs-sm pe-2'>
                            {intl.formatMessage({ id: "TermsAndConditions" })}
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a href='#' className='menu-link pe-0 fs-sm pe-2'>
                            {intl.formatMessage({ id: "UsagePolicy" })}
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a href='#' className='menu-link pe-0 fs-sm'>
                            {intl.formatMessage({ id: "UsersGuide" })}
                        </a>
                    </li>
                </ul>
                {/* end::Nav */}
            </div>
            {/* end::Container */}
        </div>
    )
}

export { Footer }
