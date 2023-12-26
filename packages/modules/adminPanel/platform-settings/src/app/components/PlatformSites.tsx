import { useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import Swal from 'sweetalert2'
import {DeletePopup} from '../partials/DeletePopup'
import {useDispatch, useSelector} from 'react-redux'
import {addSites, fetchPlatformSites} from '../redux/platfromslice'
import {RootState} from '../redux/store'
import {useSearchParams} from 'react-router-dom'
import {KTSVG} from '../partials/helpers'
import { SystemPagination } from '../partials/SystemPagination'


const PlatformSites = (props:any) => {

    const platforms = props.platforms;    
    const handleAddSites = async() => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

        if (!siteUrl || !urlRegex.test(siteUrl)) {
        setIsSiteUrlValid(false)
        return
        } else {
        setIsSiteUrlValid(true)
        }
        if (!siteName) {
        setIsSiteNamelValid(false)
        return
        } else {
        setIsSiteNamelValid(true)
        }
        let body = {
        mainSettingsSites: {
            mainSetId: platforms?.id,
            siteName: siteName,
            siteUrl: siteUrl,
        },
      }
      
      try {
          const deleteResult = await  dispatch(addSites(body) as any)
          console.log('delete res', deleteResult)
          if (deleteResult?.payload.statusEnum===1) {
            let params: any = {
              pageSize: searchParams.get('pageSize'),
              pageIndex: searchParams.get('pageIndex'),
            };
    
            await dispatch(fetchPlatformSites(params) as any)
            showAlertSites()
            setSiteUrl('')
            setSiteName('')
          } else {
            Swal.fire({
              text: deleteResult.payload.message,
              icon: 'error',
              heightAuto: false,
              buttonsStyling: false,
              confirmButtonText: intl.formatMessage({id: 'Agree'}),
              customClass: {
                confirmButton: 'btn btn-primary',
              },
            })
          }
        } catch (error) {
          console.error('Error during delete:', error);
        }
     }

     let showAlertSites = () => {
        Swal.fire({
          text: 'تمت اضافة بنجاح',
          icon: 'success',
          heightAuto: false,
          buttonsStyling: false,
          confirmButtonText: 'موافق',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
        })
    }
    
    let intl = useIntl()
    const [showDelete, setShowDelete] = useState(false)
    const [siteUrl, setSiteUrl] = useState<string>('')
    const [isSiteUrlValid, setIsSiteUrlValid] = useState(true)
  
    const [siteName, setSiteName] = useState<string>('')
    const [isSiteNameValid, setIsSiteNamelValid] = useState(true)
  
  
    const [deleteId, setDelete] = useState<any>()
    let [searchParams, setSearchParams] = useSearchParams()
  
    const handleCloseDelete = () => setShowDelete(false)
    const handleShowDelete = (id: any) => {
      setShowDelete(true)
      setDelete(id)
    }
    const dispatch = useDispatch()

    let platformsSites = useSelector((state: RootState) => {
        return state?.fetchPlatformSites?.sitesData
    })

    useEffect(() => {
        if (!searchParams.get('pageIndex')) {
          searchParams.set('pageIndex', '1')
          setSearchParams(searchParams)
        }
        if (!searchParams.get('pageSize')) {
          searchParams.set('pageSize', '10')
          setSearchParams(searchParams)
        }
        let params: any = {
          pageSize: searchParams.get('pageSize'),
          pageIndex: searchParams.get('pageIndex'),
        }
        dispatch(fetchPlatformSites(params) as any)
      }, [searchParams.get('pageSize'), searchParams.get('pageIndex'), dispatch])
    
    return (
        <>
            <p className='mb-5  fw-bolder fs-3'>{intl.formatMessage({id: 'AddCommunicationSite'})}</p>
      <div className='row mb-4 d-flex align-items-center flex-row'>
        <div className='col-lg-4 col-sm-12'>
          <div className='mb-2 pt-2 pb-3 '>
            <label htmlFor='CommunicationSiteName' className='form-label px-2 fontSz-6'>
              {intl.formatMessage({id: 'CommunicationSiteName'})}
            </label>
            <input
              required
              onChange={(e) => setSiteName(e.target.value)}
              value={siteName}
              type='text'
              id='board2'
              className={`form-control ${isSiteNameValid ? '' : 'is-invalid'}`}
              placeholder={intl.formatMessage({
                id: 'CommunicationSiteName',
              })}
            />
            {!isSiteNameValid && <div className='invalid-feedback'>{intl.formatMessage({id: 'Please enter a value.'})}</div>}
          </div>
        </div>
        <div className='col-lg-4 col-sm-12'>
          <div className='mb-3'>
            <label htmlFor='CommunicationWebsiteLink' className='fs-6'>
              {' '}
              {intl.formatMessage({
                id: 'CommunicationWebsiteLink',
              })}{' '}
            </label>
            <div className='input-group '>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fas fa-link special'></i>
                </span>
              </div>
              <input
                required
                onChange={(e) => setSiteUrl(e.target.value)}
                value={siteUrl}
                type='text'
                id='board'
                className={`form-control ${isSiteUrlValid ? '' : 'is-invalid'}`}
                placeholder={intl.formatMessage({
                  id: 'CommunicationWebsiteLink',
                })}
              />
              {!isSiteUrlValid && <div className='invalid-feedback'>{intl.formatMessage({id: 'Please enter a valid URL.'})}</div>}{' '}
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
          <button onClick={() => handleAddSites()} className='btn btn-primary btn-md d-flex justify-content-center align-items-center'>
            <i className='bi bi-plus-square fs-2'></i>
            <span className='mx-3'>
              {' '}
              {intl.formatMessage({
                id: 'Add',
              })}
            </span>
          </button>
        </div>
      </div>
      <div className='table-responsive mb-7'>
        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
          <thead>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-50px text-center'>{intl.formatMessage({id: 'CommunicationSiteName'})}</th>
              <th className='min-w-150px text-center'>
                {intl.formatMessage({
                  id: 'CommunicationWebsiteLink',
                })}{' '}
              </th>

              <th className='min-w-100px text-center'>{intl.formatMessage({id: 'Options'})} </th>
            </tr>
          </thead>
          <tbody>
            {platformsSites?.data?.map((item:any,index:any) => (
              <tr key={index}>
                <td className='text-center'> {item?.siteName}</td>

                <td className='text-center'>{item?.siteUrl}</td>
                <td className='text-center'>
                  <span className='menu-link px-3 text-danger' onClick={() => handleShowDelete(item?.id)}>
                    <span className='svg-icon svg-icon-3 '>{<KTSVG path='/media/icons/duotune/general/gen088.svg' />}</span>{' '}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {platformsSites ? <SystemPagination page={platformsSites?.totalItems} totalPages={platformsSites?.totalPages} /> : null}
      </div>
      <div className='modal fade' aria-hidden='true'>
        <DeletePopup id={deleteId} handleCloseDelete={handleCloseDelete} showDelete={showDelete} />
      </div>
        </>
  )
}

export default PlatformSites