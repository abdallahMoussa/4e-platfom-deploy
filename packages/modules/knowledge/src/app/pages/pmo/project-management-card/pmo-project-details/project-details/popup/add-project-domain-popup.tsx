import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../../../../helpers'
import Swal from 'sweetalert2';


const AddProjectDomainPopup: React.FC = () => {
 
  const intl = useIntl();
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: 'AddedSuccessfully' }),
      icon: 'success',
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: 'Agree' }),
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    })
  }


  return (
    <>
      <div className='modal fade' id='Rega_modal-add-project-domain' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered mw-1000px'>
          <div className='modal-content'>
            <div className='modal-header justify-content-end border-0 pb-0'>
              <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
              </div>
            </div>
            <div className='card'>
              <div className='card-body mx-5'>
                <div className='card-header px-1 d-flex justify-content-center  pb-2 mb-5'>
                  <h3 className='card-title flex-column align-items-center'>
                    <span className='card-label fw-bolder fs-3 mb-2 '>
                    {intl.formatMessage({ id: 'ProjectScopeAddition' })}
                  </span>
              
                    <span className='mt-1 fw-semibold fs-5 text-muted'>
                    {intl.formatMessage({ id: 'PleaseAttachTheRequiredFile' })}</span>
                  </h3>
            
     
            </div>
            <label className='form-label px-2  fontSz-6 mb-5'> {intl.formatMessage({ id: 'AddProjectScope' })} </label>
            <textarea className="form-control form-control-solid" rows={5}  placeholder="اكتب نطاق المشروع هنا"></textarea>


            <div className='mt-5 mb-5 col-12 col-lg-7 mx-auto'>
                  <div className='outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center'>
                    <div className='d-flex justify-content-center align-items-center w-50'>
                      <div
                        data-bs-dismiss='modal'
                        className='btn btn-secondary mx-1 text-center w-100'
                      >
                                                {intl.formatMessage({ id: 'Cancel' })}
                      </div>
                      <button
                        type='button'
                        data-bs-dismiss='modal'
                        className='btn btn-success mx-1 text-center w-100'
                        style={{border: 'none'}}
                        onClick={() => {
                            showSuccessAlert()
                          }}
                      >
                        {intl.formatMessage({ id: 'Agree' })}
                      </button>
                    </div>
                  </div>
                </div>     
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProjectDomainPopup
