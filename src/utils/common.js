export const getIconWeather = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

export const convertMpStoKMpH = (mps) => {
    return (3.6 * mps).toFixed(0);
}

const convertCtoF = (c) => {
    return c * 1.8 + 32;
}
export const convertTempF = (temp = 0, type) => {
    if(type === "F") return convertCtoF(temp).toFixed(0);
    return temp.toFixed(0);
}