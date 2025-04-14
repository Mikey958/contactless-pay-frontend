import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.scss';
import {
	FAVORITE_ROUTE,
	HISTORY_ROUTE,
	MAIN_ROUTE,
	MAP_ROUTE,
} from '../../utils/consts.js';
import mainIcon from '../../assets/icons/main-icon.svg';
import historyIcon from '../../assets/icons/history-icon.svg';
import mapIcon from '../../assets/icons/map-icon.svg';
import favoriteIcon from '../../assets/icons/favorite-icon.svg';
import mainActiveIcon from '../../assets/icons/main-active-icon.svg';
import historyActiveIcon from '../../assets/icons/history-active-icon.svg';
import mapActiveIcon from '../../assets/icons/map-active-icon.svg';
import favoriteActiveIcon from '../../assets/icons/favorite-active-icon.svg';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<nav className={s.footer__nav}>
				<NavLink
					to={MAIN_ROUTE}
					end
					className={({ isActive }) =>
						`${s.footer__link} ${isActive ? s.footer__link_active : ''}`
					}
				>
					{({ isActive }) => (
						<>
							<div className={s.footer__area}>
								<img
									className={s.footer__areaIcon}
									src={isActive ? mainActiveIcon : mainIcon}
									alt='главная'
								/>
							</div>
							<p className={s.footer__text}>Главная</p>
						</>
					)}
				</NavLink>

				<NavLink
					to={FAVORITE_ROUTE}
					className={({ isActive }) =>
						`${s.footer__link} ${isActive ? s.footer__link_active : ''}`
					}
				>
					{({ isActive }) => (
						<>
							<div className={s.footer__area}>
								<img
									className={s.footer__areaIcon}
									src={isActive ? favoriteActiveIcon : favoriteIcon}
									alt='избранное'
								/>
							</div>
							<p className={s.footer__text}>Избранное</p>
						</>
					)}
				</NavLink>

				<NavLink
					to={HISTORY_ROUTE}
					className={({ isActive }) =>
						`${s.footer__link} ${isActive ? s.footer__link_active : ''}`
					}
				>
					{({ isActive }) => (
						<>
							<div className={s.footer__area}>
								<img
									className={s.footer__areaIcon}
									src={isActive ? historyActiveIcon : historyIcon}
									alt='история'
								/>
							</div>
							<p className={s.footer__text}>История</p>
						</>
					)}
				</NavLink>

				<NavLink
					to={MAP_ROUTE}
					className={({ isActive }) =>
						`${s.footer__link} ${isActive ? s.footer__link_active : ''}`
					}
				>
					{({ isActive }) => (
						<>
							<div className={s.footer__area}>
								<img
									className={s.footer__areaIcon}
									src={isActive ? mapActiveIcon : mapIcon}
									alt='Карта'
								/>
							</div>
							<p className={s.footer__text}>Карта</p>
						</>
					)}
				</NavLink>
			</nav>
		</footer>
	);
};

export default Footer;
