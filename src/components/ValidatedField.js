import React from 'react';

const ValidatedField = (props) => {
	return (
		(!props.value) ? null : <p>{props.fieldName}: {props.value}</p>
	);
}

export default ValidatedField;