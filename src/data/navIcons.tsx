interface NavIconType {
	name: string;
	url: string;
	title: string;
}

export const navIcons: NavIconType[] = [
	{
		name: 'commissions',
		url: '/public/commissions.png',
		title: 'Commission',
	},
	{
		name: 'palette',
		url: '/public/palette.png',
		title: 'Palette'
	},
	{
		name: 'vtuber',
		url: '/public/vtuber.png',
		title: 'Vtuber'
	},
	{
		name: 'portfolio',
		url: '/public/bunny.png',
		title: 'Portfolio'
	}
];

export default navIcons;
