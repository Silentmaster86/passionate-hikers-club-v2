import walesImage from '../assets/images/england/snowdon.jpg';
import boxHillImage from '../assets/images/england/box-hill.jpg';
import leithHillImage from '../assets/images/england/leith-hill.jpg';
import sevenSistersImage from '../assets/images/england/seven-sisters.jpg';

export const englandData = [
	{
		id: 1,
		title: 'Snowdon / Yr Wyddfa',
		type: 'peak',
		peak: 'Snowdon / Yr Wyddfa',
		elevation: '1085 m',
		image: walesImage,
	},
	{
		id: 2,
		title: 'Box Hill',
		type: 'hill',
		peak: 'Box Hill',
		elevation: '224 m',
		image: boxHillImage,
	},
	{
		id: 3,
		title: 'Leith Hill',
		type: 'hill',
		peak: 'Leith Hill',
		elevation: '294 m',
		image: leithHillImage,
	},
	{
		id: 4,
		title: 'Seven Sisters',
		type: 'cliffs',
		peak: 'Coastal cliffs',
		elevation: 'Approx. 77 m',
		image: sevenSistersImage,
	},
];
