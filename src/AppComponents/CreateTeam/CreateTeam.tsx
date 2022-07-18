import React, {  useState } from 'react'
import { Button } from 'antd'

import { globalLabels } from '../../Constants/strings'
import CreateStepOne from './CreateStepOne.tsx'
import CreateStepTwo from './CreateStepTwo.tsx'

 function CreateTeam(props, createFormRef) {

    const [selectedStep, setSelectedStep] = useState(globalLabels.NEXT)

    const onPressAction = () => {
        if (selectedStep === globalLabels.NEXT) {
            setSelectedStep(globalLabels.PREVIOS)
        } else {
            setSelectedStep(globalLabels.NEXT)
        }
    }

    return (
        <div>
            <div style={{ display: selectedStep === globalLabels.NEXT ? 'block' : 'none' }}>
                <CreateStepOne ref={createFormRef}/>
            </div>
            <div style={{ display: selectedStep === globalLabels.NEXT ? 'none' : 'block' }}>
                <CreateStepTwo ref={createFormRef}/>
            </div>
            <div className="d-flex justify-content-end pt-3">
                <Button size="middle" onClick={onPressAction} type="primary" className="mx-2">
                    {selectedStep === globalLabels.NEXT ? globalLabels.NEXT : globalLabels.PREVIOS}
                </Button>
            </div>
        </div>
    )
}
export default React.forwardRef(CreateTeam)
