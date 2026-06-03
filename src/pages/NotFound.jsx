import { Link } from 'react-router-dom';
import {
	NotFoundWrapper,
	NotFoundCode,
	NotFoundTitle,
	NotFoundText,
	NotFoundButton,
} from '../styles/NotFound.styles';

const NotFound = () => {
	return (
		<NotFoundWrapper>
			<NotFoundCode>404</NotFoundCode>
			<NotFoundTitle>Page not found</NotFoundTitle>
			<NotFoundText>
				The trail you are looking for does not exist or has been moved.
			</NotFoundText>

			<NotFoundButton as={Link} to='/'>
				Back Home
			</NotFoundButton>
		</NotFoundWrapper>
	);
};

export default NotFound;
