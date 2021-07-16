const interpret = x => {
	let output = '';
	let charCode = 0; 

	for(let i = 0; i < x.length; i++) {
		const char = x.charAt(i);

		// Cycle through ASCII character codes
		if (charCode >= 255) {
			charCode = 0;
		}

		// If there is a space, increase the ASCII counter
		if (char === ' ') {
			charCode++;
		}

		// If there is a tab, add the character at the current charCode to the output
		if (char === '	') {
			output += String.fromCharCode(charCode);
		}
	}

	return output;
}

module.exports = interpret;
