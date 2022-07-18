import React from 'react'

import { globalLabels, gameActivitityIdOptions, gameActivitityTagOptions } from '../../Constants/strings'
import SelectField from '../../Common/SelectField.tsx'
import InputField from '../../Common/InputField.tsx'
import DatePickerComponent from '../../Common/DatePickerComponent.tsx'


function CreateStepOne(props, createFormRef) {

    const onSelectActivityId = (selectedId) => {
        createFormRef.current.setFieldsValue({ [`${globalLabels.GAME_ACTIVITY_ID}`]: selectedId })
        updateActivityIdTag()
    }
    const onSelectActivityTag = (selectedTag) => {
        createFormRef.current.setFieldsValue({ [`${globalLabels.GAME_ACTIVITY_TAG}`]: selectedTag })
        updateActivityIdTag()
    }

    const updateActivityIdTag = () => {
        let gameActivityId = createFormRef.current.getFieldValue(globalLabels.GAME_ACTIVITY_ID)
        let gameActivityTag = createFormRef.current.getFieldValue(globalLabels.GAME_ACTIVITY_TAG)
        createFormRef.current.setFieldsValue({ [`${globalLabels.GAME_ACTIVITY_ID_TAG}`]: `${gameActivityId}/${gameActivityTag}` })
    }

    return (
        <div>
            <h5>{globalLabels.STEP_1}</h5>
            <div className='d-flex flex-column p-2'>
                <div className='py-2'>
                    <SelectField
                        label={globalLabels.GAME_ACTIVITY_ID}
                        name={globalLabels.GAME_ACTIVITY_ID}
                        options={gameActivitityIdOptions}
                        onChange={onSelectActivityId}
                        fieldClassName='w-100'
                        titleContainerClassName={'col'}
                        placeHolder={`${globalLabels.SELECT} ${globalLabels.GAME_ACTIVITY_ID}`}
                    />
                </div>
                <div className='py-2'>
                    <SelectField
                        label={globalLabels.GAME_ACTIVITY_TAG}
                        name={globalLabels.GAME_ACTIVITY_TAG}
                        options={gameActivitityTagOptions}
                        titleContainerClassName={'col'}
                        onChange={onSelectActivityTag}
                        fieldClassName='w-100'
                        placeHolder={`${globalLabels.SELECT} ${globalLabels.GAME_ACTIVITY_TAG}`}
                    />
                </div>
                <div className='row py-2'>
                    <InputField
                        name={globalLabels.GAME_ACTIVITY_ID_TAG}
                        label={globalLabels.GAME_ACTIVITY_ID_TAG}
                        // value={gameActivityIdTag}
                        disabled={true}
                        containerClassName='col'
                    />
                </div>
                <div className='row py-2'>
                    <DatePickerComponent
                        name={globalLabels.START_DATE}
                        label={globalLabels.START_DATE}
                    // onChange={onSelectStartDate} 
                    />
                </div>
                <div className='row py-2'>
                    <DatePickerComponent
                        name={globalLabels.END_DATE}
                        label={globalLabels.END_DATE}
                    // onChange={onSelectEndDate} 
                    />
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef(CreateStepOne)