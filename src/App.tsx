import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import Landing from './components/Landing';
import LineGradient from './components/LineGradient';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	const [selectedPage, setSelectedPage] = useState('home');
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	const changeSelectedPage = (page: string) => {
		setSelectedPage(page);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage('home');
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='app bg-deep-blue'>
			<Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<div className='w-5/6 mx-auto md:h-full'>
				{isAboveMediumScreens && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
				<motion.div viewport={{ amount: 'all' }} onViewportEnter={() => changeSelectedPage('home')}>
					<Landing setSelectedPage={setSelectedPage} />
				</motion.div>
			</div>
			<LineGradient width='w-full' />
			<div className='w-5/6 mx-auto md:h-full'>
				<motion.div viewport={{ amount: 'all' }} onViewportEnter={() => changeSelectedPage('skills')}>
					<MySkills />
				</motion.div>
			</div>
			<LineGradient width='w-full' />
			<div className='w=5/6 mx-auto'>
				<motion.div viewport={{ amount: 'some' }} onViewportEnter={() => changeSelectedPage('projects')}>
					<Projects />
				</motion.div>
			</div>
			<LineGradient width='w-full' />
			<div className='w=5/6 mx-auto md:h-full'>
				<motion.div viewport={{ amount: 0.8 }} onViewportEnter={() => changeSelectedPage('testimonials')}>
					<Testimonials />
				</motion.div>
			</div>
			<LineGradient width='w-full' />
			<div className='w-5/6 mx-auto md:h-full'>
				<motion.div viewport={{ amount: 0.8 }} onViewportEnter={() => changeSelectedPage('contact')}>
					<Contact />
				</motion.div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
