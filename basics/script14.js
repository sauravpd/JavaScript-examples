var data = [ 'steve', 'john', 50, true, 25 ]

for (var i = 0; i < data.length; i++) {
	if (typeof data[i] !== 'string') {
		continue;
	}
	console.log(data[i])
}

console.log("**********************************")