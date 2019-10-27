const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1c844902b9f91c8020ed014a0f56e6b1&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}