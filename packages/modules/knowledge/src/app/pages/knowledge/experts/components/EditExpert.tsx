import { Fragment, useState } from "react";
import EditBasicData from "./EditBasicData";
import EditJobData from "./EditJobData";
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router';
import { EditExperienceData } from "./EditExperienceData";
import { EditPopup } from "../../../partials/EditPopup";

const EditExpert = () => {
    const navigate = useNavigate();
    const [showEdit, setShowEdit] = useState(false);
    const intl = useIntl()
    return(
        <Fragment>
        <div className="card card-xl-stretch mb-xl-8 me-3">
            <div className="card-body py-3">
                <form noValidate className="">
                <div className='d-flex align-items-center justify-content-between py-5'>
                    <p
                    style={{fontWeight: '700', width: '80%', fontSize: '18px', color: '#181C32'}}
                    className='mb-3'
                    >
                    {intl.formatMessage({ id: "BasicData" })}
                    </p>
                    <hr />
                </div>
                <EditBasicData />
                <EditJobData />
                <EditExperienceData />
                <div className="col-12 col-lg-7 mx-auto mb-10">
                <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center w-50"> 
                    <div className="btn btn-secondary mx-1 text-center w-100"
                      onClick={() => navigate("/knowledge-experts-profile")}
                    >
                        {intl.formatMessage({ id: "Cancel" })}
                    </div>
                    <div className="btn btn-primary mx-1 text-center w-100"
                    onClick={() => setShowEdit(true)}
                    >
                      {intl.formatMessage({ id: "Save"})}
                      </div>
                    </div>
                </div>
                </div>
                
                </form>
            </div>
        </div>
        <div className="modal fade" aria-hidden="true">
            <EditPopup showEdit={showEdit} handleCloseEdit={() => setShowEdit(false)} />
        </div>
        </Fragment>
    );
}

export {EditExpert}