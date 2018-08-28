import React from 'react';

const ValidatedField = ({ value, fieldName, tag, props }) => {
	tag = tag || 'p';
	const content = !fieldName ? value : `${fieldName}: ${value}`;
	return !value ? null : React.createElement(tag, props || {}, content);
}

export default ValidatedField;