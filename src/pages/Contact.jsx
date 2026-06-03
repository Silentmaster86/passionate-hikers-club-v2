import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
	ContactWrapper,
	ContactPageHero,
	ContactOverlay,
	ContactHeroContent,
	ContactContent,
	ContactTitle,
	ContactText,
	ContactFormSection,
	ContactForm,
	FormHeader,
	FormTitle,
	FormText,
	FormGroup,
	FormLabel,
	FormInput,
	FormTextarea,
	SubmitButton,
	QuickLinksSection,
	QuickLinksTitle,
	ContactGrid,
	ContactCard,
	ContactIcon,
	ContactCardTitle,
	ContactCardText,
	ContactLink,
	ContactButton,
} from '../styles/Contact.styles';

import contactBackground from '../assets/images/contact/contact.png';

const Contact = () => {
	const { t } = useLanguage();

	const scrollToContactContent = () => {
		document
			.getElementById('contact-content')
			?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<>
			<Helmet>
				<title>Contact | Passionate Hikers Club</title>

				<meta
					name='description'
					content='Get in touch with Passionate Hikers Club.'
				/>
			</Helmet>

			<ContactWrapper>
				<ContactPageHero $image={contactBackground}>
					<ContactOverlay />

					<ContactHeroContent>
						<ContactTitle>{t.contact.title}</ContactTitle>
						<ContactText>{t.contact.intro}</ContactText>
						<ContactButton onClick={scrollToContactContent}>
							{t.contact.button}
						</ContactButton>
					</ContactHeroContent>
				</ContactPageHero>

				<ContactContent id='contact-content'>
					<ContactFormSection>
						<ContactForm action='/forms/contact.php' method='POST'>
							<FormHeader>
								<FormTitle>{t.contact.formTitle}</FormTitle>
								<FormText>{t.contact.formText}</FormText>
							</FormHeader>

							<FormGroup>
								<FormLabel htmlFor='name'>{t.contact.name}</FormLabel>
								<FormInput type='text' id='name' name='name' required />
							</FormGroup>

							<FormGroup>
								<FormLabel htmlFor='email'>{t.contact.email}</FormLabel>
								<FormInput type='email' id='email' name='email' required />
							</FormGroup>

							<FormGroup>
								<FormLabel htmlFor='message'>{t.contact.message}</FormLabel>
								<FormTextarea id='message' name='message' rows='7' required />
							</FormGroup>

							<SubmitButton type='submit'>{t.contact.send}</SubmitButton>
						</ContactForm>
					</ContactFormSection>

					<QuickLinksSection>
						<QuickLinksTitle>{t.contact.quickLinks}</QuickLinksTitle>

						<ContactGrid>
							<ContactCard
								as={motion.article}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<ContactIcon>📧</ContactIcon>
								<ContactCardTitle>{t.contact.email}</ContactCardTitle>
								<ContactCardText>{t.contact.emailText}</ContactCardText>
								<ContactLink href='mailto:przemyslaw.pietkun@gmail.com'>
									{t.contact.emailLink}
								</ContactLink>
							</ContactCard>

							<ContactCard
								as={motion.article}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<ContactIcon>💻</ContactIcon>
								<ContactCardTitle>GitHub</ContactCardTitle>
								<ContactCardText>github.com/Silentmaster86</ContactCardText>
								<ContactLink
									href='https://github.com/Silentmaster86'
									target='_blank'
									rel='noreferrer'
								>
									{t.contact.visit}
								</ContactLink>
							</ContactCard>

							<ContactCard
								as={motion.article}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<ContactIcon>💼</ContactIcon>
								<ContactCardTitle>LinkedIn</ContactCardTitle>
								<ContactCardText>{t.contact.linkedInText}</ContactCardText>
								<ContactLink
									href='https://www.linkedin.com/in/przemyslaw-pietkun-front-end-dev'
									target='_blank'
									rel='noreferrer'
								>
									{t.contact.visit}
								</ContactLink>
							</ContactCard>

							<ContactCard
								as={motion.article}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<ContactIcon>🌐</ContactIcon>
								<ContactCardTitle>Portfolio</ContactCardTitle>
								<ContactCardText>przemyslawpietkun.co.uk</ContactCardText>
								<ContactLink
									href='https://przemyslawpietkun.co.uk/'
									target='_blank'
									rel='noreferrer'
								>
									{t.contact.visit}
								</ContactLink>
							</ContactCard>
						</ContactGrid>
					</QuickLinksSection>
				</ContactContent>
			</ContactWrapper>
		</>
	);
};

export default Contact;
