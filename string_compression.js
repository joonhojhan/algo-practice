/*
Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.

Example 1:

Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".


Example 2:

Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.


Example 3:

Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.
*/

const compress = function(chars) {
	let read = 0;
	let readAhead = read + 1;
	let write = 0;
	let count = 1;
	while (read < chars.length) {
		while (chars[read] === chars[readAhead]) {
			count++;
			readAhead++;
		}
		if (count === 1) {
			read++;
			readAhead = read + 1;
		} else {
			let countStr = String(count);
			let countLength = countStr.length;
			write = read + 1;
			for (let i = 0; i < countLength; i++) {
				chars[write + i] = countStr[i];
			}
			read = write + countLength;
			chars.splice(read, count - countLength - 1);
			readAhead = read + 1;
			count = 1;
		}
	}
};

let test1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
let test2 = ['a'];
let test3 = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
let test4 = [
	'a',
	'a',
	'a',
	'a',
	'a',
	's',
	's',
	's',
	's',
	's',
	's',
	's',
	's',
	's',
	'c',
	'd',
	'w',
	'a',
	'a',
	'a',
	'b',
	'a',
	'a',
	'b',
];
compress(test1);
compress(test2);
compress(test3);
compress(test4);

console.log(test1); // ["a","2","b","2","c","3"]
console.log(test2); // ["a"]
console.log(test3); // ["a","b","1","2"]
console.log(test4); // ["a","b","1","2"]
