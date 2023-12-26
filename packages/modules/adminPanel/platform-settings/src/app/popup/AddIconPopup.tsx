import React, {Fragment, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import {addPlatformIcon, fetchSites} from '../redux/platformslicetab2'
import {fetchPlatform} from '../redux/platfromslice'

type AllcardsSortPopupProps = {
  showAddIcon?: any
  handleCloseAddIcon?: any
}

const AddIconPopup: React.FC<AllcardsSortPopupProps> = ({showAddIcon, handleCloseAddIcon}) => {
  let intl = useIntl()

  let showFilterAlert = () => {
    Swal.fire({
      text: 'تمت الاضافه بنجاح',
      icon: 'success',
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: 'موافق',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    })
    setTimeout(() => {
      dispatch(fetchSites() as any)
    }, 1000);

  }

  const [iconImg, setIconImg] = useState<string>('')
  const [itemName, setItemName] = useState<string>('')
  const [itemURL, setItemURL] = useState<string>('')

  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({
    iconImg: '',
    itemName: '',
    itemURL: '',
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlatform() as any)
  }, [dispatch])

  let platformsMainId = useSelector((state: RootState) => {
    return state?.fetchPlatform?.data
  })

  let message = useSelector((state: RootState) => {
    return state?.addPlatformIcon?.message
  })

  const handleShowAddIcon = () => {
    // Validate form fields
    if (!iconImg.trim()) {
      setValidationErrors((prevErrors) => ({...prevErrors, iconImg: 'Please enter a value.'}))
      return
    }
    if (!itemName.trim()) {
      setValidationErrors((prevErrors) => ({...prevErrors, itemName: 'Please enter a value.'}))
      return
    }
    if (!itemURL.trim()) {
      setValidationErrors((prevErrors) => ({...prevErrors, itemURL: 'Please enter a value.'}))
      return
    }

    let body = {
      MainSettDeptsIconsDTO: {
        mainSettingsId: platformsMainId.id,
        iconImg: iconImg,
        iconName: itemName,
        iconURL: itemURL,
      },
    }

    dispatch(addPlatformIcon(body) as any)

      showFilterAlert()
      // Clear form fields and validation errors after successful submission
      setIconImg('')
      setItemName('')
      setItemURL('')
      setValidationErrors({
        iconImg: '',
        itemName: '',
        itemURL: '',
      })
      handleCloseAddIcon()
    
  }

  return (
    <Fragment>
      <div className='modal fade' tabIndex={-1} aria-modal='true' role='dialog'>
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <Modal size='lg' aria-labelledby='contained-modal-title-vcenter' centered show={showAddIcon} onHide={handleCloseAddIcon}>
            <div className='card'>
              <Modal.Header
                closeButton
                style={{
                  alignItems: intl.locale == 'ar' ? 'flex-start' : 'center',
                  flexDirection: intl.locale == 'en' ? 'column-reverse' : 'row',
                }}
              >
                <div className='card-header w-100 px-1 d-flex justify-content-center pb-2  border-bottom-0 mt-10'>
                  <Modal.Title>
                    <h1 className='mb-3'>{intl.formatMessage({id: 'AddIcon'})}</h1>
                    <h6 className='mb-2 text-muted'>
                      {intl.formatMessage({
                        id: 'PleaseEnterTheFollowingData',
                      })}
                    </h6>
                  </Modal.Title>
                </div>
              </Modal.Header>
            </div>

            <form
              noValidate
              className='form outputForm'
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <Modal.Body>
                <div className='row mb-6'>
                  <div className='col-lg-4'>
                    <div className={`mb-2 pt-2 pb-3 ${validationErrors.iconImg ? 'has-error' : ''}`}>
                      <label htmlFor='IconImage' className='form-label px-2 fontSz-6 '>
                        {intl.formatMessage({id: 'IconImage'})}
                      </label>
                      <div className='w-100 position-relative'>
                        <div className='input-group '>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>
                              <i className='fas fa-icons special'></i>
                            </span>
                          </div>
                          <input
                            onChange={(e) => {
                              setIconImg(e.target.value)
                              setValidationErrors((prevErrors) => ({...prevErrors, iconImg: ''}))
                            }}
                            id='IconImage'
                            type='text'
                            className='form-control'
                            placeholder={intl.formatMessage({
                              id: 'LinkIconFromTheSite',
                            })}
                          />
                          {validationErrors.iconImg && <div className='invalid-feedback'>{validationErrors.iconImg}</div>}
                          <a href='https://fontawesome.com/icons' target='_blank' className='position-absolute top-30 left-5 d-inline-block w-fit h-fit text-muted'>
                            <i className='fs-1 bi rotate-270 bi-paperclip d-inline-block '></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className={`mb-2 pt-2 pb-3 ${validationErrors.itemName ? 'has-error' : ''}`}>
                      <label htmlFor='IconName' className='form-label px-2 fontSz-6 '>
                        {intl.formatMessage({id: 'IconName'})}
                      </label>
                      <div className='input-group '>
                        <div className='input-group-prepend'>
                          <span className='input-group-text'>
                            <i className='fas fa-icons special'></i>
                          </span>
                        </div>
                        <input
                          onChange={(e) => {
                            setItemName(e.target.value)
                            setValidationErrors((prevErrors) => ({...prevErrors, itemName: ''}))
                          }}
                          id='IconName'
                          type='text'
                          className='form-control'
                          placeholder={intl.formatMessage({id: 'IconName'})}
                        />
                        {validationErrors.itemName && <div className='invalid-feedback'>{validationErrors.itemName}</div>}
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className={`mb-2 pt-2 pb-3 ${validationErrors.itemURL ? 'has-error' : ''}`}>
                      <label htmlFor='IconLink' className='form-label px-2 fontSz-6 '>
                        {intl.formatMessage({id: 'IconLink'})}
                      </label>
                      <div className='input-group '>
                        <div className='input-group-prepend'>
                          <span className='input-group-text'>
                            <i className='fas fa-link special'></i>
                          </span>
                        </div>
                        <input
                          onChange={(e) => {
                            setItemURL(e.target.value)
                            setValidationErrors((prevErrors) => ({...prevErrors, itemURL: ''}))
                          }}
                          id='IconLink'
                          type='text'
                          className='form-control'
                          placeholder={intl.formatMessage({id: 'IconLink'})}
                        />
                        {validationErrors.itemURL && <div className='invalid-feedback'>{validationErrors.itemURL}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className='justify-content-center py-6'>
                <div className='d-flex justify-content-center '>
                  <button className='btn btn-secondary px-15 me-5' onClick={handleCloseAddIcon}>
                    {intl.formatMessage({id: 'Cancel'})}
                  </button>
                  <button
                    onClick={() => {
                      handleShowAddIcon()
                    }}
                    className='btn btn-success px-15 ms-5'
                  >
                    {intl.formatMessage({id: 'Add'})}
                  </button>
                </div>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      </div>
    </Fragment>
  )
}

export default AddIconPopup
