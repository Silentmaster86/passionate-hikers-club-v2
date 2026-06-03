import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
	en: {
		nav: {
			home: 'Home',
			poland: 'Poland',
			england: 'England',
			slovakia: 'Slovakia',
			about: 'About',
			contact: 'Contact',
		},

		hero: {
			title: 'Passionate Hikers Club',
			text: 'Explore mountains. Discover landscapes. Create memories.',
			button: 'Explore Countries',
		},

		home: {
			exploreCountries: 'Explore Countries',
			polandTitle: 'Poland',
			polandText: 'Mountain ranges, forests and scenic peaks.',
			polandLink: 'Explore Poland',
			englandTitle: 'England & Wales',
			englandText: 'Hills, cliffs, valleys and wild landscapes.',
			englandLink: 'Explore England',
			slovakiaTitle: 'Slovakia',
			slovakiaText: 'High Tatras, rocky peaks and national parks.',
			slovakiaLink: 'Explore Slovakia',
		},

		countries: {
			poland: {
				title: 'Poland',
				text: 'Mountain ranges, forests and scenic peaks.',
				button: 'Explore Poland',
				sectionTitle: 'Mountain ranges & peaks',
			},
			england: {
				title: 'England & Wales',
				text: 'Hills, cliffs, valleys and wild landscapes.',
				button: 'Explore England & Wales',
				sectionTitle: 'Hills, cliffs & landscapes',
			},
			slovakia: {
				title: 'Slovakia',
				text: 'High Tatras, rocky peaks and national parks.',
				button: 'Explore Slovakia',
				sectionTitle: 'Mountain ranges & national parks',
			},
		},

		card: {
			type: 'Type:',
			highestPeak: 'Highest peak:',
			peak: 'Peak:',
			elevation: 'Elevation:',
		},

		types: {
			mountainRange: 'Mountain range',
			peak: 'Mountain peak',
			hill: 'Hill',
			cliffs: 'Cliffs',
			nationalPark: 'National park',
			region: 'Region',
		},

		about: {
			title: 'About project',
			intro:
				'Passionate Hikers Club was created to share mountain landscapes, hiking destinations and outdoor inspiration across Poland, England, Wales and Slovakia.',
			hikingTitle: 'Hiking',
			hikingText:
				'A personal collection of mountain places, peaks, landscapes and outdoor memories.',
			travelTitle: 'Travel',
			travelText:
				'Inspired by journeys across Poland, the UK and Slovakia, with a focus on nature and scenic views.',
			photoTitle: 'Photography',
			photoText:
				'Most visuals are based on real travel and hiking photos, giving the project a personal character.',
			devTitle: 'Web Development',
			devText:
				'Built as a modern React project to practise routing, reusable components, styled-components and multilingual UI.',
			techTitle: 'Built with',
			button: 'Explore the project',
		},

		contact: {
			title: 'Contact',
			intro:
				'Whether you have a hiking recommendation, a project idea, or just want to say hello — feel free to get in touch.',
			formTitle: 'Send a message',
			formText: 'Use the form below or choose one of the quick links.',
			name: 'Name',
			email: 'Email',
			message: 'Message',
			send: 'Send Message',
			quickLinks: 'Quick Links',
			emailText: 'Send me an email directly.',
			emailLink: 'Send Email',
			linkedInText: 'Frontend Developer Profile',
			visit: 'Visit',
			button: 'Send a message',
		},

		footer: {
			text: 'Explore. Travel. Discover.',
			navigation: 'Navigation',
			projects: 'Projects',
			contact: 'Contact',
			built: 'Built with React & Styled Components.',
		},
	},

	pl: {
		nav: {
			home: 'Strona główna',
			poland: 'Polska',
			england: 'Anglia',
			slovakia: 'Słowacja',
			about: 'O mnie',
			contact: 'Kontakt',
		},

		hero: {
			title: 'Passionate Hikers Club',
			text: 'Odkrywaj góry. Poznawaj krajobrazy. Twórz wspomnienia.',
			button: 'Zobacz kraje',
		},

		home: {
			exploreCountries: 'Odkrywaj kraje',
			polandTitle: 'Polska',
			polandText: 'Pasma górskie, lasy i malownicze szczyty.',
			polandLink: 'Zobacz Polskę',
			englandTitle: 'Anglia i Walia',
			englandText: 'Wzgórza, klify, doliny i dzikie krajobrazy.',
			englandLink: 'Zobacz Anglię i Walię',
			slovakiaTitle: 'Słowacja',
			slovakiaText: 'Tatry Wysokie, skaliste szczyty i parki narodowe.',
			slovakiaLink: 'Zobacz Słowację',
		},

		countries: {
			poland: {
				title: 'Polska',
				text: 'Pasma górskie, lasy i malownicze szczyty.',
				button: 'Zobacz Polskę',
				sectionTitle: 'Pasma górskie i szczyty',
			},
			england: {
				title: 'Anglia i Walia',
				text: 'Wzgórza, klify, doliny i dzikie krajobrazy.',
				button: 'Zobacz Anglię i Walię',
				sectionTitle: 'Wzgórza, klify i krajobrazy',
			},
			slovakia: {
				title: 'Słowacja',
				text: 'Tatry Wysokie, skaliste szczyty i parki narodowe.',
				button: 'Zobacz Słowację',
				sectionTitle: 'Pasma górskie i parki narodowe',
			},
		},

		card: {
			type: 'Rodzaj:',
			highestPeak: 'Najwyższy szczyt:',
			peak: 'Szczyt:',
			elevation: 'Wysokość:',
		},

		types: {
			mountainRange: 'Pasmo górskie',
			peak: 'Szczyt górski',
			hill: 'Wzgórze',
			cliffs: 'Klify',
			nationalPark: 'Park narodowy',
			region: 'Region',
		},

		about: {
			title: 'O projekcie',
			intro:
				'Passionate Hikers Club powstał, aby pokazać górskie krajobrazy, miejsca trekkingowe i inspiracje podróżnicze z Polski, Anglii, Walii i Słowacji.',
			hikingTitle: 'Trekking',
			hikingText:
				'Osobista kolekcja górskich miejsc, szczytów, krajobrazów i wspomnień z wędrówek.',
			travelTitle: 'Podróże',
			travelText:
				'Projekt inspirowany podróżami po Polsce, Wielkiej Brytanii i Słowacji, z naciskiem na naturę i piękne widoki.',
			photoTitle: 'Fotografia',
			photoText:
				'Większość zdjęć pochodzi z prawdziwych podróży i wędrówek, dzięki czemu projekt ma osobisty charakter.',
			devTitle: 'Web Development',
			devText:
				'Projekt zbudowany w React jako nowoczesna aplikacja do ćwiczenia routingu, komponentów wielokrotnego użytku, styled-components i interfejsu w dwóch językach.',
			techTitle: 'Technologie',
			button: 'Zobacz projekt',
		},

		contact: {
			title: 'Kontakt',
			intro:
				'Masz pomysł na projekt, polecenie ciekawego miejsca albo po prostu chcesz się przywitać? Napisz do mnie.',
			formTitle: 'Wyślij wiadomość',
			formText: 'Skorzystaj z formularza poniżej albo wybierz szybki link.',
			name: 'Imię',
			email: 'Email',
			message: 'Wiadomość',
			send: 'Wyślij wiadomość',
			quickLinks: 'Szybkie linki',
			emailText: 'Wyślij do mnie wiadomość bezpośrednio.',
			emailLink: 'Wyślij email',
			linkedInText: 'Profil Front-End Developera',
			visit: 'Otwórz',
			button: 'Wyślij wiadomość',
		},

		footer: {
			text: 'Odkrywaj. Podróżuj. Poznawaj.',
			navigation: 'Nawigacja',
			projects: 'Projekty',
			contact: 'Kontakt',
			built: 'Zbudowane w React & Styled Components.',
		},
	},
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(
		localStorage.getItem('language') || 'en',
	);

	const changeLanguage = (lang) => {
		setLanguage(lang);
		localStorage.setItem('language', lang);
	};

	const t = translations[language];

	return (
		<LanguageContext.Provider value={{ language, changeLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
