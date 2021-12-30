import React from 'react';
import './styles.scss';

export default function Button({ handleClick, text = "Default button", customClassName = "" }) {
	return (
		<button type={'button'} onClick={handleClick} className={"button-styles " + customClassName}>
			{text}
		</button>
	);
}
