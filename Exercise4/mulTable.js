function printMultiplicationTable(n) {
	let header = '   '
	for (let i = 1; i <= n; i++) {
		header += `${i.toString().padStart(4)}`
	}
	console.log(header)

	for (let i = 1; i <= n; i++) {
		let row = `${i.toString().padStart(2)} |`
		for (let j = 1; j <= n; j++) {
			row += `${(i * j).toString().padStart(4)}`
		}
		console.log(row)
	}
}

printMultiplicationTable(5)
