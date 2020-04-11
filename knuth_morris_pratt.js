const buildLPS = function (patt) {
	let i = 0;
	let j = 1;
	const res = Array(patt.length).fill(0);
	while (j < patt.length) {
		if (patt[i] === patt[j]) {
			res[j] = i + 1;
			i++;
			j++;
		} else if (i > 0) {
			i = res[i - 1];
		} else {
			res[j] = 0;
			j++;
		}
	}
	return res;
};

const find = function (str, patt) {
	const lps = buildLPS(patt);
	const res = [];
	let i = 0;
	let j = 0;
	while (i < str.length) {
		if (str[i] === patt[j]) {
			i++;
			j++;
		}
		if (j === patt.length) {
			res.push(i - j);
			j = lps[j - 1];
		} else if (i < str.length && str[i] !== patt[j]) {
			if (j > 0) j = lps[j - 1];
			else i++;
		}
	}
	return res;
};

console.log(find('adsgwadsxdsgwadsgz', 'dsgwadsgz'));
console.log(find('aaabaacaaaefs', 'aaa'));
console.log(find('abxabcabcaby', 'abcaby'));
