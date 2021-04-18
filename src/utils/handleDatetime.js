import moment from 'moment';
import 'moment/locale/vi';
export const timestampToDate = (timestamp, format = 'DD/MM/YYYY', lang='vi') => {
    return moment.unix(timestamp).locale(lang).format(format);
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
export const dateToTimestamp = (date, format = 'MM-DD-YYYY') => {
    const day = moment(date, format, true);
    if (!day.isValid()) throw new Error(`invalid date [format: ${format}]`);
    return day.unix();
}
