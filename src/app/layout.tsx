import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { StrictMode } from 'react';

import NavBar from '@/app/sections/navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Josh's Portfolio",
	description: "A collection of Josh's software projects",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) {
return (
	<html lang="en">
		<body className={inter.className}>
			<div className="bg-blue-300">
				<NavBar />
				{children}
			</div>
		</body>
	</html>
);
}
