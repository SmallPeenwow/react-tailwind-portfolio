import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';
import NavMenu from './NavMenu';

type NavbarProps = {
	selectedPage: string;
	isTopOfPage: boolean;
	setSelectedPage: (active: string) => void;
};

// type LinkProps = {
// 	page: string;
// 	selectedPage: string;
// 	setSelectedPage: (active: string) => void;
// };

// const setPageSelected = (page: string) => {
// 	setPageSelected(page);
// };

// const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
// 	const lowerCasePage = page.toLowerCase();

// 	return (
// 		<AnchorLink
// 			className={`${selectedPage === lowerCasePage ? 'text-yellow' : 'text-white'} hover:text-yellow transition duration-500`}
// 			href={`#${lowerCasePage}`}
// 			onClick={() => setPageSelected(lowerCasePage)}
// 		>
// 			{page}
// 		</AnchorLink>
// 	);
// };

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: NavbarProps) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
	const navbarBackground = isTopOfPage ? '' : 'bg-red';

	const toggleClick = () => {
		setIsMenuToggled(!isMenuToggled);
	};

	return (
		<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				<h4 className='font-playfair text-3xl font-bold'>SP</h4>

				{/* DESKTOP NAV */}
				{isAboveSmallScreens ? (
					<NavMenu selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
				) : (
					<button className='rounded-full bg-red p-2' onClick={toggleClick}>
						<img alt='menu-icon' src={menuIcon} />
					</button>
				)}

				{/* MOBILE MENU POPUP */}
				{!isAboveSmallScreens && isMenuToggled && (
					<div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
						<div className='flex justify-end p-12'>
							<button onClick={toggleClick}>
								<img alt='menu-icon' src={closeIcon} />
							</button>
						</div>

						{/* Menu Items */}
						<div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
							<NavMenu selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
