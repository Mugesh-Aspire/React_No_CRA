
export const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
export const hasStorage = (key) => {
    let storage = JSON.parse(localStorage.getItem(key))
    if (storage) {
        return true
    } else {
        return false
    }
}

export const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const removeStorage = (key) => {
    localStorage.removeItem(key)
}