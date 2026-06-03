import { useLanguage } from '../../context/LanguageContext';
import {
	FooterWrapper,
	FooterContainer,
	FooterBrand,
	FooterTitle,
	FooterText,
	FooterColumn,
	FooterHeading,
	FooterLink,
	FooterBottom,
} from '../../styles/Footer.styles';

const Footer = () => {
	const { t } = useLanguage();

	return (
		<FooterWrapper>
			<FooterContainer>
				<FooterBrand>
					<FooterTitle>{t.hero.title}</FooterTitle>
					<FooterText>{t.footer.text}</FooterText>
				</FooterBrand>

				<FooterColumn>
					<FooterHeading>{t.footer.navigation}</FooterHeading>
					<FooterLink to='/'>{t.nav.home}</FooterLink>
					<FooterLink to='/poland'>{t.nav.poland}</FooterLink>
					<FooterLink to='/england'>{t.nav.england}</FooterLink>
					<FooterLink to='/slovakia'>{t.nav.slovakia}</FooterLink>
				</FooterColumn>

				<FooterColumn>
					<FooterHeading>{t.footer.projects}</FooterHeading>
					<FooterLink
						as='a'
						href='https://peak-guide.netlify.app/'
						target='_blank'
					>
						PeakGuide
					</FooterLink>
					<FooterLink
						as='a'
						href='https://hiking-store-uk.netlify.app/'
						target='_blank'
					>
						Hiking Store UK
					</FooterLink>
					<FooterLink
						as='a'
						href='https://przemyslawpietkun.co.uk/'
						target='_blank'
					>
						Portfolio
					</FooterLink>
				</FooterColumn>

				<FooterColumn>
					<FooterHeading>{t.footer.contact}</FooterHeading>
					<FooterLink as='a' href='mailto:przemyslaw.pietkun@gmail.com'>
						{t.contact.email}
					</FooterLink>
					<FooterLink
						as='a'
						href='https://github.com/Silentmaster86'
						target='_blank'
					>
						GitHub
					</FooterLink>
					<FooterLink
						as='a'
						href='https://www.linkedin.com/in/przemyslaw-pietkun-front-end-dev'
						target='_blank'
					>
						LinkedIn
					</FooterLink>
				</FooterColumn>
			</FooterContainer>

			<FooterBottom>
				© 2026 Przemysław Pietkun. {t.footer.built}
			</FooterBottom>
		</FooterWrapper>
	);
};

export default Footer;
