var somePromise = new Promise((resolve, reject) =>{

	setTimeout(() =>{

		// resolve('It worked');

		reject('Unable to fulfill promise');

	}, 2000);

});

somePromise.then((message) =>{

	console.log('succes: ', message);

}, (errorMessage) =>{

	console.log('Error: ', errorMessage);
	
});