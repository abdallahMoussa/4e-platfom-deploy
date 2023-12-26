import { FC } from 'react'
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { PDFViewer } from '../../../../partials/PDFViewer'

interface IProjectsList {
    id: string;
    project_name: string;
    project_owner: string;
    current_administration: string;
    duration: string;
    project_type: string;
    project_history: string;
    Procedures: string;
}
export const ProjectsList: FC<IProjectsList> = ({ id, project_name, project_owner, current_administration, duration, project_type, project_history, Procedures }) => {
    const intl = useIntl()

    return (
        <>
            <td className='text-center'>
                <div>
                    <div className="d-flex justify-content-start flex-column">
                        <Link to={`/pmo-new-feasibility-study/project-detail/${id}`} className="text-blue fw-bolder text-hover-primary mb-1 fs-6">{intl.formatMessage({ id: 'ProjectName' })}</Link>
                        <span className="text-dark fw-bolder text-hover-primary mb-1 fs-8">{project_name}</span>
                    </div>
                </div>
            </td>
            <td className='text-center'>
                <div>
                    <div className="d-flex justify-content-start flex-column">
                        <a onClick={(event) => event.preventDefault()} className="text-dark fw-bolder text-hover-primary mb-1 fs-6">{project_owner}</a>
                    </div>
                </div>
            </td>
            <td className='text-center'>
                <div>
                    <div className="d-flex justify-content-start flex-column">
                        <a onClick={(event) => event.preventDefault()} className="text-dark fw-bolder text-hover-primary mb-1 fs-6">{current_administration}</a>
                    </div>
                </div>
            </td>
            <td className='text-center'>
                <div>
                    <div className="d-flex justify-content-start flex-column">
                        <a onClick={(event) => event.preventDefault()} className="text-dark fw-bolder text-hover-primary mb-1 fs-6">{duration}</a>
                    </div>
                </div>
            </td>
            <td className='text-center'>
                <div>
                    <div className="d-flex justify-content-start flex-column">
                        <a onClick={(event) => event.preventDefault()} className="text-dark fw-bolder text-hover-primary mb-1 fs-6">{project_type}</a>
                    </div>
                </div>
            </td>
            <td className='text-center'>
                <div>
                    <div className="d-flex justify-content-start flex-column">
                        <a onClick={(event) => event.preventDefault()} className="text-dark fw-bolder text-hover-primary mb-1 fs-6">{project_history}</a>
                    </div>
                </div>
            </td>
            <td className='text-center'>
                <div>
                    <div className="d-flex justify-content-start flex-column">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#ShowLetter" className="text-blue text-decoration-underline fw-bolder text-hover-primary mb-1 fs-6">{intl.formatMessage({ id: Procedures })}</a>
                    </div>
                </div>
            </td>

            <div className="modal fade letter-show mt-10" id="ShowLetter" tabIndex={-1} aria-hidden="true" style={{ paddingRight: "0px" }}>
                <PDFViewer path='/media/pdf/test.pdf' />
            </div>
        </>
    )

}