import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TanStackProvider from './_providers/TanStackProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: 'Cookies',
	description: 'Cookies shop',
	icons: {
		icon: '/favicon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				suppressHydrationWarning
				className={inter.variable}>
				<TanStackProvider>{children}</TanStackProvider>
			</body>
		</html>
	);
}
