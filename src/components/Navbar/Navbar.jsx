import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
	MenuButton,
	NavbarWrapper,
	NavLinks,
	StyledNavLink,
	LanguageButtons,
	LangButton,
	LogoContainer,
	LogoImage,
} from '../../styles/Navbar.styles';
import logo from '../../assets/logos/phc-navbar-logo.svg';

const Navbar = () => {
	const { language, changeLanguage, t } = useLanguage();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<NavbarWrapper>
			<LogoContainer to='/'>
				<LogoImage src={logo} alt='Passionate Hikers Club Logo' />
			</LogoContainer>

			<MenuButton onClick={() => setMenuOpen(!menuOpen)}>
				{menuOpen ? '✕' : '☰'}
			</MenuButton>

			<NavLinks $isOpen={menuOpen}>
				<StyledNavLink to='/' onClick={() => setMenuOpen(false)}>{t.nav.home}</StyledNavLink>
				<StyledNavLink to='/poland' onClick={() => setMenuOpen(false)}>{t.nav.poland}</StyledNavLink>
				<StyledNavLink to='/england' onClick={() => setMenuOpen(false)}>{t.nav.england}</StyledNavLink>
				<StyledNavLink to='/slovakia' onClick={() => setMenuOpen(false)}>{t.nav.slovakia}</StyledNavLink>
				<StyledNavLink to='/about' onClick={() => setMenuOpen(false)}>{t.nav.about}</StyledNavLink>
				<StyledNavLink to='/contact' onClick={() => setMenuOpen(false)}>{t.nav.contact}</StyledNavLink>
			</NavLinks>

			<LanguageButtons>
				<LangButton
					type='button'
					onClick={() => changeLanguage('en')}
					$active={language === 'en'}
				>
					EN
				</LangButton>

				<LangButton
					type='button'
					onClick={() => changeLanguage('pl')}
					$active={language === 'pl'}
				>
					PL
				</LangButton>
			</LanguageButtons>
		</NavbarWrapper>
	);
};

export default Navbar;
