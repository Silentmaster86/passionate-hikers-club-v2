import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero/Hero';

import polandImage from '../assets/images/poland/poland-main.png';
import englandImage from '../assets/images/england/england-main.png';
import slovakiaImage from '../assets/images/slovakia/slovakia-main.png';

import {
	CountriesSection,
	SectionTitle,
	CardsGrid,
	CountryCard,
	CountryImageWrapper,
	CountryImage,
	CountryContent,
	CountryTitle,
	CountryText,
	CountryLinkText,
} from '../styles/Home.styles';

const Home = () => {
	const { t } = useLanguage();

	return (
		<>
			<Helmet>
				<title>Passionate Hikers Club</title>

				<meta
					name='description'
					content='Explore mountain ranges, peaks and hiking destinations across Poland, England, Wales and Slovakia.'
				/>
			</Helmet>

			<Hero />

			<CountriesSection id='countries'>
				<SectionTitle>{t.home.exploreCountries}</SectionTitle>

				<CardsGrid>
					<CountryCard as={Link} to='/poland'>
						<CountryImageWrapper>
							<CountryImage src={polandImage} alt='Poland mountains' />
						</CountryImageWrapper>

						<CountryContent>
							<CountryTitle>{t.home.polandTitle}</CountryTitle>
							<CountryText>{t.home.polandText}</CountryText>
							<CountryLinkText>{t.home.polandLink}</CountryLinkText>
						</CountryContent>
					</CountryCard>

					<CountryCard as={Link} to='/england'>
						<CountryImageWrapper>
							<CountryImage src={englandImage} alt='Wales mountain landscape' />
						</CountryImageWrapper>

						<CountryContent>
							<CountryTitle>{t.home.englandTitle}</CountryTitle>
							<CountryText>{t.home.englandText}</CountryText>
							<CountryLinkText>{t.home.englandLink}</CountryLinkText>
						</CountryContent>
					</CountryCard>

					<CountryCard as={Link} to='/slovakia'>
						<CountryImageWrapper>
							<CountryImage src={slovakiaImage} alt='Slovakia mountains' />
						</CountryImageWrapper>

						<CountryContent>
							<CountryTitle>{t.home.slovakiaTitle}</CountryTitle>
							<CountryText>{t.home.slovakiaText}</CountryText>
							<CountryLinkText>{t.home.slovakiaLink}</CountryLinkText>
						</CountryContent>
					</CountryCard>
				</CardsGrid>
			</CountriesSection>
		</>
	);
};

export default Home;
