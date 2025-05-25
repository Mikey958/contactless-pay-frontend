export const formatArrivalTime = (minutes, withPrefix = false) => {
	if (minutes === 0) {
		return 'прибывает';
	}

	const result = `${minutes} мин`;
	return withPrefix ? `через ${result}` : result;
};
