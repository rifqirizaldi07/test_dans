import moment from "moment/moment"

export const isEmptyValue = (value) => {
    return (
        value === undefined ||
        value === null ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0) ||
        (typeof value === 'number' && value < 1)
    )
}

export const formatDateAgo = (value) => {
    const format = moment(value).format('MM/DD/YYYY');

    if (format !== null) {
        return moment(format).fromNow()
    }

    return false
}
