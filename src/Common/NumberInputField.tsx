import React from 'react'
import { InputNumber, Form } from 'antd'


interface NumberInputField {
    name: string;
    label: string;
    placeholder: string;
    inputClassName: string;
    disabled: boolean
    required: boolean
    onChange?: Function
}

export default function NumberInputField({
    label,
    name,
    onChange,
    inputClassName,
    disabled = false,
    placeholder,
    required=true,
    errMessage
}) {
    return (
        <div>
            <Form.Item
                label={label}
                name={name}
                rules={[{ required: required, message: errMessage }]}
            >
                <InputNumber
                    name={name}
                    type='number'
                    onChange={onChange}
                    disabled={disabled}
                    className={inputClassName}
                    placeholder={placeholder}
                />
            </Form.Item>
        </div>
    )
}
