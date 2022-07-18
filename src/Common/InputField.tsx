import React, { Component } from "react";
import { Input, Form } from "antd";

interface InputField {
  name: string;
  label: string;
  status?: string;
  placeholder: string;
  inputClassName: string;
  prefixIcon?: Component;
  suffixIcon?: Component;
  disabled: boolean
  inputType?: string
  onChange?:Function
}

export default function InputField({
  status,
  label='',
  onChange,
  name = "",
  inputType = 'text',
  placeholder = "",
  prefixIcon,
  inputClassName = "",
  suffixIcon,
  disabled = false,
  containerClassName = 'd-flex align-items-center py-2',
  required=true,
  errMessage=''
}) {
  return (
    <div className={containerClassName}>
      <Form.Item
        label={label}
        name={name}
        rules={[{ required: required}]}
      >
        <Input
          type={inputType}
          name={name}
          onChange={onChange}
          className={inputClassName}
          suffix={suffixIcon}
          status={status}
          placeholder={placeholder}
          prefix={prefixIcon}
          disabled={disabled}
        />
      </Form.Item>
    </div>
  );
}
