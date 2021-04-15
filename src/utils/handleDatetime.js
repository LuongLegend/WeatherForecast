import moment from 'moment';
export const timestampToDate = (timestamp, format = 'DD/MM/YYYY') => {
    const day = moment.unix(timestamp);
    return day.format(format);
}

export const momentObjectToDateString = (momentObject, format = 'DD/MM/YYYY') => {
    const day = moment(momentObject);
    return day.format(format);
}
export const momentObjectToTimestamp = (momentObject) => {
    return momentObject.unix();
}

export const timestampToMomentObject = (time) => {
    return moment(time*1000)
}
export const getCurrentTimestamp = () => {
    return Math.ceil(new Date().getTime() / 1000);
}
