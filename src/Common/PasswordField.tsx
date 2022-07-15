import React from "react";
import { Input } from "antd";
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
  placeholder = "",
  onChange,
  inputClassName = "",
}) {
  return (
    <div className="py-2">
      <Input.Password
        name={name}
        className={inputClassName}
        placeholder={placeholder}
        required
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        onChange={onChange}
      />
    </div>
  );
}
