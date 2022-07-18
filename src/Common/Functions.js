
export const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const getDateFormat = (date) => {
    let year = new Date(date).getFullYear()
    let month = new Date(date).getMonth()
    let day = new Date(date).getDate()
    return `${year}-${month.length > 1 ? month : `0${month}`}-${day}`
}