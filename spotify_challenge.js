let prompt =
	'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.';

let frequencyCounter = function(str) {
	let hash = {};
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		hash[char] ? hash[char]++ : (hash[char] = 1);
	}
	return hash;
};

let largestUniqueSet = function(str, limit) {
	let res = [];
	let frequencies = frequencyCounter(str);
	let sortedFrequencies = [];
	let length = str.length;
	let lastRemoved = null;
	for (let key in frequencies) {
		sortedFrequencies.push({ key, val: frequencies[key] });
	}
	sortedFrequencies.sort((a, b) => a.val - b.val);
	while (length >= limit) {
		lastRemoved = sortedFrequencies.shift();
		res.push(lastRemoved.key);
		length -= lastRemoved.val;
	}
	if (length < 50) {
		res.pop();
	}
	return res;
};

console.log(largestUniqueSet(prompt, 50));
