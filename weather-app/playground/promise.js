var asyncAdd = (a, b) =>{

	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
			if (typeof a === 'number' && typeof b === 'number') {

				resolve(a + b);
			}else{

				reject('Arguments must be numbers!');
			}
		}, 500);
	});
};

asyncAdd(3, 5).then((res) =>{

	console.log(res);

	return asyncAdd(res, 98);
}).then((res) => {

	console.log(res);
}).catch((errorMessage) =>{

	console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) =>{

// 	setTimeout(() =>{

// 		// resolve('It worked');

// 		reject('Unable to fulfill promise');

// 	}, 2000);

// });

// somePromise.then((message) =>{

// 	console.log('succes: ', message);

// }, (errorMessage) =>{

// 	console.log('Error: ', errorMessage);

// });