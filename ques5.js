const MOD = 314159;
function calculatePass() {
	let odd = [];
	let even = [];
	let t = 2; //making this dynamic
	odd[1] = 1;
	even[1] = 9;

	//populationg of password sequences
	for (let i = 2; i < 107; i++) {
		odd[i] = (((9 * odd[i - 1]) % MOD) + even[i - 1]) % MOD;
		even[i] = (((9 * even[i - 1]) % MOD) + odd[i - 1]) % MOD;
	}
	let terms = [2, 1]; //making this dyanamic
	for (let i = 0; i < t; i++) {
		console.log(even[terms[i]]);
	}
}

calculatePass();