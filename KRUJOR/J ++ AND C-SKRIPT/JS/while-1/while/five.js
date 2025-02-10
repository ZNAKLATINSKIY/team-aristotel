function one(number) {
	let i = 1;
	let d = 2;
	while (d <= number) {
	    i = d * i;
	    d++
	}
	return i
}
console.log(one(10))
