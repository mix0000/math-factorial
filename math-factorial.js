Math.factorial = n => {
	if (typeof n != 'number') {
		throw new Error('Parametre must be a number')
		return false;
	}
	else if (n < 0) {
		throw new Error('Parametre must be a positive or 0');
		return false;
	}
	return n ? n * Math.factorial(n - 1) : 1;
}