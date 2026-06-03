import styled from 'styled-components';

export const AboutWrapper = styled.main`
	width: 100%;
`;

export const AboutContent = styled.section`
	max-width: 1400px;
	margin: 0 auto;
	padding: 4rem 1.5rem 5rem;
	scroll-margin-top: 80px;
`;

export const AboutPageHero = styled.section`
	min-height: 90vh;
	background-image: ${({ $image }) => `url(${$image})`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const AboutOverlay = styled.div`
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
`;

export const AboutHeroContent = styled.div`
	position: relative;
	z-index: 1;
	text-align: center;
	padding: 0 1.5rem;
`;

export const AboutHero = styled.section`
	text-align: center;
	margin-bottom: 2rem;
`;

export const AboutTitle = styled.h1`
	font-size: clamp(2.8rem, 7vw, 4rem);
	margin-bottom: 1.5rem;
`;

export const AboutText = styled.p`
	max-width: 820px;
	margin: 0 auto;
	color: #cbd5e1;
	font-size: clamp(1rem, 2.5vw, 1.25rem);
	line-height: 1.8;
`;

export const AboutGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;

	@media (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
	}
`;

export const AboutCard = styled.article`
	background: #111827;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 1.4rem;
	padding: 2rem;
	box-shadow: 0 18px 36px rgba(0, 0, 0, 0.28);
	transition: 0.3s ease;

	&:hover {
		transform: translateY(-8px);
		border-color: rgba(250, 204, 21, 0.55);
	}
`;

export const CardIcon = styled.div`
	font-size: 2.4rem;
	margin-bottom: 1rem;
`;

export const CardTitle = styled.h2`
	color: #f8fafc;
	margin-bottom: 1rem;
`;

export const CardText = styled.p`
	color: #cbd5e1;
	line-height: 1.7;
`;

export const TechSection = styled.section`
	margin-top: 2rem;
	background: #020617;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 1.4rem;
	padding: 2rem;
	text-align: center;
`;

export const TechList = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
	margin-top: 1.5rem;
`;

export const TechItem = styled.span`
	background: rgba(250, 204, 21, 0.12);
	color: #facc15;
	border: 1px solid rgba(250, 204, 21, 0.4);
	padding: 0.7rem 1rem;
	border-radius: 999px;
	font-weight: 700;
`;

export const AboutButton = styled.button`
	margin-top: 2rem;
	border: none;
	padding: 0.9rem 1.6rem;
	border-radius: 999px;
	background: #facc15;
	color: #111827;
	font-weight: 800;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-3px);
		background: #fde047;
	}
`;