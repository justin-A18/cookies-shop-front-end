'use client';

import { NavTabsAuthenticated } from './NavTabsAuthenticated';
import { LinksAuth } from './LinksAuth';
import { NavLinks } from './NavLinks';
import { NavLogo } from './NavLogo';
import { useState } from 'react';

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<header
			className='w-full min-h-14 max-w-7xl mx-auto px-4 py-3 sticky 
		top-0 bg-white z-20'>
			<nav className='w-full flex justify-between items-center'>
				<NavLogo toggle={toggle} />
				<NavLinks
					isOpen={isOpen}
					closeMenu={toggle}
				/>

				{/*<NavTabsAuthenticated />*/}

				<LinksAuth />
			</nav>
		</header>
	);
};
