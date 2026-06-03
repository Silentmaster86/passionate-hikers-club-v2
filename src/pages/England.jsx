import { Helmet } from 'react-helmet-async';
import { englandData } from '../data/england';
import { useLanguage } from '../context/LanguageContext';
import MountainCard from '../components/MountainCard/MountainCard';
import {
	PageWrapper,
	PageHero,
	PageOverlay,
	PageHeroContent,
	PageTitle,
	PageText,
	PageButton,
	CardsSection,
	CardsGrid,
} from '../styles/Poland.styles';

import englandHero from '../assets/images/england/uk-main.jpg';

const England = () => {
	const { t } = useLanguage();

	const scrollToCards = () => {
		document
			.getElementById('country-cards')
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<Helmet>
				<title>England & Wales | Passionate Hikers Club</title>

				<meta
					name='description'
					content='Explore hills, cliffs and landscapes including Snowdon, Box Hill, Leith Hill and Seven Sisters.'
				/>
			</Helmet>
			<PageWrapper>
				<PageHero $image={englandHero}>
					<PageOverlay />

					<PageHeroContent>
						<PageTitle>{t.countries.england.title}</PageTitle>
						<PageText>{t.countries.england.text}</PageText>
						<PageButton onClick={scrollToCards}>{t.countries.england.button}</PageButton>
					</PageHeroContent>
				</PageHero>

				<CardsSection id='country-cards'>
					<CardsGrid>
						{englandData.map((item) => (
							<MountainCard key={item.id} item={item} />
						))}
					</CardsGrid>
				</CardsSection>
			</PageWrapper>
		</>
	);
};

export default England;
