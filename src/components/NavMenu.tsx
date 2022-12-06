import AnchorLink from 'react-anchor-link-smooth-scroll';

type LinkProps = {
	page: string;
} & NavMenuProps;

type NavMenuProps = {
	selectedPage: string;
	setSelectedPage: (active: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
	const lowerCasePage = page.toLowerCase();

	const setPageSelected = (page: string) => {
		setSelectedPage(page);
	};

	return (
		<AnchorLink
			className={`${selectedPage === lowerCasePage ? 'text-yellow' : 'text-white'} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setPageSelected(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

const NavMenu = ({ selectedPage, setSelectedPage }: NavMenuProps) => {
	return (
		<>
			<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
				<Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</div>
			<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
				<Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</div>
			<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
				<Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</div>
			<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
				<Link page='Testimonials' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</div>
			<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
				<Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</div>
		</>
	);
};

export default NavMenu;
