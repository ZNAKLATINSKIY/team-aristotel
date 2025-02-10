function one(NUMBERS, STEPEN) {
	let i = 2
	let val = NUMBERS
	while (i <= STEPEN) {
		NUMBERS *= val 
	    i++
	}
	return NUMBERS
}
console.log(one(5, 9))
