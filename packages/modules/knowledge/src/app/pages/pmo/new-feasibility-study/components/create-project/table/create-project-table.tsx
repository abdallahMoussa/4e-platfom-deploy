import React, { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'

interface ICreateProjectTable {
    thead_th_names: string[];
    tbody_td_values: {}[];
    handleEdit?: (data: {}[]) => void;
    ActionComponent?:any
}

export const CreateProjectTable: FC<ICreateProjectTable> = ({ thead_th_names, tbody_td_values, handleEdit, ActionComponent=null }) => {
    const intl = useIntl();

    const tbody_td_value_fun = (td_values, id) => {
        const tbody_td_value_array = [];
        for (let head of thead_th_names) {
            if (head.toLowerCase() == 'actions') {
                continue;
            }
            let key = head[0].toLowerCase() + head.slice(1);
            tbody_td_value_array.push(<th className="px-2 pb-3 min-w-60px max-w-200px">{td_values[key]}</th>)
        }
        if (ActionComponent) {
            tbody_td_value_array.push(<th className="px-2 pb-3 min-w-60px max-w-200px"><ActionComponent data = {td_values} handleEdit = {handleEdit} /></th>)
        }
        return tbody_td_value_array;
    }


    const thead_th_names_fun = (th_names) => {
        const thead_th_name_array = [];
        for (let i = 0; i < th_names.length; i++) {
            thead_th_name_array.push(<td>{intl.formatMessage({id:th_names[i]})}</td>)
        }
        return thead_th_name_array;
    }

    return (
        <div className="table-responsive">
            <table className="table table-rounded border table-row-gray-200 align-middle gs-0 gy-4 text-center">
                <thead>
                <tr className="text-dark fw-bold fs-6 bg-light">
                    {thead_th_names_fun(thead_th_names)}
                </tr>
                </thead>
                <tbody className='text-muted'>
                {tbody_td_values.map((td_value, index) => (
                    <tr className='h-60px'>
                        {tbody_td_value_fun(td_value, index)}
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}