import _isEmpty from 'lodash/isEmpty'

export const isBlank = (value) => {
    if (typeof value === 'object' && _isEmpty(value)) {
        return true
    } else if (value === '') {
        return true
    } else {
        return false
    }
}

export const isInvalidEmail = (value) => {
    const emailPattern = /\S+@\S+\.\S+/
    if (emailPattern.test(value)) {
        return false
    } else {
        return true
    }
}