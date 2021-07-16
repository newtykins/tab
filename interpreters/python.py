def interpret(string):
	output = ''
	charCode = 0
	for char in string:
		if charCode >= 255:
			charCode = 0
		if char == ' ':
			charCode = charCode + 1
		if char == '	':
			output += chr(charCode)
	return output
