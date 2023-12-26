import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from "../../../../../../helpers";

const MyTasks: FC = () => {

    const intl = useIntl()

  return (
    <>
<div className="col-md-6">
<div>
<div className=" my-5">
    <div className="card card-xl-stretch  py-3">
        <div className="card-header d-flex align-items-center px-0 border-0 pb-2 mb-2 mx-5">
            <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder fs-4 mb-1  mx-0">{intl.formatMessage({ id: "MyTasks" })}</span>
                <span className="mt-1 fw-semibold fs-6 text-muted">{intl.formatMessage({ id: "TotalTasksAccumulated" })}  482</span>
            </h3>
            <a className='mb-0 btn btn-light'> {intl.formatMessage({ id: "ViewAll" })} </a>
                  
                   
            
        </div>
        <div>
            <div className='d-flex flex-column mx-5'>
                
                <div className='d-flex justify-content-between align-items-center mb-7'>
                    <div className="d-flex align-items-center ">                               
                         <span className="bullet bullet-vertical h-40px bg-primary mx-2"></span>
                        <div className="d-flex">
                            <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                        <div className='d-flex flex-column mx-3'>
                            <p className='mb-0 fw-bolder '>المتطلبات الفنية للمشروع</p>
                            <p className='mb-0 fw-bolder text-muted'>منذ يومين بواسطة <span className='text-primary fw-bolder'>أحمد محمود</span></p>
                        </div>
                    </div>
                     {/* Pop up menu */}
                        <div className="card-toolbar w-auto">
                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                </g>
                                </svg>
                            </span>
                            </button>
                    
                            <div className="menu menu-sub menu-sub-dropdown w-200px w-md-200px h-auto" data-kt-menu="true" id="kt_menu_G01">
                            <div className="p-3">
                                <div className="fs-5 text-dark fw-bolder">خصائص</div>
                            </div>
                            <div className="separator border-gray-200"></div>
                            <div className="p-3">
                                <div className="mb-3">
                                <label className="form-label fw-bold text-muted fs-5"> تخصيص:</label>
                    
                                <div className="">
                                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                    <span className="form-check-label me-1">اضافة الى مفضلة</span>
                                    </label>
                                    <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                                    <input id="indicatorsCardHideInput" className="form-check-input check-danger" type="checkbox" value="2" />
                                    <span className="form-check-label me-1"> إخفاء من مساحة العمل </span>
                                    </label>

                                </div>
                                </div>
                                <div className="mb-5">
                                <label className="form-label fw-bold text-muted fs-5">الاشعارات:</label>
                                <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                                    <input className="form-check-input" type="checkbox" value="3" name="notifications" />
                                    <label className="form-check-label me-1">تمكين</label>
                                </div>

                                </div>
                            
                                <div className="d-flex justify-content-end">
                                <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">الغاء</button>
                                <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true" >موافق</button>
                                </div>
                            
                            </div>
                            
                            </div>
                        
                        </div>
                    {/* End Pop up */}
                </div>
                {/* End Card */}
                
                <div className='d-flex justify-content-between align-items-center mb-7'>
                    <div className="d-flex align-items-center ">
                    <span className="bullet bullet-vertical h-40px bg-primary mx-2"></span>
                        <div className="d-flex">
                            <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                        <div className='d-flex flex-column mx-3'>
                            <p className='mb-0 fw-bolder '>المتطلبات الفنية للمشروع</p>
                            <p className='mb-0 fw-bolder text-muted '>منذ يومين بواسطة <span className='text-primary fw-bolder'>أحمد محمود</span></p>
                        </div>
                    </div>
                     {/* Pop up menu */}
                        <div className="card-toolbar w-auto">
                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <span className="svg-icon svg-icon-2">
                            <KTSVG path="/media/icons/duotune/general/gen172PopupMenu.svg" />

                            </span>
                            </button>
                    
                            <div className="menu menu-sub menu-sub-dropdown w-200px w-md-200px h-auto" data-kt-menu="true" id="kt_menu_G01">
                            <div className="p-3">
                                <div className="fs-5 text-dark fw-bolder">خصائص</div>
                            </div>
                            <div className="separator border-gray-200"></div>
                            <div className="p-3">
                                <div className="mb-3">
                                <label className="form-label fw-bold text-muted fs-5"> تخصيص:</label>
                    
                                <div className="">
                                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                    <span className="form-check-label me-1">اضافة الى مفضلة</span>
                                    </label>
                                    <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                                    <input id="indicatorsCardHideInput" className="form-check-input check-danger" type="checkbox" value="2" />
                                    <span className="form-check-label me-1"> إخفاء من مساحة العمل </span>
                                    </label>

                                </div>
                                </div>
                                <div className="mb-5">
                                <label className="form-label fw-bold text-muted fs-5">الاشعارات:</label>
                                <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                                    <input className="form-check-input" type="checkbox" value="3" name="notifications" />
                                    <label className="form-check-label me-1">تمكين</label>
                                </div>

                                </div>
                            
                                <div className="d-flex justify-content-end">
                                <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">الغاء</button>
                                <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true" >موافق</button>
                                </div>
                            
                            </div>
                            
                            </div>
                        
                        </div>
                    {/* End Pop up */}
                </div>
                {/* End Card */}
                
                <div className='d-flex justify-content-between align-items-center mb-7'>
                    <div className="d-flex align-items-center ">
                    <span className="bullet bullet-vertical h-40px bg-primary mx-2"></span>

                        <div className="d-flex">
                            <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                        <div className='d-flex flex-column mx-3'>
                            <p className='mb-0 fw-bolder '>المتطلبات الفنية للمشروع</p>
                            <p className='mb-0 fw-bolder text-muted'>منذ يومين بواسطة <span className='text-primary fw-bolder'>أحمد محمود</span></p>
                        </div>
                    </div>
                     {/* Pop up menu */}
                        <div className="card-toolbar w-auto">
                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <span className="svg-icon svg-icon-2">
                            <KTSVG path="/media/icons/duotune/general/gen172PopupMenu.svg" />

                            </span>
                            </button>
                    
                            <div className="menu menu-sub menu-sub-dropdown w-200px w-md-200px h-auto" data-kt-menu="true" id="kt_menu_G01">
                            <div className="p-3">
                                <div className="fs-5 text-dark fw-bolder">خصائص</div>
                            </div>
                            <div className="separator border-gray-200"></div>
                            <div className="p-3">
                                <div className="mb-3">
                                <label className="form-label fw-bold text-muted fs-5"> تخصيص:</label>
                    
                                <div className="">
                                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                    <span className="form-check-label me-1">اضافة الى مفضلة</span>
                                    </label>
                                    <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                                    <input id="indicatorsCardHideInput" className="form-check-input check-danger" type="checkbox" value="2" />
                                    <span className="form-check-label me-1"> إخفاء من مساحة العمل </span>
                                    </label>

                                </div>
                                </div>
                                <div className="mb-5">
                                <label className="form-label fw-bold text-muted fs-5">الاشعارات:</label>
                                <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                                    <input className="form-check-input" type="checkbox" value="3" name="notifications" />
                                    <label className="form-check-label me-1">تمكين</label>
                                </div>

                                </div>
                            
                                <div className="d-flex justify-content-end">
                                <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">الغاء</button>
                                <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true" >موافق</button>
                                </div>
                            
                            </div>
                            
                            </div>
                        
                        </div>
                    {/* End Pop up */}
                </div>
                {/* End Card */}
                
                <div className='d-flex justify-content-between align-items-center mb-7'>
                    <div className="d-flex align-items-center ">
                    <span className="bullet bullet-vertical h-40px bg-primary mx-2"></span>

                        <div className="d-flex">
                            <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                        <div className='d-flex flex-column mx-3'>
                            <p className='mb-0 fw-bolder '>المتطلبات الفنية للمشروع</p>
                            <p className='mb-0 fw-bolder text-muted'>منذ يومين بواسطة <span className='text-primary fw-bolder'>أحمد محمود</span></p>
                        </div>
                    </div>
                     {/* Pop up menu */}
                        <div className="card-toolbar w-auto">
                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <span className="svg-icon svg-icon-2">
                            <KTSVG path="/media/icons/duotune/general/gen172PopupMenu.svg" />

                            </span>
                            </button>
                    
                            <div className="menu menu-sub menu-sub-dropdown w-200px w-md-200px h-auto" data-kt-menu="true" id="kt_menu_G01">
                            <div className="p-3">
                                <div className="fs-5 text-dark fw-bolder">خصائص</div>
                            </div>
                            <div className="separator border-gray-200"></div>
                            <div className="p-3">
                                <div className="mb-3">
                                <label className="form-label fw-bold text-muted fs-5"> تخصيص:</label>
                    
                                <div className="">
                                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                    <span className="form-check-label me-1">اضافة الى مفضلة</span>
                                    </label>
                                    <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                                    <input id="indicatorsCardHideInput" className="form-check-input check-danger" type="checkbox" value="2" />
                                    <span className="form-check-label me-1"> إخفاء من مساحة العمل </span>
                                    </label>

                                </div>
                                </div>
                                <div className="mb-5">
                                <label className="form-label fw-bold text-muted fs-5">الاشعارات:</label>
                                <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                                    <input className="form-check-input" type="checkbox" value="3" name="notifications" />
                                    <label className="form-check-label me-1">تمكين</label>
                                </div>

                                </div>
                            
                                <div className="d-flex justify-content-end">
                                <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">الغاء</button>
                                <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true" >موافق</button>
                                </div>
                            
                            </div>
                            
                            </div>
                        
                        </div>
                    {/* End Pop up */}
                </div>
                {/* End Card */}
               
               
                
            </div>
        </div>
    </div>
    </div>
</div>
</div>
</>
    )
  }
  
  export { MyTasks }