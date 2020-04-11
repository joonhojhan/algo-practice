// iterative
function isPalindrome(str) {
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
}

// recursive
// function isPalindrome(str) {
// 	return helper(str, 0, str.length - 1);
// }

// function helper(str, idx1, idx2) {
// 	if (idx1 >= idx2) return true;
// 	if (str[idx1] !== str[idx2]) return false;
// 	return helper(str, idx1 + 1, idx2 - 1);
// }

console.log(isPalindrome('aaa') === true);
console.log(isPalindrome('aba') === true);
console.log(isPalindrome('aaaa') === true);
console.log(isPalindrome('abba') === true);
console.log(isPalindrome('abb') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('racecarr') === false);
