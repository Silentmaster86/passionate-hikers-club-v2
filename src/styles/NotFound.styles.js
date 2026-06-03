import styled from 'styled-components';

export const NotFoundWrapper = styled.main`
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 4rem 1.5rem;
`;

export const NotFoundCode = styled.h1`
	font-size: clamp(5rem, 14vw, 10rem);
	color: #facc15;
	line-height: 1;
	margin-bottom: 1rem;
`;

export const NotFoundTitle = styled.h2`
	font-size: clamp(2rem, 5vw, 3.5rem);
	margin-bottom: 1rem;
`;

export const NotFoundText = styled.p`
	max-width: 520px;
	color: #cbd5e1;
	font-size: 1.1rem;
	line-height: 1.7;
	margin-bottom: 2rem;
`;

export const NotFoundButton = styled.a`
	display: inline-block;
	border: none;
	padding: 0.9rem 1.6rem;
	border-radius: 999px;
	background: #facc15;
	color: #111827;
	font-weight: 900;
	transition: 0.3s ease;

	&:hover {
		transform: translateY(-3px);
		background: #fde047;
	}
`;
