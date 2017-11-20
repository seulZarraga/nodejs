const request = require('request');

var getWeather = (lat, lng, callback) =>{
	request({
		url: `https://api.darksky.net/forecast/44cc0f6d512a6362515592961482a326/${lat},${lng}`,
		json: true
	}, (error, response, body) =>{
		if (error) {
			callback('Unable to connect with darksky server!');

		}else if (response.statusCode == '200') {

			callback(undefined, {

				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature

			});

		}else{

			callback('Unable to fetch weather!');
		}
	});
}

module.exports.getWeather = getWeather