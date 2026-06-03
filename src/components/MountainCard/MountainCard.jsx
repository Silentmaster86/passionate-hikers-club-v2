import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {
	Card,
	ImageWrapper,
	CardImage,
	CardContent,
	CardTitle,
	InfoList,
	InfoItem,
	Label,
	Value,
} from '../../styles/MountainCard.styles';

const MountainCard = ({ item }) => {
	const { t } = useLanguage();

	return (
		<Card
			as={motion.div}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
		>
			<ImageWrapper>
				<CardImage src={item.image} alt={item.title} />
			</ImageWrapper>

			<CardContent>
				<CardTitle>{item.title}</CardTitle>

				<InfoList>
					<InfoItem>
						<Label>{t.card.type}</Label>
						<Value>{t.types[item.type]}</Value>
					</InfoItem>

					<InfoItem>
						<Label>
							{item.type === 'peak' ? t.card.peak : t.card.highestPeak}
						</Label>
						<Value>{item.peak}</Value>
					</InfoItem>

					<InfoItem>
						<Label>{t.card.elevation}</Label>
						<Value>{item.elevation}</Value>
					</InfoItem>
				</InfoList>
			</CardContent>
		</Card>
	);
};

export default MountainCard;
