import React from 'react';
import { Select ,Form} from 'antd';


const { Option } = Select;

interface SelectField {
    options: object,
    defaultValue: string,
    onChange: Function,
    title: string,
    placeHolder: string
}

export default function SelectField({
    options = [],
    onChange,
    defaultValue,
    fieldClassName,
    label,
    name,
    placeHolder,
    containerClassName='',
    required=true,
    errMessage=''
}) {
    return (
        <div className={containerClassName}>
           <Form.Item name={name} label={label} rules={[{ required: required}]}>
            <div className='col'>
                <Select
                    defaultValue={defaultValue}
                    onChange={onChange}
                    className={fieldClassName}
                    placeholder={placeHolder}
                >
                    {
                        options.map((item: any) => {
                            return <Option key={item.value} value={item.value}>{item.title}</Option>
                        })
                    }
                </Select>
            </div>
            </Form.Item>
        </div>
    )
}
