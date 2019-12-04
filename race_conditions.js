let myVar = 0;

setTimeout(() => {
	myVar += 20;
	console.log(myVar);
}, 3000);

setTimeout(() => {
	myVar++;
	console.log(myVar);
}, 1000);

// console.log(myVar);
