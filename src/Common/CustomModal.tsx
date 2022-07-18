import React from "react";
import { Button, Modal, Form } from "antd";
import { globalLabels } from "../Constants/strings";

export default function CustomModal(props: any) {
  const {
    isVisible,
    handleCancel,
    handleSuccess,
    isLoading,
    successButtonLabel = "",
    title,
    formName=''
  } = props;
  return (
    <div>
      <Modal
        visible={isVisible}
        title={title}
        onOk={handleSuccess}
        onCancel={handleCancel}
        footer={
          <div className="d-flex justify-content-end align-items-center">
            <Button type="primary" loading={isLoading} onClick={handleCancel}>
              {globalLabels.CLOSE}
            </Button>
            {successButtonLabel && (
              <Form.Item className="m-0 px-2" >
                <Button
                  type="primary"
                  form={formName}
                  htmlType="submit"
                  loading={isLoading}
                  onClick={handleSuccess}
                >
                  {successButtonLabel}
                </Button>
              </Form.Item>
            )}
          </div>
        }
      >
        {props.children}
      </Modal>
    </div>
  );
}
