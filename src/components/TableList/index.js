import React from 'react'
import { formatDateAgo } from '../../utils/general';
import { Link } from 'react-router-dom';

import "./tablelist.css"

const TableList = ({ tableData }) => {
    return (
        <div>
            <div className='list_section'>
                <Link to={`/github/${tableData.id}`}>
                    <p className="list_title">{tableData.title}</p>
                </Link>
                <p className='list_location'>{tableData.location}</p>
            </div>
            <div className='list_section mb-4'>
                <p className="list_company">{tableData.company} - <span>{tableData.type}</span></p>
                <p className='list_company'>{formatDateAgo(tableData.created_at)}</p>
            </div>
            <hr style={{ marginTop: "-18px" }} />
        </div>

    )
}

export default TableList
