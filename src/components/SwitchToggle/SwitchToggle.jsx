import React from 'react';
import s from './SwitchToggle.module.scss';

const SwitchToggle = ({ enabled, onChange }) => {
	return (
		<button
			className={`${s.toggle} ${enabled ? s.toggle_on : ''}`}
			onClick={() => onChange(!enabled)}
		>
			<div
				className={`${s.toggle__thumb} ${enabled ? s.toggle__thumb_on : ''}`}
			></div>
		</button>
	);
};

export default SwitchToggle;
