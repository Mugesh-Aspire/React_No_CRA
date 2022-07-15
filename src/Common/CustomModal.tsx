import React from 'react'
import { Button, Modal } from 'antd';
import { globalLabels } from '../Constants/strings';

export default function CustomModal(props: any) {

    const {
        isVisible,
        handleCancel,
        handleSuccess,
        isLoading,
        successButtonLabel=''
    } = props
    return (
        <div>
            <Modal
                visible={isVisible}
                title="Title"
                onOk={handleSuccess}
                onCancel={handleCancel}
                footer={[
                    <Button type="primary" loading={isLoading} onClick={handleCancel}>
                        {globalLabels.CLOSE}
                    </Button>,
                    successButtonLabel && <Button
                        type="primary"
                        loading={isLoading}
                        onClick={handleSuccess}
                    >
                        {successButtonLabel}
                    </Button>
                ]}
            >
                {props.children}
            </Modal>
        </div>
    )
}


