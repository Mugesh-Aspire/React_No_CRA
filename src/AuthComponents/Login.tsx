import React, { useState } from "react";
import { Button } from "antd";
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
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
const navigate = useNavigate()
  const onLoginPress = () => {
    let userObj = {
      userName,
      passWord,
    };
    if (loginValidation(userObj)) {
      const userDetails = JSON.parse(getStorage("userDetails"));
      if (userName === userDetails.userName &&passWord === userDetails.password) {
        navigate(TEAM_PATH)
        
      } else {
        toast(validationMessages.USER_NAME_OR_PASSWORD_INCORRECT);
      }
    }
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onEnterPassword = (e) => {
    setPassWord(e.target.value);
  };

  return (
    <div className="d-flex flex-direction-row p-3">
      <img src="images/login.png" alt="login" className="authPicture" />
      <div className="d-flex flex-column justify-content-center w-100">
        <label className="p-2 font-weight-bold">{globalLabels.LOGIN}</label>
        <div className="d-flex justify-content-center">
          <div className="w-75">
            <InputField
              name="userName"
              placeholder={"Enter username"}
              inputClassName="w-100"
              onChange={onChangeUserName}
              suffixIcon={<UserOutlined />}
            />
            <PasswordField
              name="password"
              onChange={onEnterPassword}
              placeholder={"Enter password"}
            />
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
                onClick={onLoginPress}
                type="primary"
                disabled={userName && passWord ? false : true}
              >
                {globalLabels.LOGIN}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
