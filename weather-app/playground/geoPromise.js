const request = require('request');

var geoCodeAddress = (address) => {

	return new Promise((resolve, reject) => {

		var encodeAddress = encodeURIComponent(address);

		request({

			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
			json: true
		}, (error, response, body) =>{

			if (error) {

				reject('Unable to connect with google server!');

			}else if(body.status === 'ZERO_RESULTS'){

				reject('Unable to find that address! ');

			}else if (body.status === 'OK') {

				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				});

			}
			
		});
	});
};

geoCodeAddress('plazas de aragon').then((location) =>{
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) =>{
	console.log(errorMessage);
});