"use client";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
	isOpen: boolean;
	toggleIsOpen: () => void;
};

export const Header = ({ isOpen, toggleIsOpen }: HeaderProps) => {
	return (
		<header className="shadow-sm relative z-10" data-aos="fade-down">
			<nav className="container mx-auto pt-4 pb-2 px-6 flex justify-between">
				<Link href={"/"} className="flex gap-2 items-center">
					<Image src="/icons/logo-brand.svg" alt="Logo" width={24} height={24} />
					<div className="hidden lg:flex lg:gap-1">
						<Image src="/icons/logo-text.svg" alt="Logo" width={110} height={24} />
						<span className="uppercase align-super text-secondary text-[0.625rem] font-bold">beta</span>
					</div>
				</Link>
				<div className="flex gap-4">
					<Links />
					<button className="block bg-primary px-4 py-3 text-ternary rounded-lg transition hover:duration-300 hover:ease-in hover:-translate-y-1">
						Sign up for free
					</button>
					<button className="flex flex-col gap-3 justify-center md:hidden" onClick={() => toggleIsOpen()}>
						<div
							className="w-6 h-1 bg-secondary rounded-sm transition-transform duration-300 ease-linear"
							style={{ transform: isOpen ? "rotate(38deg) translateY(0.625rem)" : "none" }}
						/>
						<div
							className="w-6 h-1 bg-secondary rounded-sm transition-transform duration-300 ease-linear"
							style={{ transform: isOpen ? "rotate(-38deg) translateY(-0.625rem)" : "none" }}
						/>
					</button>
				</div>
			</nav>
		</header>
	);
};

const Links = () => {
	const linkItems = [
		{
			text: "Features",
			href: "/",
			hasImage: true,
			className: "flex gap-2 items-center hover:text-primary transition hover:duration-300 hover:ease-in hover:-translate-y-1",
			imageSrc: "/icons/arrow-down.svg",
			imageAlt: "arrow down",
			imageSize: { width: 8, height: 4 },
		},
		{
			text: "Pricing",
			href: "/",
			className: "hover:text-primary transition hover:duration-300 hover:ease-in hover:-translate-y-1 block",
		},
		{
			text: "Blog",
			href: "/",
			className: "hover:text-primary transition hover:duration-300 hover:ease-in hover:-translate-y-1 block",
		},
		{
			text: "Login",
			href: "/",
			className: "hover:text-primary transition hover:duration-300 hover:ease-in hover:-translate-y-1 block",
		},
	];

	return (
		<ul className="hidden text-sm text-secondary font-semibold md:flex md:gap-6 md:items-center">
			{linkItems.map((item, index) => (
				<li key={index}>
					<Link href={item.href ? item.href : "/"} className={item.className}>
						<span>{item.text}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};
