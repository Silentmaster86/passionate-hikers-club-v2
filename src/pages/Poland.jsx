import { Helmet } from 'react-helmet-async';
import { polandData } from '../data/poland';
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

import polandHero from '../assets/images/poland/poland-main.png';

const Poland = () => {
	const { t } = useLanguage();

	const scrollToCards = () => {
		document
			.getElementById('country-cards')
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<Helmet>
				<title>Poland Mountains | Passionate Hikers Club</title>

				<meta
					name='description'
					content='Discover mountain ranges and peaks across Poland including the Tatras, Beskids, Pieniny and Bieszczady.'
				/>
			</Helmet>

			<PageWrapper>
				<PageHero $image={polandHero}>
					<PageOverlay />

					<PageHeroContent>
						<PageTitle>{t.countries.poland.title}</PageTitle>
						<PageText>{t.countries.poland.text}</PageText>
						<PageButton onClick={scrollToCards}>{t.countries.poland.button}</PageButton>
					</PageHeroContent>
				</PageHero>

				<CardsSection id='country-cards'>
					<CardsGrid>
						{polandData.map((item) => (
							<MountainCard key={item.id} item={item} />
						))}
					</CardsGrid>
				</CardsSection>
			</PageWrapper>
		</>
	);
};

export default Poland;
