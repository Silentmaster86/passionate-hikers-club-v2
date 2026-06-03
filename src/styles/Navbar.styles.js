import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const NavbarWrapper = styled.nav`
	min-height: 82px;
	padding: 0 2rem;
	background: rgba(15, 23, 42, 0.82);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 1000;

	@media (max-width: 900px) {
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem;
	}
`;

export const Logo = styled(Link)`
	font-size: 1.4rem;
	font-weight: 900;
	letter-spacing: 0.04em;
	color: #f8fafc;
`;

export const NavLinks = styled.div`
	display: flex;
	gap: 1.4rem;
	align-items: center;

	@media (max-width: 900px) {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;

		background: #0f172a;

		flex-direction: column;

		padding: ${({ $isOpen }) => ($isOpen ? '2rem' : '0')};

		max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};

		overflow: hidden;

		transition: all 0.3s ease;
	}
`;

export const StyledNavLink = styled(NavLink)`
	color: #cbd5e1;
	font-weight: 600;
	transition: 0.25s ease;

	&.active {
		color: #facc15;
	}

	&:hover {
		color: #facc15;
	}
`;

export const LanguageButtons = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const LangButton = styled.button`
	border: 1px solid
		${({ $active }) => ($active ? '#facc15' : 'rgba(255,255,255,0.2)')};
	background: ${({ $active }) => ($active ? '#facc15' : 'transparent')};
	color: ${({ $active }) => ($active ? '#111827' : '#f8fafc')};
	border-radius: 999px;
	padding: 0.35rem 0.75rem;
	font-weight: 700;
	cursor: pointer;
`;

export const LogoContainer = styled(Link)`
	display: flex;
	align-items: center;
`;

export const LogoImage = styled.img`
	height: 58px;
	width: auto;
	display: block;

	@media (max-width: 768px) {
		height: 46px;
	}
`;

export const LogoText = styled.span`
	display: none;
`;

export const MenuButton = styled.button`
	display: none;

	@media (max-width: 900px) {
		display: block;
		background: none;
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;
	}
`;