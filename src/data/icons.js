// This file store all icons used in this website

const icons = {
	socialMediaIcons: [
		{
			title: 'facebook',
			image: process.env.PUBLIC_URL + '/assets/icons/facebook_logo.svg',
			link: 'https://www.facebook.com/IMTAtlantique'
		},
		{
			title: 'youtube',
			image: process.env.PUBLIC_URL + '/assets/icons/youtube_logo.svg',
			link: 'https://www.youtube.com/c/IMTAtlantique/videos'
		},
		{
			title: 'linkedin',
			image: process.env.PUBLIC_URL + '/assets/icons/linkedin_logo.svg',
			link: 'https://www.linkedin.com/school/imt-atlantique/'
		}
	],
	logo: process.env.PUBLIC_URL + '/assets/icons/logo.svg',
	arrowDown: process.env.PUBLIC_URL + '/assets/icons/arrow_down.svg'
};

export default icons;
