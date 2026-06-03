import styled from 'styled-components';

export const PageWrapper = styled.div`
	width: 100%;
`;

export const PageHero = styled.section`
	min-height: 90vh;
	background-image: ${({ $image }) => `url(${$image})`};
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PageOverlay = styled.div`
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.55);
`;

export const PageHeroContent = styled.div`
	position: relative;
	z-index: 1;
	text-align: center;
	padding: 0 1.5rem;
`;

export const PageTitle = styled.h1`
	font-size: clamp(2.8rem, 7vw, 5rem);
	margin-bottom: 1rem;
`;

export const PageText = styled.p`
	color: #cbd5e1;
	font-size: clamp(1rem, 2.5vw, 1.35rem);
	max-width: 700px;
	line-height: 1.7;
`;

export const CardsSection = styled.section`
	max-width: 1400px;
	margin: 5rem auto 8rem;
	padding: 0 1.5rem;
	scroll-margin-top: 120px;
`;

export const SectionTitle = styled.h2`
	font-size: clamp(2rem, 4vw, 3rem);
	margin-bottom: 1.5rem;
	text-align: center;
`;

export const CardsGrid = styled.div`
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

export const PageButton = styled.button`
    margin-top: 2rem;
    border: none;
    padding: 0.9rem 1.6rem;
    border-radius: 999px;
    background: #facc15;
    color: #111827;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        background: #fde047;
    }
`;