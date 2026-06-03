import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero/hero-home.png';
import { useLanguage } from '../../context/LanguageContext';
import {
	HeroSection,
	Overlay,
	HeroContent,
	HeroTitle,
	HeroText,
	HeroButton,
} from '../../styles/Hero.styles';

const Hero = () => {
	const { t } = useLanguage();

	const scrollToCountries = () => {
		document.getElementById('countries').scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<HeroSection $image={heroImage}>
			<Overlay />

			<HeroContent
				as={motion.div}
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<HeroTitle>{t.hero.title}</HeroTitle>
				<HeroText>{t.hero.text}</HeroText>
				<HeroButton onClick={scrollToCountries}>{t.hero.button}</HeroButton>
			</HeroContent>
		</HeroSection>
	);
};

export default Hero;
