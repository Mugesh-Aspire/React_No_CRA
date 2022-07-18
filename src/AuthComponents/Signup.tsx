import React from "react";
import { Button, Form } from "antd";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputFields = [
    {
      name: "userName",
      // value: userName,
      placeholder: "Username",
      suffix: <UserOutlined />,
    },
    {
      name: "userEmail",
      placeholder: "Email",
      suffix: <MailOutlined />,
    },
  ];
  const onSignUpPress = (signupObj) => {
    const { userName, userEmail, password } = signupObj
    let userObj = {
      userName: userName,
      userEmail: userEmail,
      password: password,
    };
    if (signUpValidation(userObj)) {
      let userDetails = {
        name: userName,
        email: userEmail,
        userToken: generateUniqueId(),
      };
      setStorage("userDetails", JSON.stringify(userDetails));
      setStorage("userToken", JSON.stringify(userDetails.userToken));
      dispatch(signUpSuccess(userDetails));
      navigate(TEAM_PATH);
    }
  };
  const onSignUpFailure = (failure) => {
    console.log('failure', failure)
  }
  return (
    <div className="d-flex flex-direction-row p-3">
      <img src="images/signup.png" alt="login" className="authPicture" />
      <div className="d-flex flex-column justify-content-center w-100">
        <label className="p-2 font-weight-bold">{globalLabels.SIGN_UP}</label>
        <div className="d-flex justify-content-center">
          <div >
            <Form
              name="signupForm"
              id="signupForm"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onSignUpPress}
              onFinishFailed={onSignUpFailure}
              autoComplete="off"
            >

              <div className="py-2">
                {inputFields.map((item, index) => {
                  return (
                    <div className="row py-2" key={index}>
                      <InputField
                        name={item.name}
                        label={item.name}
                        containerClassName="col"
                        suffixIcon={item.suffix}
                      />
                    </div>
                  );
                })}
                <div className="row py-2">
                  <PasswordField
                    name="password"
                    label="password"
                    placeholder={"Enter password"}
                  />
                </div>
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
                <Button size="middle" type="primary" htmlType="submit" form="signupForm">
                  {globalLabels.SIGN_UP}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
