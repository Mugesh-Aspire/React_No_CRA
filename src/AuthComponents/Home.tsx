import React from "react";
import { Link } from "react-router-dom";
import { globalLabels } from "../Constants/strings";

import { LOGIN_PATH, SIGNUP_PATH } from "../Routes/RoutePath";

export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src="images/login.png" alt="login" className="authPicture" />
      <div className="d-flex flex-column">
        <label className="text-gray">
          {globalLabels.ARE_YOU_NEW_USER}{" "}
          <Link to={SIGNUP_PATH}> {globalLabels.SIGN_UP} </Link>
        </label>
        <label className="text-gray">
          {globalLabels.EXISTING_USER}
          <Link to={LOGIN_PATH}> {globalLabels.LOGIN} </Link>
        </label>
      </div>
    </div>
  );
}
