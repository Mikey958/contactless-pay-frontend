export const getSelectValue = (value, options, isMulti) => {
	if (!value) return isMulti ? [] : null;

	return isMulti
		? options.filter((option) => value.includes(option.value))
		: options.find((option) => option.value === value);
};

export const handleSelectChange = (newValue, setValue, isMulti) => {
	if (!newValue) {
		setValue(isMulti ? [] : null);
		return;
	}

	if (isMulti) {
		setValue(newValue.map((opt) => opt.value));
	} else {
		setValue(newValue.value);
	}
};
