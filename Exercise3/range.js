function getPrimesInRange(min, max) {
	if (min > max) {
		;[min, max] = [max, min]
	}

	function isPrime(num) {
		if (num < 2) return false
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false
		}
		return true
	}

	const primes = []
	for (let i = min; i <= max; i++) {
		if (isPrime(i)) {
			primes.push(i)
		}
	}

	return primes
}

const primes = getPrimesInRange(11, 20)
console.log(primes)
