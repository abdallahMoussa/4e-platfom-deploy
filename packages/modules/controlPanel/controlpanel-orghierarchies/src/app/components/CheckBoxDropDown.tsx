import React, { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";

interface Props {
   selectedOptions: any;
   setSelectedOptions: any;
   options: any;
}

const CheckBoxDropDown: FC<Props> = ({
   selectedOptions,
   setSelectedOptions,
   options,
}) => {
   const intl = useIntl();
   const [isOpen, setIsOpen] = useState(false);

   const handleIsCheck = (optionName: string) => {
      if (optionName === "الكل") {
        if (selectedOptions.length === options.length) {
          setSelectedOptions([]);
        } else {
          setSelectedOptions(options.map((option:any) => option.name));
        }
      } else if (selectedOptions?.includes(optionName)) {
        const selectedoption = selectedOptions?.filter(
          (value:any) => value !== optionName
        );
        setSelectedOptions([...selectedoption]);
        if (selectedoption.length === options.length - 1) {
          setSelectedOptions(
            selectedoption.filter((value:any) => value !== "الكل")
          );
        }
      } else {
        setSelectedOptions([...selectedOptions, optionName]);
        if (selectedOptions.length === options.length - 1) {
          setSelectedOptions([...selectedOptions, "الكل"]);
        }
        updateSearchParams(selectedOptions);
      }
    };
    const location = useLocation();
  
   
  
    // Update search params when selectedOptions change
    useEffect(() => {
      updateSearchParams(selectedOptions);
    }, [selectedOptions]);
  
    const updateSearchParams = (selectedOptions: string[]) => {
      const searchParams = new URLSearchParams(location.search);
  
      // Example: Set a search parameter named 'selectedOptions'
      searchParams.set('categoryId', selectedOptions.join(','));
  
      // Replace the current URL without adding a new entry to the history stack
     
    };
   return (
      <>
         <div className="position-relative">
            <button
               className="btn btn-light w-200px d-flex justify-content-start flex-wrap btn-dropdwon"
               type="button"
               onClick={() => setIsOpen(!isOpen)}
            >
               {selectedOptions?.length > 0
                  ? selectedOptions?.join(" - ")
                  : intl.formatMessage({ id: "All" })}
            </button>
            {isOpen && (
               <ul
                  className="list-unstyled border border-1px p-0 border-radius position-absolute w-200px bg-white"
                  style={{ zIndex: 9999 }}
               >
                  {options?.map((option:any) => (
                     <li key={option?.id}>
                        <button
                           className="w-200px btn btn-white d-flex justify-content-between form-check"
                           onClick={() => handleIsCheck(option?.name)}
                        >
                           <label
                              className="form-check-label"
                              htmlFor="Checkme1"
                           >
                              {option?.name}
                           </label>
                           <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                              <input
                                 className="form-check-input widget-9-check xCheckBg"
                                 checked={selectedOptions?.includes(
                                    option?.name
                                 )}
                                 type="checkbox"
                                 value={option?.name}
                                 id="Checkme1"
                              />
                           </div>
                        </button>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </>
   );
};

export default CheckBoxDropDown;
