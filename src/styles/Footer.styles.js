import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
	background: #020617;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
	margin-top: 0;
`;

export const FooterContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 2rem;
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr;
	gap: 2rem;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

export const FooterBrand = styled.div``;

export const FooterTitle = styled.h2`
	color: #f8fafc;
	margin-bottom: 1rem;
`;

export const FooterText = styled.p`
	color: #94a3b8;
`;

export const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
`;

export const FooterHeading = styled.h3`
	color: #facc15;
	margin-bottom: 0.5rem;
`;

export const FooterLink = styled(Link)`
	color: #cbd5e1;
	transition: 0.25s ease;

	&:hover {
		color: #facc15;
	}
`;

export const FooterBottom = styled.div`
	text-align: center;
	padding: 1.2rem 1rem 1rem;
	color: #94a3b8;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
`;
