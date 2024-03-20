function decodeMessage(key: string, message: string): string {
	const encoder = "abcdefghijklmnopqrstuvwxyz".split('');
	const keyChars = Array.from(new Set(key.split(/\s+/).join('')));

	const mappedMessage = new Map();
	keyChars.forEach((char, idx) => {
		mappedMessage.set(char, encoder[idx])
	});

	const messageChars = message.split('');
	for (let c = 0; c < messageChars.length; c++) {
		if (messageChars[c] !== ' ') {
			messageChars[c] = mappedMessage.get(messageChars[c]);
		}
	}

	return messageChars.join('');
};

// 56ms, 51.47MB
// 88.57%, 94.29%
