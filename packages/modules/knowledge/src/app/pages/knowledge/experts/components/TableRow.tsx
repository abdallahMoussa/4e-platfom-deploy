import React from "react";
import { KTSVG } from '../../../../helpers'
import { useIntl } from 'react-intl';
import { DeletePopup } from '../../../partials/DeletePopup'
import EditExperience from "../popup/edit-expert-experience-popup";
import { Actions } from "./Actions";

interface Iprop {
    experience: any
  }

  const TableRow: React.FC<Iprop> = ({experience}) => {
    const intl = useIntl()

    return (
        <>
        <tr style={{verticalAlign: 'middle'}}>
          <td style={{verticalAlign: 'middle'}}>
            <p className='text-center'>{experience?.id}</p>
          </td>
          <td style={{verticalAlign: 'middle'}}>
            <p className='text-center'>{experience?.name}</p>
          </td>
          <td style={{verticalAlign: 'middle'}}>
            <p className='text-center'>{experience?.numberOfYears}</p>
          </td>
          <td style={{verticalAlign: 'middle'}}>
            <p className='text-center'>{experience?.field}</p>
          </td>
          <td style={{verticalAlign: 'middle'}}>
            <p className='text-center'>{experience?.companyLocation}</p>
          </td>
        <td className="text-center">
        <Actions id={3} />
        </td >
        </tr>
       </>
      )
}

export {TableRow};