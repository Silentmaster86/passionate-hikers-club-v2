import { Helmet } from 'react-helmet-async';
import { slovakiaData } from '../data/slovakia';
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

import slovakiaHero from '../assets/images/slovakia/slovakia-main.png';

const Slovakia = () => {
	const { t } = useLanguage();

	const scrollToCards = () => {
		document
			.getElementById('country-cards')
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<Helmet>
				<title>Slovakia | Passionate Hikers Club</title>
				<meta
					name='description'
					content='Explore the beautiful mountains and landscapes of Slovakia.'
				/>
			</Helmet>

			<PageWrapper>
				<PageHero $image={slovakiaHero}>
					<PageOverlay />

					<PageHeroContent>
						<PageTitle>{t.countries.slovakia.title}</PageTitle>
						<PageText>{t.countries.slovakia.text}</PageText>
						<PageButton onClick={scrollToCards}>
							{t.countries.slovakia.button}
						</PageButton>
					</PageHeroContent>
				</PageHero>

				<CardsSection id='country-cards'>
					<CardsGrid>
						{slovakiaData.map((item) => (
							<MountainCard key={item.id} item={item} />
						))}
					</CardsGrid>
				</CardsSection>
			</PageWrapper>
		</>
	);
};

export default Slovakia;
