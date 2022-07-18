import React, { useState } from "react";

import { globalLabels, genderOptions } from "../../Constants/strings";
import InputField from "../../Common/InputField.tsx";
import SelectField from "../../Common/SelectField.tsx";
import NumberInputField from "../../Common/NumberInputField.tsx";

 function CreateStepTwo(props, createFormRef) {

  const onSelectGender = (value) => {
    createFormRef.current.setFieldsValue({ [`${globalLabels.GENDER}`]: value });
  };

  return (
    <div>
      <h5>{globalLabels.STEP_2}</h5>
      <div className="d-flex flex-column justify-content-center  p-3">
        <div className="row py-2">
          <InputField
            name={globalLabels.TEAM_CODE}
            label={globalLabels.TEAM_CODE}
            containerClassName="col"
          />
        </div>
        <div className="row py-2">
          <InputField
            name={globalLabels.TEAM_NAME}
            label={globalLabels.TEAM_NAME}
            containerClassName="col"
          />
        </div>
        <div className="py-2">
          <SelectField
            label={globalLabels.GENDER}
            name={globalLabels.GENDER}
            options={genderOptions}
            titleContainerClassName={"col"}
            onChange={onSelectGender}
            fieldClassName="w-100"
            placeHolder={`${globalLabels.SELECT} ${globalLabels.GENDER}`}
          />
        </div>
        <div className="row py-2">
          <NumberInputField
            name={globalLabels.TEAM_MEMBER_COUNT}
            label={globalLabels.TEAM_MEMBER_COUNT}
            inputClassName="w-100 mx-1"
          />
        </div>
        <div className="row py-2">
          <NumberInputField
            name={globalLabels.PLAYER_COUNT}
            label={globalLabels.PLAYER_COUNT}
            inputClassName="w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(CreateStepTwo)