import React, {Fragment, useEffect, useRef, useState} from 'react'
import {useIntl} from 'react-intl'
import AddIconPopup from '../popup/AddIconPopup'
import AddItemPopup from '../popup/AddItemPopup'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import {MainSettingsModel} from '../model/platform-sites-model'
import {fetchSites} from '../redux/platformslicetab2'

function MainSectionTab() {
  let intl = useIntl()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSites() as any)
  }, [dispatch])

  let platforms = useSelector((state: RootState) => {
    return state?.fetchSites?.sitesData
  })

  let inputRef = useRef<HTMLInputElement | null>(null)
  const [imagePreview, setImagePreview] = useState<any>('')

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  function handleCancel() {
    setImagePreview('')
  }

  const [showAddIcon, setShowAddIcon] = useState(false)
  const handleCloseAddIcon = () => setShowAddIcon(false)
  const handleShowAddIcon = () => {
    setShowAddIcon(true)
  }

  const [showAddItem, setShowAddItem] = useState(false)
  const handleCloseAddItem = () => setShowAddItem(false)
  const handleShowAddItem = () => {
    setShowAddItem(true)
  }
  return (
    <Fragment>
      <div className='mb-3'>
        <p className='fs-5 text-primary mb-3 fw-bolder'> {intl.formatMessage({id: 'TheContentOfTheMainSectionOfTheSite'})}</p>
        <p className='fs-6 text-muted mb-9'>
          {' '}
          {intl.formatMessage({
            id: 'AddMainItemsAndItsLinksToTheirSitesIntoWebsite',
          })}
        </p>
        <div onClick={handleShowAddItem} className='btn w-sm-25 w-lg-25 w-md-25 w-75 mb-7 btn-primary btn-md d-flex justify-content-center align-items-center'>
          <i className='bi bi-plus-square fs-2'></i>
          <span className='mx-3'>
            {' '}
            {intl.formatMessage({
              id: 'AddItem',
            })}
          </span>
        </div>
        <div className='d-flex align-items-center flex-wrap'>
          {platforms?.map((item: MainSettingsModel, index) => (
            <div key={index} className='col-sm-6 col-md-11 mb-4'>
              <div className='d-flex align-items-center flex-wrap justify-content-between'>
                {item?.mainSettingsDepartments?.map((department: any, departmentIndex) => (
                  <div key={departmentIndex} className='fi fi-rr-home'>
                    <i className={`${department?.iconImg} mx-2`}></i>
                    {/* <img src={department?.iconImg} alt='icon' /> */}
                    <span>{department?.itemName}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='mb-4' />
      <div className='mb-5'>
        <p className='fs-5 text-dark mb-3 fw-bolder'> {intl.formatMessage({id: 'TheMainIconsOfTheSite'})}</p>
        <p className='fs-6 text-muted mb-9'>
          {' '}
          {intl.formatMessage({
            id: 'ChooseTheIconsThatTheSiteHeaderContains',
          })}
        </p>
        <br />
        <div onClick={handleShowAddIcon} className='btn w-sm-25 w-lg-25 w-md-25 w-75 mb-7 btn-primary btn-md d-flex justify-content-center align-items-center'>
          <i className='bi bi-plus-square fs-2'></i>
          <span className='mx-3'>
            {' '}
            {intl.formatMessage({
              id: 'AddIcon',
            })}
          </span>
        </div>
        <div className='d-flex align-items-center flex-wrap'>
          {platforms?.map((item: MainSettingsModel, index) => (
            <div key={index} className='col-sm-6 col-md-11 mb-4'>
              <div className='d-flex align-items-center flex-wrap  justify-content-between'>
                {item?.mainSettingsDepartmentsIcons?.map((department: any, departmentIndex) => (
                  <div key={departmentIndex} className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                    <i className={`${department?.iconImg} mx-2`}></i>
                    <span>{department?.iconName}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddIconPopup handleCloseAddIcon={handleCloseAddIcon} showAddIcon={showAddIcon} />
      <AddItemPopup handleCloseAddItem={handleCloseAddItem} showAddItem={showAddItem} />
    </Fragment>
  )
}

export default MainSectionTab
