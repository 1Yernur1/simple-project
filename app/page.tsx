"use client";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { MobileNav } from "./components/MobileNav/MobileNav";
import { Hero } from "./components/Hero/Hero";
import { Feedback } from "./components/Feedback/Feedback";
import { Roadmap } from "./components/Roadmap/Roadmap";
import { Announce } from "./components/Announce/Announce";
import { Features } from "./components/Features/Features";
import { Questions } from "./components/Questions/Questions";
import { GetStarted } from "./components/GetStarted/GetStarted";
import { Footer } from "./components/Footer/Footer";
import "aos/dist/aos.css";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			mirror: true,
			anchorPlacement: "top-bottom",
			startEvent: "DOMContentLoaded",
		});
	}, []);

	const toggleIsOpen = () => {
		document.body.classList.toggle("overflow-hidden");
		setIsOpen(!isOpen);
	};

	return (
		<main>
			<Header {...{ isOpen, toggleIsOpen }} />
			<main className="relative">
				{isOpen && <MobileNav />}
				<Hero />
				<Feedback />
				<Roadmap />
				<Announce />
				<Features />
				<Questions />
				<GetStarted />
			</main>
			<Footer />
		</main>
	);
}
