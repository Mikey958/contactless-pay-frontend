import React, { useEffect, useRef } from 'react';
import s from './IntroBlock.module.scss';

const IntroBlock = ({ title, description, marginBottom = '15px' }) => {
	const blockRef = useRef();

	useEffect(() => {
		if (blockRef.current) {
			blockRef.current.style.marginBottom = marginBottom;
		}
	}, [marginBottom]);

	return (
		<div ref={blockRef} className={s['intro-block']}>
			<h1 className={s['intro-block__title']}>{title}</h1>
			<p className={s['intro-block__description']}>{description}</p>
		</div>
	);
};

export default IntroBlock;
