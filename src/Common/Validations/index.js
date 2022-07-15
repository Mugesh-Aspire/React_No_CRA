import { toast } from "react-toastify"
import { validationMessages } from "../../Constants/strings"
import { isBlank, isInvalidEmail } from "./validatorRules"


export const signUpValidation = (userObj) => {
    if (isBlank(userObj.userName)) {
        toast(validationMessages.USER_NAME_REQUIRED)
    } else if (isBlank(userObj.userEmail)) {
        toast(validationMessages.EMAIL_REQUIRED)

    } else if (isInvalidEmail(userObj.userEmail)) {
        toast(validationMessages.ENTER_VALID_EMAIL)

    } else if (isBlank(userObj.password)) {
        toast(validationMessages.PASSWORD_REQUIRED)

    } else {
        return true
    }
}
export const loginValidation = (userObj) => {
    if (isBlank(userObj.userName)) {
        toast(validationMessages.USER_NAME_REQUIRED)
    } else if (isBlank(userObj.password)) {
        toast(validationMessages.PASSWORD_REQUIRED)

    } else {
        return true
    }
}