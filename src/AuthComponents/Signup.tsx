import React, { useState } from "react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

import { LOGIN_PATH, TEAM_PATH } from "../Routes/RoutePath";
import { globalLabels } from "../Constants/strings";
import { signUpValidation } from "../Common/Validations";
import { generateUniqueId } from "../Common/Functions";
import { setStorage } from "../Storage/localStorage";
import { signUpSuccess } from "../ReduxStore/reducer.tsx";
import InputField from "../Common/InputField.tsx";
import PasswordField from "../Common/PasswordField.tsx";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputFields = [
    {
      name: "userName",
      value: userName,
      placeholder: "Username",
      suffix: <UserOutlined />,
      onChange: (e: any) => setUserName(e.target.value),
    },
    {
      name: "userEmail",
      value: userEmail,
      placeholder: "Email",
      suffix: <MailOutlined />,
      onChange: (e: any) => setUserEmail(e.target.value),
    },
  ];
  const onSignUpPress = () => {
    let userObj = {
      userName,
      userEmail,
      password,
    };
    if (signUpValidation(userObj)) {
      let userDetails = {
        name: userName,
        email: userEmail,
        userToken: generateUniqueId(),
      };
      setStorage("userDetails", JSON.stringify(userDetails));
      dispatch(signUpSuccess(userDetails));
      navigate(TEAM_PATH);
    }
  };

  return (
    <div className="d-flex flex-direction-row p-3">
      <img src="images/signup.png" alt="login" className="authPicture" />
      <div className="d-flex flex-column justify-content-center w-100">
        <label className="p-2 font-weight-bold">{globalLabels.SIGN_UP}</label>
        <div className="d-flex justify-content-center">
          <div className="w-75">
            <div className="py-2">
              {inputFields.map((item, index) => {
                return (
                  <InputField
                    key={index}
                    value={item.value}
                    placeholder={item.placeholder}
                    onChange={item.onChange}
                    suffixIcon={item.suffix}
                  />
                );
              })}
              <PasswordField
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Enter password"}
              />
            </div>
            <div className="p-2">
              <label>
                <span className="text-gray">
                  {globalLabels.ALREADY_SIGNED_IN}
                </span>{" "}
                <Link to={LOGIN_PATH}>{globalLabels.LOGIN}</Link>{" "}
              </label>
            </div>
            <div className="d-flex justify-content-center align-items-center py-2">
              <Button size="middle" onClick={onSignUpPress} type="primary">
                {globalLabels.SIGN_UP}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
