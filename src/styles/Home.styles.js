import styled from 'styled-components';

export const CountriesSection = styled.section`
	max-width: 1200px;
	margin: 2rem auto 2rem;
	padding: 0 2rem;
	scroll-margin-top: 100px;
`;

export const SectionTitle = styled.h2`
	text-align: center;
	margin: 0.4rem 0 2.5rem 0;
	font-size: clamp(2rem, 4vw, 3rem);
`;

export const CardsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

export const CountryCard = styled.article`
	background: #111827;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 1.4rem;
	overflow: hidden;
	color: white;
	box-shadow: 0 20px 40px rgba(97, 97, 97, 0.25);
	transition: 0.3s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-8px);
		border-color: rgba(21, 250, 97, 0.38);
	}
`;

export const CountryImageWrapper = styled.div`
	height: 240px;
	overflow: hidden;
`;

export const CountryImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: 0.4s ease;

	${CountryCard}:hover & {
		transform: scale(1.08);
	}
`;

export const CountryContent = styled.div`
	padding: 1.4rem;
`;

export const CountryTitle = styled.h3`
	font-size: 1.6rem;
	margin-bottom: 0.7rem;
`;

export const CountryText = styled.p`
	color: #cbd5e1;
	line-height: 1.6;
	margin-bottom: 1.2rem;
`;

export const CountryLinkText = styled.span`
	color: #facc15;
	font-weight: 700;
`;
