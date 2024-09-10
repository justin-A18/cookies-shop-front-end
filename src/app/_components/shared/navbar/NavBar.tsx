'use client';

import { NavTabsAuthenticated, NavLinks, NavLogo, LinksAuth } from './';
import { authStore } from '@/app/_providers/store/auth';
import { useEffect, useState } from 'react';

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user } = authStore();

	const [username, setUsername] = useState('');

	useEffect(() => {
		if (typeof window !== 'undefined' && user) {
			setUsername(user.username ?? '');
		}
	}, [user]);

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

				{typeof window !== 'undefined' && user ? (
					<NavTabsAuthenticated username={username} />
				) : (
					<LinksAuth />
				)}
			</nav>
		</header>
	);
};
