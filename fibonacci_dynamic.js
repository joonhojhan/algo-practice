const fib = n => {
	let f = 0;
	let F = 1;
	for (let i = 0; i < n; i++) {
		[f, F] = [F, f + F];
	}
	return f;
};

console.log(fib(50) === 12586269025);
console.log(fib(70) === 190392490709135);
console.log(fib(100) === 354224848179262000000);
