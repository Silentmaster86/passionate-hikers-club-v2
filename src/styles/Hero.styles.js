import styled from 'styled-components';

export const HeroSection = styled.section`
	height: 90vh;
	background-image: ${({ $image }) => `url(${$image})`};
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const Overlay = styled.div`
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.45);
`;

export const HeroContent = styled.div`
	position: relative;
	z-index: 1;
	text-align: center;
	color: white;
	padding: 0 1rem;
`;

export const HeroTitle = styled.h1`
	font-size: clamp(2.5rem, 6vw, 4rem);
	margin-bottom: 1rem;
`;

export const HeroText = styled.p`
	font-size: clamp(1rem, 2.5vw, 1.4rem);
	margin-bottom: 1rem;
`;

export const HeroButton = styled.button`
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
		background: #14442a;
		color: #dedede;
	}
`;