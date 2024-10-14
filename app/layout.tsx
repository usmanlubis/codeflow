import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
});

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
	title: 'CodeFlow',
	description:
		'is a place for developers for helping each other by asking and answering a question, finding solution and networking around',
	icons: {
		icon: './favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: 'primary-gradient',
					footerActionLink: 'primary-text-gradient hover:text-primary-500',
				},
			}}
		>
			<html lang="en">
				<body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
