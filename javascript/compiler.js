const compile = x => {
	let output = '';

	for (let i = 0; i < x.length; i++) {
		const charCode = x.charCodeAt(i);
		
		// If the char code is in range of extended ASCII
		if (charCode <= 255) {
			// Add the same amount of spaces as the code of the character
			for (let k = 0; k < charCode; k++) {
				output += ' ';
			}

			// Add a tab
			output += '	';
		}
	}

	return output;
}
