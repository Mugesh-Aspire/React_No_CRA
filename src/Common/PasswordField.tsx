import React from "react";
import { Input,Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface PasswordField {
  name: string;
  status?: string;
  placeholder: string;
  inputClassName: string;
  onChange: Function;
}

export default function PasswordField({
  name = "",
  label='',
  placeholder = "",
  inputClassName = "",
  required=true,
  errMessage=''
}) {
  return (
    <div className="py-2">
      <Form.Item
        label={label}
        name={name}
        rules={[{ required: required }]}
      >
        <Input.Password
          name={name}
          className={inputClassName}
          placeholder={placeholder}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          // onChange={onChange}
        />
      </Form.Item>
    </div>
  );
}
