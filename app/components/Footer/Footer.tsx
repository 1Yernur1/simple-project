import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import "./Footer.css";

export const Footer = () => {
	return (
		<div className="my-16 px-6">
			<div className="mt-4 container mx-auto overflow-hidden">
				<div className="slider-mask">
					<InfoSlider />
				</div>
				<div className="mt-14 border-t-2 border-secondary-light pt-10">
					<div className="flex justify-between items-center flex-wrap gap-6">
						<div className="max-w-[20rem]">
							<Image src={"/icons/logo-contained.svg"} alt={"logo"} width={40} height={40} />
							<p className="mt-3 text-sm text-secondary">
								Supahub is a product feedback tool that helps you understand what your customers really want, and make
								better product decisions.
							</p>
						</div>
						<button className="bg-primary text-ternary px-5 py-4 rounded-xl transition hover:duration-300 hover:ease-in hover:-translate-y-2">
							Sign up for free
						</button>
					</div>
				</div>
				<div className="mt-10">
					<Links />
				</div>
				<div className="mt-10">
					<div className="flex justify-between items-center flex-col md:flex-row">
						<div className="flex gap-2">
							<Image src={"/icons/star-pink.svg"} alt={"pink star"} width={16} height={16} />
							<p className="text-secondary text-sm">Copyright © 2024 Supahub. All rights reserved.</p>
						</div>
						<SocialMedia />
					</div>
				</div>
			</div>
		</div>
	);
};

const InfoSlider = () => {
	const infoElements = [
		{
			title: "Collect Feedback",
		},
		{
			title: "Showcase Roadmap",
		},
		{
			title: "Announce Changelog",
		},
	];
	return (
		<div className="slider px-6" style={{ animationDuration: "25s" }}>
			{[...infoElements, ...infoElements].map(({ title }, index) => (
				<h5 key={index} className="text-primary text-5xl font-semibold text-nowrap mr-16" style={{ lineHeight: "1.2" }}>
					{title}
				</h5>
			))}
		</div>
	);
};

const Links = () => {
	const footerLinks = [
		{
			title: "Product",
			links: [
				{
					title: "Pricing",
					href: "/",
				},
				{
					title: "Alternatives",
					href: "/",
				},
				{
					title: "View Demo",
					href: "/",
				},
				{
					title: "Our Roadmap",
					href: "/",
				},
			],
		},
		{
			title: "Features",
			links: [
				{
					title: "Feedback Boards",
					href: "/",
				},
				{
					title: "Product Roadmap",
					href: "/",
				},
				{
					title: "Product Changelog",
					href: "/",
				},
				{
					title: "All Features",
					href: "/",
				},
			],
		},
		{
			title: "Resources",
			links: [
				{
					title: "Blog",
					href: "/",
				},
				{
					title: "Glossary",
					href: "/",
				},
				{
					title: "Request a feature",
					href: "/",
				},
			],
		},
		{
			title: "Policies",
			links: [
				{
					title: "Privacy Policy",
					href: "/",
				},
				{
					title: "Terms of Service",
					href: "/",
				},
				{
					title: "All Legal",
					href: "/",
				},
			],
		},
		{
			title: "Compare",
			links: [
				{
					title: "Alternative to Canny.io",
					href: "/",
				},
				{
					title: "Alternative to Beamer",
					href: "/",
				},
				{
					title: "Alternative to Nolt.io",
					href: "/",
				},
				{
					title: "Alternative to Uservoice",
					href: "/",
				},
				{
					title: "Alternative to Trello",
					href: "/",
				},
			],
		},
	];

	return (
		<div className="border-t-2 border-secondary-light pt-10">
			<div className="grid gap-6 grid-cols-3 md:grid-cols-5">
				{footerLinks.map((footerLink) => (
					<div key={footerLink.title} className="md:max-w-[13.125rem]">
						<h4 className="text-quinary font-bold uppercase tracking-widest text-xs">{footerLink.title}</h4>
						<ul className="text-quinary mt-4 text-sm flex flex-col gap-2">
							{footerLink.links.map(({ title, href }) => (
								<li key={title}>
									<Link href={href} className="hover:underline">
										{title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

const SocialMedia = () => {
	const socialMediaIcons = [
		{ src: "/icons/twitter-gray.svg", alt: "twitter" },
		{ src: "/icons/instagram-gray.svg", alt: "instagram" },
		{ src: "/icons/linkedin-gray.svg", alt: "linkedin" },
	];

	return (
		<div className="flex items-center">
			{socialMediaIcons.map((icon, index) => (
				<Fragment key={index}>
					<Link href="/">
						<Image src={icon.src} alt={icon.alt} width={40} height={40} />
					</Link>
					{index !== socialMediaIcons.length - 1 && <span>/</span>}
				</Fragment>
			))}
		</div>
	);
};
