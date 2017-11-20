console.log('starting app');

setTimeout(() =>{

	console.log("I'm in the middle of the callback");

}, 2000);

setTimeout(() => {
	console.log("Time ouu of zero");
}, 0);

console.log('Finishing up');