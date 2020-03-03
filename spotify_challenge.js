let prompt =
	'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.';

// let frequencyCounter = function(str) {
// 	let hash = {};
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i];
// 		hash[char] ? hash[char]++ : (hash[char] = 1);
// 	}
// 	return hash;
// };

let frequencyCounter = function(str) {
	let frequencies = new Map();
	let n = str.length;
	for (let i = 0; i < n; i++) {
		let char = str[i];
		if (frequencies.get(char)) {
			frequencies.set(char, frequencies.get(char) + 1);
		} else {
			frequencies.set(char, 1);
		}
	}
	return frequencies;
};

let largestUniqueSet = function(str, limit) {
	let res = [];
	let frequencies = frequencyCounter(str);
	let sortedFrequencies = [];
	let length = str.length;
	let lastRemoved = null;
	frequencies.forEach((val, key) => {
		sortedFrequencies.push({ key, val });
	});
	sortedFrequencies.sort((a, b) => a.val - b.val);
	while (length >= limit) {
		lastRemoved = sortedFrequencies.shift();
		res.push(lastRemoved.key);
		length -= lastRemoved.val;
	}
	if (length < 50) {
		length += frequencies.get(res.pop());
	}
	console.log(
		'The largest set of unique characters that can be removed from the paragraph without letting its length drop below 50 is:\n',
		res
	);
	console.log(
		`The length of the paragraph after removing the characters in the largest set of unique characters is: ${length}.`
	);
	return res;
};

largestUniqueSet(prompt, 50);
