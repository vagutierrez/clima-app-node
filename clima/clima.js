const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=34525e7d2cea077c493030753e8fa421`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}