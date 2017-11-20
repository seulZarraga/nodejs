const request = require('request');
const yargs = require('yargs');

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

var encodeAddress = encodeURIComponent(argv.a);
console.log(argv.a);

request({

	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
	json: true
}, (error, response, body) =>{
	console.log(JSON.stringify(body, undefined, 4));
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`location: ${body.results[0].geometry.location.lat}`);
	console.log(`location: ${body.results[0].geometry.location.lng}`);
});