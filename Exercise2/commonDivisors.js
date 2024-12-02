function getCommonDivisors(numbers) {
	if (numbers.length === 0) return []

	function gcd(a, b) {
		while (b !== 0) {
			;[a, b] = [b, a % b]
		}
		return a
	}

	let overallGCD = numbers[0]
	for (let i = 1; i < numbers.length; i++) {
		overallGCD = gcd(overallGCD, numbers[i])
	}

	const divisors = []
	for (let i = 1; i <= Math.sqrt(overallGCD); i++) {
		if (overallGCD % i === 0) {
			divisors.push(i)
			if (i !== overallGCD / i) {
				divisors.push(overallGCD / i)
			}
		}
	}

	return divisors.sort((a, b) => a - b)
}

const numbers = [42, 12, 18]
console.log(getCommonDivisors(numbers))
