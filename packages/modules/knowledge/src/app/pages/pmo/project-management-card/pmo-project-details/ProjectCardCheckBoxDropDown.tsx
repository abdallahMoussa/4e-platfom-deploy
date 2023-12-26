import React, { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import CLoseProjectPopup from "./close-project-popup";

interface Props {
   selectedOption: string;
   setSelectedOption: any;
   options: any;
   placeholder?: string;
}

const ProjectCardCheckBoxDropDown: FC<Props> = ({
   selectedOption,
   setSelectedOption,
   options,
   placeholder = "قيد التنفيذ",
}) => {
   const intl = useIntl();
   const [isOpen, setIsOpen] = useState(false);
   const [showPopup, setShowPopup] = useState(false); // add state for popup
   const [isPopupShownOnce, setIsPopupShownOnce] = useState(false); // add state to track if popup has been shown

   const handleIsCheck = (optionName: string) => {
      if (selectedOption === optionName) {
         setSelectedOption(null);
         setShowPopup(false); // hide the popup when the option is unselected
      } else {
         setSelectedOption(optionName);
         if (!isPopupShownOnce) { // show the popup only once
            setShowPopup(true);
            setIsPopupShownOnce(true);
         }
      }
      setIsOpen(false); // close the dropdown after an option is selected
   };
 

   const handleClosePopup = () => {
      setShowPopup(false);
   };

   return (
      <>
         <div className="position-relative">
            <button
               className="btn btn-light w-100 d-flex justify-content-start flex-wrap btn-dropdwon"
               type="button"
               onClick={() => setIsOpen(!isOpen)}
               
            >
               {selectedOption
                  ? selectedOption
                  : intl.formatMessage({ id: placeholder })}
            </button>
            {isOpen && (
               <ul
                  className="list-unstyled border border-1px p-0 border-radius position-absolute w-100 bg-white dropdown-menu-bottom"
                  style={{ zIndex: 9999 }}
               >
                  {options?.map((option) => (
                     <li key={option?.id}>
                        <button
                           onClick={() => handleIsCheck(option?.name)}
                           className="w-100 btn btn-white d-flex justify-content-between form-check"
                           data-bs-toggle="modal"
                           data-bs-target="#Rega_modal-close-project"
                        >
                           <label
                              className="form-check-label"
                              htmlFor={option?.id}
                           >
                              {option?.name}
                           </label>
                           <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                              <input
                                 className="form-check-input widget-9-check xCheckBg"
                                 checked={selectedOption === option?.name}
                                 onChange={() => handleIsCheck(option?.name)}
                                 type="radio"
                                 name="options"
                                 value={option?.name}
                                 id={option?.id}
                              />
                           </div>
                        </button>
                     </li>
                  ))}
               </ul>
            )}
         </div>

         {showPopup && ( // show the popup when the state is true
            <CLoseProjectPopup onClose={handleClosePopup} />
         )}
      </>
   );
};

export default ProjectCardCheckBoxDropDown;