import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profileImage from '../assets/profile-image.png';
import SocialMediaIcons from './SocialMediaIcons';

type LandingProps = {
	setSelectedPage: (active: string) => void;
};

const Landing = ({ setSelectedPage }: LandingProps) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	const setPageSelected = (page: string) => {
		setSelectedPage(page);
	};

	return (
		<section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
			{/* Image Section */}
			<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
				{isAboveMediumScreens ? (
					<div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]'>
						<img
							alt='profile'
							className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
							src={profileImage}
						/>
					</div>
				) : (
					<div>
						<img
							alt='profile'
							className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
							src={profileImage}
						/>
					</div>
				)}
			</div>

			{/* Main Section */}
			<div className='z-30 basis-2/5 mt-12 md:mt-32'>
				{/* Heading */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
				>
					<p className='text-6xl font-playfair z-10 text-center md:text-start'>
						Camryn {''}
						<span className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[35px] before:-top-[120px] before:z-[-1] before:scale-y-75'>
							Bowden
						</span>
					</p>
					<p className='mt-10 mb-7 text-sm text-center md:text-start'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste consectetur corporis accusamus culpa eligendi sequi aliquam
						accusantium ut blanditiis?
					</p>
				</motion.div>

				{/* Call To Actions */}
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
				>
					<AnchorLink
						className='bg-red text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500'
						onClick={() => setPageSelected('contact')}
						href='#contact'
					>
						Contact Me
					</AnchorLink>
					<AnchorLink className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5' onClick={() => setPageSelected('contact')} href='#contact'>
						<div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'>
							Let's talk.
						</div>
					</AnchorLink>
				</motion.div>

				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
				>
					<SocialMediaIcons />
				</motion.div>
			</div>
		</section>
	);
};

export default Landing;
