import slovakiaImage from '../assets/images/slovakia/slovakia-main.jpg';
import highTatrasImage from '../assets/images/slovakia/high-tatras.jpg';
import belianskeTatrasImage from '../assets/images/slovakia/belianske-tatras.jpg';
import slovakParadiseImage from '../assets/images/slovakia/slovak-paradise.jpg';

export const slovakiaData = [
	{
		id: 1,
		title: 'Beskid Żywiecko-Orawski',
		type: 'mountainRange',
		peak: 'Pilsko',
		elevation: '1557 m',
		image: slovakiaImage,
	},
	{
		id: 2,
		title: 'Tatry Bielskie',
		type: 'mountainRange',
		peak: 'Havran',
		elevation: '2152 m',
		image: belianskeTatrasImage,
	},
	{
		id: 3,
		title: 'Slovak Paradise - Cingov',
		type: 'nationalPark',
		peak: 'Sovia skala',
		elevation: '564 m',
		image: slovakParadiseImage,
	},
	{
		id: 4,
		title: 'Tatry',
		type: 'mountainRange',
		peak: 'Rysy',
		elevation: '2503 m',
		image: highTatrasImage,
	},
];
