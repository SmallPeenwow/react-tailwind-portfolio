import githubIcon from '../assets/github.svg';
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';

const SocialMediaIcons = () => {
	return (
		<div className='flex justify-center md:justify-start my-10 gap-7'>
			<a className='hover:opacity-50 transition duration-500 w-[30px]' href='https://github.com/SmallPeenwow' target='_blank' rel='noreferrer'>
				<img alt='github-link' src={githubIcon} />
			</a>
			<a className='hover:opacity-50 transition duration-500 w-[30px]' href='https://twitter.com/SmallPeen_' target='_blank' rel='noreferrer'>
				<img alt='twitter-link' src={twitterIcon} />
			</a>
			<a className='hover:opacity-50 transition duration-500 w-[30px]' href='https://www.facebook.com' target='_blank' rel='noreferrer'>
				<img alt='facebook-link' src={facebookIcon} />
			</a>
			<a
				className='hover:opacity-50 transition duration-500 w-[30px]'
				href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
				target='_blank'
				rel='noreferrer'
			>
				<img alt='instagram-link' src={instagramIcon} />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
