import React from 'react'
import { globalLabels } from '../Constants/strings'

export default function NoRecords() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <span>{globalLabels.NO_RECORDS_FOUND}</span>
        </div>
    )
}
