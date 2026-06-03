import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
	AboutWrapper,
	AboutPageHero,
	AboutOverlay,
	AboutHeroContent,
	AboutTitle,
	AboutText,
	AboutGrid,
	AboutCard,
	AboutButton,
	CardIcon,
	CardTitle,
	CardText,
	TechSection,
	TechList,
	TechItem,
	AboutContent,
} from '../styles/About.styles';

import aboutBackground from '../assets/images/about/about.png';

const About = () => {
	const { t } = useLanguage();

	const scrollToAboutContent = () => {
		document
			.getElementById('about-content')
			?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<>
			<Helmet>
				<title>About | Passionate Hikers Club</title>

				<meta
					name='description'
					content='Learn more about Passionate Hikers Club, hiking, photography and web development.'
				/>
			</Helmet>

			<AboutWrapper>
				<AboutPageHero $image={aboutBackground}>
					<AboutOverlay />

					<AboutHeroContent>
						<AboutTitle>{t.about.title}</AboutTitle>
						<AboutText>{t.about.intro}</AboutText>
						<AboutButton onClick={scrollToAboutContent}>{t.about.button}</AboutButton>
					</AboutHeroContent>
				</AboutPageHero>

				<AboutContent id='about-content'>
					<AboutGrid>
						<AboutCard 
							as={motion.article}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<CardIcon>🏔️</CardIcon>
							<CardTitle>{t.about.hikingTitle}</CardTitle>
							<CardText>{t.about.hikingText}</CardText>
						</AboutCard>

						<AboutCard
							as={motion.article}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<CardIcon>🌍</CardIcon>
							<CardTitle>{t.about.travelTitle}</CardTitle>
							<CardText>{t.about.travelText}</CardText>
						</AboutCard>

						<AboutCard
							as={motion.article}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<CardIcon>📷</CardIcon>
							<CardTitle>{t.about.photoTitle}</CardTitle>
							<CardText>{t.about.photoText}</CardText>
						</AboutCard>

						<AboutCard
							as={motion.article}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<CardIcon>💻</CardIcon>
							<CardTitle>{t.about.devTitle}</CardTitle>
							<CardText>{t.about.devText}</CardText>
						</AboutCard>
					</AboutGrid>

					<TechSection>
						<CardTitle>{t.about.techTitle}</CardTitle>

						<TechList>
							<TechItem>React</TechItem>
							<TechItem>React Router</TechItem>
							<TechItem>Styled Components</TechItem>
							<TechItem>Vite</TechItem>
						</TechList>
					</TechSection>
				</AboutContent>
			</AboutWrapper>
		</>
	);
};

export default About;
