import React from 'react';
import './styles.scss';

export default function Button({ handleClick, text }) {
	return (
		<button type={'button'} onClick={handleClick} className="button-styles">
			{text}
		</button>
	);
}
