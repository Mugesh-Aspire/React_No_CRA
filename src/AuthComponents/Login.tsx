import React, { useState } from "react";
import { Button,Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

import { SIGNUP_PATH, TEAM_PATH } from "../Routes/RoutePath";
import { globalLabels, validationMessages } from "../Constants/strings";
import InputField from "../Common/InputField.tsx";
import PasswordField from "../Common/PasswordField.tsx";
import { loginValidation } from "../Common/Validations";
import { getStorage } from "../Storage/localStorage";

export default function Login() {
  const navigate = useNavigate()

  const onLoginPress = (loginObj) => {
    let userObj = {
      userName:loginObj.Username,
      passWord:loginObj.password,
    };
    if (loginValidation(userObj)) {
      const userDetails = JSON.parse(getStorage("userDetails"));
      if (userDetails&&loginObj.Username === userDetails.userName && loginObj.password === userDetails.password) {
        navigate(TEAM_PATH)

      } else {
        toast(validationMessages.USER_NAME_OR_PASSWORD_INCORRECT);
      }
    }
  };

  const onLoginFailure =()=>{
    toast(validationMessages.USER_NAME_OR_PASSWORD_INCORRECT);
  }
 

  return (
    <div className="d-flex flex-direction-row p-3">
      <img src="images/login.png" alt="login" className="authPicture" />
      <div className="d-flex flex-column justify-content-center w-100">
        <label className="p-2 font-weight-bold">{globalLabels.LOGIN}</label>
        <Form 
          name="loginForm"
          id="loginForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onLoginPress}
          onFinishFailed={onLoginFailure}
          autoComplete="off"
        >
        <div className="d-flex justify-content-center">
          <div>
            <div className="row py-2">
              <InputField
                name={globalLabels.USER_NAME}
                label={globalLabels.USER_NAME}
                containerClassName="col"
              />
            </div>
            <div className="row py-2">
              <PasswordField
                name="password"
                label="password"
                placeholder={"Enter password"}
              />
            </div>
            <div className="p-2">
              <label>
                <span className="text-gray">
                  {globalLabels.DONT_HAVE_ACCOUNT}{" "}
                </span>{" "}
                <Link to={SIGNUP_PATH}>{globalLabels.SIGN_UP}</Link>{" "}
              </label>
            </div>
            <div className="d-flex justify-content-center align-items-center p-2">
              <Button
                size="middle"
                type="primary"
                htmlType="submit"
                form="loginForm"
              >
                {globalLabels.LOGIN}
              </Button>
            </div>
          </div>
        </div>
        </Form>
      </div>
    </div>
  );
}
