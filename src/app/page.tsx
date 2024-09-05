'use client';

import IntroSection from '@/app/sections/intro'
import AboutSection from '@/app/sections/about'
import ProjectsSection from '@/app/sections/projects';
import ContactSection from '@/app/sections/contact';

export default function Home() {
	return (
		<div className="">
			<div id="intro">
				<IntroSection />
			</div>
			<div id="about">
				<AboutSection />
			</div>
			<div id="projects">
				<ProjectsSection />
			</div>
			<div id="contact">
				<ContactSection />
			</div>
		</div>
	)
}
