export const globalLabels = {
    LOGIN: 'Login',
    LOGOUT: 'Log out',
    SIGN_UP: 'Sign Up',
    SUBMIT: 'Submit',
    DONT_HAVE_ACCOUNT: "Don't have an account?",
    ALREADY_SIGNED_IN: 'Already signed up?',
    ARE_YOU_NEW_USER: 'Are you a new user? Please',
    EXISTING_USER: 'Existing user please',
    VIEW_DETAILS:'View Details',
    DELETE:'Delete',
    NO_RECORDS_FOUND:'No records found',
    CREATE_TEAM:'Create Team',
    VIEW_TEAM:'View Team',
    TEAM_LIST:'Team list',
    CLOSE:'Close',
    STEP_1:'Step 1',
    STEP_2:'Step 2',
    GAME_ACTIVITY_ID:'GameActivityId',
    GAME_ACTIVITY_TAG:'GameActivityTag',
    GAME_ACTIVITY_ID_TAG:'GameActivityIdTag',
    SELECT:'Select',
    START_DATE:'StartDate',
    END_DATE:'EndDate',
    TEAM_CODE:'TeamCode',
    TEAM_NAME:'TeamName',
    GENDER:'Gender',
    TEAM_MEMBER_COUNT:'TeamMemberCount',
    PLAYER_COUNT:'PlayerCount',
    NEXT:'Next',
    PREVIOS:'Previous',
    SAVE:'Save',
    USER_NAME:'Username',
    PASSWORD:'Password'
}


export const validationMessages = {
    USER_NAME_REQUIRED: 'User name is required',
    PASSWORD_REQUIRED: 'password is required',
    EMAIL_REQUIRED: 'email is required',
    ENTER_VALID_EMAIL: 'Please enter a valid email. e.g(abc@abc.com)',
    USER_NAME_OR_PASSWORD_INCORRECT:'User name or password is incorrect',
    PLEASE_FILL_ALL_DETAILS:'Please fill all the details.'
}

export const API_BASE_URL ='https://mocki.io/v1/'

export const API_METHODS ={
    REQUEST_TEAM_LIST:'a638c068-89c2-4e24-8447-20a03f5e7b77'
}

export const gameActivitityIdOptions = [
    { name: 'ZA-AL', value: 'ZA-AL' },
    { name: 'VE-AL', value: 'VE-AL' }
]

export const gameActivitityTagOptions = [
    { name: 'STANDARD', value: 'STANDARD' },
    { name: 'SATURDAY', value: 'SATURDAY' },
    { name: 'SUNDAY', value: 'SUNDAY' },
]
export const genderOptions = [
    { name: 'Male', value: 'Male' },
    { name: 'Female', value: 'Female' },
    { name: 'Mixed', value: 'Mixed' },
]