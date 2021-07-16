def compile(string):
	letters = []
	lastCode = 0
	for char in string:
		code = ord(char)
		compiledLetter = ''
		if code - lastCode < 0:
			for i in range(255 - lastCode):
				compiledLetter += ' '
			compiledLetter += '#'
			for i in range(code):
				compiledLetter += ' '
		else:
			for i in range(code - lastCode):
				compiledLetter += ' '
		compiledLetter += '	'
		lastCode = code
		letters.append(compiledLetter)
	return ''.join(letters)
