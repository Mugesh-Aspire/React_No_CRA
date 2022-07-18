import React from 'react'
import { DatePicker, Form } from 'antd';


interface DatePickerComponent {
    onChange: Function,
    label: string,
    name: string,
    required:boolean
}

export default function DatePickerComponent({
    onChange,
    label,
    name,
    required=true
}) {
    return (
        <Form.Item label={label} name={name} rules={[{ required: required }]}>
            <DatePicker onChange={onChange} />
        </Form.Item>
    )
}
