import React, { Component } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface InputField {
  name: string;
  status?: string;
  placeholder: string;
  inputClassName: string;
  prefixIcon?: Component;
  suffixIcon?: Component;
  onChange: Function;
}

export default function InputField({
  status,
  name = "",
  placeholder = "",
  prefixIcon,
  onChange,
  inputClassName = "",
  suffixIcon,
}) {
  return (
    <div className="d-flex align-items-center py-2">
      <Input
        name={name}
        className={inputClassName}
        suffix={suffixIcon}
        status={status}
        placeholder={placeholder}
        prefix={prefixIcon}
        onChange={onChange}
      />
    </div>
  );
}
