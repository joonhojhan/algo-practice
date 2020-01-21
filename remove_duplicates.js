/*
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.



Example 1:

Input: "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".


Note:

1 <= S.length <= 20000
S consists only of English lowercase letters.
*/

const removeDuplicates = function(S) {
	S = S.split('');
	let isAdjacent = false;
	let i = 0;
	let j = i + 1;
	do {
		if (S[i] === S[j]) {
			S.splice(i, 2);
			isAdjacent = true;
		} else {
			i++;
			j++;
		}
		if (j >= S.length && isAdjacent) {
			i = 0;
			j = 1;
			isAdjacent = false;
		}
		if (!S.length) break;
	} while (j !== S.length);
	return S.join('');
};

console.log(removeDuplicates('aababaab') === 'ba');
console.log(removeDuplicates('abbaca') === 'ca');
console.log(removeDuplicates('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === '');
console.log(
	removeDuplicates(
		'babcdkslkaudmjhmakbkmpdkijemfqploerdhrartbfsunolrejittjhmgesnmngfijhhlrosuimlddqpauomtlmgftcqbasbniflqrsemlipupeenospinkdrebabelpdjeoeuoilnbiqukaicupughdrpddtodrornrhfrlfasjqkfgchrheoaabqlolokaftpqkshpsmelibfjaqfaukipguphilahsfglugiaktijrapcamsrmpnohipebheibcidrrbdgkejalrpmclkptijgnlarllupnudeugitujnrmdudkbcnjuspbualmsnsmoahlanfrqpgkjspngdqbdsihondnphksddtgnskhfgcpcftndclmjhnrqjbstmdrcbogjsknpcbcirimpiesqfqcauefejiuglinhsincuclfmutaejnrommujnkcbjaopuidllmjsboerfmpobmepqcnpgifatuqgmqbnueqtuooklltsprpcdrhrsss'
	) ===
		'babcdkslkaudmjhmakbkmpdkijemfqploerdhrartbfsunolrejijhmgesnmngfijlrosuimlqpauomtlmgftcqbasbniflqrsemlipupnospinkdrebabelpdjeoeuoilnbiqukaicupughdrptodrornrhfrlfasjqkfgchrheobqlolokaftpqkshpsmelibfjaqfaukipguphilahsfglugiaktijrapcamsrmpnohipebheibcidbdgkejalrpmclkptijgnlarupnudeugitujnrmdudkbcnjuspbualmsnsmoahlanfrqpgkjspngdqbdsihondnphkstgnskhfgcpcftndclmjhnrqjbstmdrcbogjsknpcbcirimpiesqfqcauefejiuglinhsincuclfmutaejnroujnkcbjaopuidmjsboerfmpobmepqcnpgifatuqgmqbnueqtuktsprpcdrhrs'
);
