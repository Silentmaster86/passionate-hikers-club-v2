import styled from 'styled-components';

export const ContactWrapper = styled.main`
	width: 100%;
`;

export const ContactPageHero = styled.section`
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

export const ContactOverlay = styled.div`
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
`;

export const ContactHeroContent = styled.div`
	position: relative;
	z-index: 1;
	text-align: center;
	padding: 0 1.5rem;
`;

export const ContactContent = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 4rem 1.5rem 5rem;
	scroll-margin-top: 80px;
`;

export const ContactHero = styled.section`
	text-align: center;
	margin-bottom: 1.4rem;
`;

export const ContactTitle = styled.h1`
	font-size: clamp(2rem, 5vw, 3.5rem);
	margin-bottom: 0.8rem;
`;

export const ContactText = styled.p`
	max-width: 600px;
	margin: 0 auto;
	color: #cbd5e1;
	font-size: clamp(1rem, 2.5vw, 1.2rem);
	line-height: 1.8;
`;

export const ContactFormSection = styled.section`
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
`;

export const ContactForm = styled.form`
	width: min(100%, 720px);
	background: linear-gradient(180deg, #111827 0%, #0f172a 100%);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 1.6rem;
	padding: 1.6rem;
	box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);

	@media (max-width: 600px) {
		padding: 1.5rem;
	}
`;

export const FormHeader = styled.div`
	text-align: center;
	margin-bottom: 2rem;
`;

export const FormTitle = styled.h2`
	font-size: clamp(1.8rem, 4vw, 2.4rem);
	margin-bottom: 0.7rem;
`;

export const FormText = styled.p`
	color: #94a3b8;
	line-height: 1.7;
`;

export const FormGroup = styled.div`
	margin-bottom: 1.4rem;
`;

export const FormLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	color: #cbd5e1;
	font-weight: 700;
`;

export const FormInput = styled.input`
	width: 100%;
	padding: 1rem 1.1rem;
	border-radius: 0.9rem;
	border: 1px solid rgba(255, 255, 255, 0.12);
	background: #020617;
	color: #f8fafc;
	outline: none;
	transition: 0.25s ease;

	&:focus {
		border-color: #facc15;
		box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.15);
	}
`;

export const FormTextarea = styled.textarea`
	width: 100%;
	padding: 1rem 1.1rem;
	border-radius: 0.9rem;
	border: 1px solid rgba(255, 255, 255, 0.12);
	background: #020617;
	color: #f8fafc;
	outline: none;
	resize: vertical;
	transition: 0.25s ease;

	&:focus {
		border-color: #facc15;
		box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.15);
	}
`;

export const SubmitButton = styled.button`
	width: 100%;
	border: none;
	padding: 1rem 1.6rem;
	border-radius: 999px;
	background: #facc15;
	color: #111827;
	font-weight: 900;
	cursor: pointer;
	transition: 0.3s ease;
	margin-top: 0.5rem;

	&:hover {
		transform: translateY(-3px);
		background: #fde047;
	}
`;

export const QuickLinksSection = styled.section`
	text-align: center;
`;

export const QuickLinksTitle = styled.h2`
	font-size: clamp(2rem, 3vw, 2.5rem);
	margin-bottom: 1.5rem;
`;

export const ContactGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

export const ContactCard = styled.article`
	background: #111827;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 1.4rem;
	padding: 1.4rem 2.4rem;
	text-align: center;
	box-shadow: 0 18px 36px rgba(0, 0, 0, 0.28);
	transition: 0.3s ease;

	&:hover {
		transform: translateY(-8px);
		border-color: rgba(250, 204, 21, 0.55);
	}
`;

export const ContactIcon = styled.div`
	font-size: 2.4rem;
	margin-bottom: 1rem;
`;

export const ContactCardTitle = styled.h3`
	margin-bottom: 0.6rem;
`;

export const ContactCardText = styled.p`
	color: #94a3b8;
	font-size: 0.95rem;
	line-height: 1.5;
	margin-bottom: 1rem;
	word-break: break-word;
`;

export const ContactLink = styled.a`
	color: #facc15;
	font-weight: 800;

	&:hover {
		text-decoration: underline;
	}
`;

export const ContactButton = styled.button`
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