
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
	a: {
		demand: true,
		description: 'Address to fetch weather for',
		alias: 'address',
		string: true
	}
})
.help()
.alias('help', 'h')
.argv;

var encodeAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeUrl).then((response) =>{

	if (response.data.status === 'ZERO_RESULTS') {

		throw new Error('unable to find that location!');
	}

	var lat = response.data.results[0].geometry.location.lat;

	var lng = response.data.results[0].geometry.location.lng;

	var weatherUrl = `https://api.darksky.net/forecast/44cc0f6d512a6362515592961482a326/${lat},${lng}`;

	console.log(response.data.results[0].formatted_address);

	return axios.get(weatherUrl);

}).then((response) =>{

	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);

}).catch((e) =>{
	if (e.code === 'ENOTFOUND') {

		console.log('unable to connect with the server');
	}else{

		console.log(e.message);
	}
});

