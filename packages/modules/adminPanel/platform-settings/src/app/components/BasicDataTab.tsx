import {ChangeEvent, Fragment, useEffect, useRef, useState} from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import {useIntl} from 'react-intl'
import Swal from 'sweetalert2'
import {DeletePopup} from '../partials/DeletePopup'
import {platformProps, platformSchema} from '../validation/platform-validation'
import {useDispatch, useSelector} from 'react-redux'
import {addSites, fetchPlatform, fetchPlatformSites} from '../redux/platfromslice'
import {RootState} from '../redux/store'
import {useForm} from 'react-hook-form'
import {EditPlatformMainSettings} from '../redux/add-platformsettings-slice'
import {useSearchParams} from 'react-router-dom'
import {PlatformModelSitesTab1} from '../model/sites-model-tab1'
import {KTSVG} from '../partials/helpers'
import { SystemPagination } from '../partials/SystemPagination'
import PlatformSites from './PlatformSites'

function BasicDataTab() {
  let intl = useIntl()

  const [file, setImageFile] = useState<File>()
  const [image, setImage] = useState<string | null>('')

  const [webCoverFile, setWebCoverFile] = useState<File>()
  const [webCoverFileimage, setWebCoverFileImage] = useState<string | null>('')

  const [tempfile, setTempImageFile] = useState<File>()
  const [tempImage, setTempImage] = useState<string | null>('')

  const dispatch = useDispatch()
  const handleImageChangeWebLogo = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    const reader = new FileReader()
    reader.onload = () => {
      setImageFile(file)
      setImage(reader.result as string)
    }
    reader.readAsDataURL(file as any)
  }

  const handleImageChangeWebTemp = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setTempImageFile(file)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        setTempImage(URL.createObjectURL(file))
      }
    }
  }
  const handleImageChangeWebCover = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setWebCoverFile(file)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        setWebCoverFileImage(URL.createObjectURL(file))
      }
    }
  }
  
  let platforms = useSelector((state: RootState) => {
    return state?.fetchPlatform?.data
  })
  
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: {errors},
  } = useForm<platformProps>({
    resolver: yupResolver(platformSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    dispatch(fetchPlatform() as any)
  }, [dispatch])


  let showAlert = () => {
    Swal.fire({
      text: 'تمت التعديل بنجاح',
      icon: 'success',
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: 'موافق',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    }).then(res => {
     dispatch(fetchPlatform() as any)
    })

  }

  useEffect(() => {
    if (platforms) {
      setValue('websiteUrl', platforms?.webUrl || '');
      trigger('websiteUrl');
      setValue('websiteDescription', platforms?.webDescription || '');
      trigger('websiteDescription');
      setValue('websiteTitle', platforms?.webTitle || '');
      trigger('websiteTitle');
      const startDate = platforms?.startDate ? platforms.startDate.split('T')[0] : '';
      const endDate = platforms?.endDate ? platforms.endDate.split('T')[0] : '';
      setValue('startDate', startDate ); 
      trigger('startDate');
      setValue('endDate', endDate); 
      trigger('endDate');
    }
  }, [platforms, setValue, trigger]);
  

  const handleEditPlatform = async(formvalues: platformProps) => {
    let formData = new FormData()
    formData.append('id', platforms?.id as any)
    formData.append('webLogo', file == undefined ? await fetchImageAsBlob(platforms?.webLogo) : (file as any))
    formData.append('temporaryWebCover', tempfile == undefined ? await fetchImageAsBlob(platforms?.temporaryWebCover) : (tempfile as any))
    formData.append('webCover', webCoverFile == undefined ? await fetchImageAsBlob(platforms?.webCover) : (webCoverFile as any))
    formData.append('webTitle', formvalues.websiteTitle)
    formData.append('webUrl', formvalues.websiteUrl)
    formData.append('webDescription', formvalues.websiteDescription)
    formData.append('startDate', formvalues.startDate)
    formData.append('endDate', formvalues.endDate)
    dispatch(EditPlatformMainSettings(formData) as any)
    showAlert() 
  }
  async function fetchImageAsBlob(url:string) {
    try {
      const response = await fetch('http://ncvc.4explain.net:5196/'+url);
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }

  return (
    <Fragment>
      <form noValidate onSubmit={handleSubmit(handleEditPlatform)}>
        <div className='row mb-3 d-flex align-items-center'>
          <div className='col-12 col-lg-4 col-md-4 col-sm-6'>
            <div className='d-flex align-items-center '>
              <label className='d-inline-block mx-7'>
                {intl.formatMessage({
                  id: 'WebsiteImage',
                })}
              </label>
        
              <div className='image-input image-input-outline ' data-kt-image-input='true' >
                <div className='image-input-wrapper w-125px h-125px' style={{backgroundImage: `url(${image ? image : 'http://ncvc.4explain.net:5196' + '/' + platforms?.webLogo} )`}}></div>

                <label className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow ' data-kt-image-input-action='change' data-bs-toggle='tooltip' data-bs-dismiss='click' title='Change avatar'>
                  <i className='fas fa-edit'>
                    <span className='path1'></span>
                    <span className='path2'></span>
                  </i>

                  <input type='file' name='avatar' accept='.png, .jpg, .jpeg' onChange={handleImageChangeWebLogo} />
                  {file && <input type='hidden' name='avatar_remove' />}
                </label>

                {file && (
                  <span className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow' data-kt-image-input-action='remove' data-bs-toggle='tooltip' data-bs-dismiss='click' title='Remove avatar' onClick={() => setImage('/media/avatars/blank-img.png')}>
                    <i className='fas fa-xmark '></i>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-4 col-sm-6'>
            <div className='mb-2 pt-2 pb-3 '>
              <label htmlFor='WebsiteTitle' className='form-label px-2 fontSz-6 '>
                {intl.formatMessage({id: 'WebsiteTitle'})} (Website title)
              </label>
              <div className='input-group '>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='bi bi-globe2 special'></i>
                  </span>
                </div>
                <input {...register('websiteTitle')} id='WebsiteTitle' type='text' className='form-control' placeholder={intl.formatMessage({id: 'WebsiteTitle'})} />
                <div
                  className='invalid-feedback'
                  style={{
                    display: errors?.websiteTitle?.message ? 'block' : 'none',
                  }}
                >
                  {errors?.websiteTitle?.message}
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-4 col-sm-6'>
            <div className='mb-2 pt-2 pb-3 '>
              <label htmlFor='WebsiteURL' className='form-label px-2 fontSz-6 '>
                {intl.formatMessage({id: 'WebsiteURL'})} (Website URL)
              </label>
              <div className='input-group '>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fas fa-link special'></i>
                  </span>
                </div>
                <input {...register('websiteUrl')} id='WebsiteURL' type='text' className='form-control' placeholder={intl.formatMessage({id: 'WebsiteURL'})} />
                <div
                  className='invalid-feedback'
                  style={{
                    display: errors?.websiteUrl?.message ? 'block' : 'none',
                  }}
                >
                  {errors?.websiteUrl?.message}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-6'>
          <div className='col-12'>
            <label htmlFor='description' className=' mb-5 fw-semibold fs-6'>
              {' '}
              {intl.formatMessage({id: 'WebsiteDescription'})}{' '}
            </label>
            <textarea {...register('websiteDescription')} id='description' rows={4} className='form-control form-control-lg form-control-solid mb-3 mb-lg-2' placeholder={intl.formatMessage({id: 'Description'})}></textarea>
            <div
              className='invalid-feedback'
              style={{
                display: errors?.websiteDescription?.message ? 'block' : 'none',
              }}
            >
              {errors?.websiteDescription?.message}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between flex-wrap'>
          <div className='w-lg-50 w-md-50 w-sm-50 w-100'>
            <hr className='mb-9' />
            <p className='fw-bolder text-black fs-4 mb-5'>{intl.formatMessage({id: 'MainThem'})}</p>
           
            <div className='image-input image-input-outline' data-kt-image-input='true' style={{backgroundImage: `url(${webCoverFileimage ? webCoverFileimage : 'http://ncvc.4explain.net:5196' + '/' + platforms?.webCover} )`}}>
              <div className='image-input-wrapper w-125px h-125px' style={{backgroundImage: `url(${webCoverFileimage ? webCoverFileimage : 'http://ncvc.4explain.net:5196' + '/' + platforms?.webCover} )`}}></div>

              <label className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow ' data-kt-image-input-action='change' data-bs-toggle='tooltip' data-bs-dismiss='click' title='Change avatar'>
                <i className='fas fa-edit'>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </i>

                <input type='file' name='avatar' accept='.png, .jpg, .jpeg' onChange={handleImageChangeWebCover} />
                {webCoverFile && <input type='hidden' name='avatar_remove' />}
              </label>

              {webCoverFile && (
                <span className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow' data-kt-image-input-action='remove' data-bs-toggle='tooltip' data-bs-dismiss='click' title='Remove avatar' onClick={() => setWebCoverFileImage('/media/avatars/blank-img.png')}>
                  <i className='fas fa-xmark '></i>
                </span>
              )}
            </div>
          </div>
          <div className='w-lg-50 w-md-50 w-sm-50 w-100'>
            <hr className='mb-9' />
            <p className='fw-bolder text-black fs-4 mb-5'>{intl.formatMessage({id: 'TempraryThem'})}</p>

            
            <div className='image-input image-input-outline ' data-kt-image-input='true' style={{backgroundImage: `url(${tempImage ? tempImage : 'http://ncvc.4explain.net:5196' + '/' + platforms?.temporaryWebCover} )`}}>
              <div className='image-input-wrapper w-125px h-125px' style={{backgroundImage: `url(${tempImage ? tempImage : 'http://ncvc.4explain.net:5196' + '/' + platforms?.temporaryWebCover} )`}}></div>

              <label className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow ' data-kt-image-input-action='change' data-bs-toggle='tooltip' data-bs-dismiss='click' title='Change avatar'>
                <i className='fas fa-edit'>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </i>

                <input type='file' name='avatar' accept='.png, .jpg, .jpeg' onChange={handleImageChangeWebTemp} />
                {tempfile && <input type='hidden' name='avatar_remove' />}
              </label>

              {tempfile && (
                <span className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow' data-kt-image-input-action='remove' data-bs-toggle='tooltip' data-bs-dismiss='click' title='Remove avatar' onClick={() => setTempImage('/media/avatars/blank-img.png')}>
                  <i className='fas fa-xmark '></i>
                </span>
              )}
            </div>
            <div className='w-100 d-flex'>
              <div className='w-50 mx-3'>
                <label className='form-label px-2  fs-6 text-gray-700'>{intl.formatMessage({id: 'FromDate'})}</label>
                <input {...register('startDate')} type='date' className='form-control form-control-lg form-control-solid mb-3 mb-lg-2' />
                <div
                  className='invalid-feedback'
                  style={{
                    display: errors?.startDate?.message ? 'block' : 'none',
                  }}
                >
                  {errors?.startDate?.message}
                </div>
              </div>
              <div className='w-50 mx-3'>
                <label className='form-label px-2  fs-6 text-gray-700'>{intl.formatMessage({id: 'ToDate'})}</label>
                <input {...register('endDate')} type='date' className='form-control form-control-lg form-control-solid mb-3 mb-lg-2' />
                <div
                  className='invalid-feedback'
                  style={{
                    display: errors?.endDate?.message ? 'block' : 'none',
                  }}
                >
                  {errors?.endDate?.message}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-12 col-md-6 col-sm-4 col-12 d-flex justify-content-center align-items-center my-5'>
          <button type='submit' className='btn btn-primary btn-md'>
            <i className='bi bi-pencil-square fs-2'></i>
            <span className='mx-3'>
              {' '}
              {intl.formatMessage({
                id: 'Edit',
              })}
            </span>
          </button>
        </div>
      </form>
      <PlatformSites platform={platforms} />
    </Fragment>
  )
}

export default BasicDataTab
