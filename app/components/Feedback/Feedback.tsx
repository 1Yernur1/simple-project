"use client";
import Image from "next/image";

export const Feedback = () => {
	return (
		<div className="bg-quinary py-32 px-2">
			<div className="container mx-auto">
				<div className="flex justify-between gap-6 px-6 flex-col md:flex-row">
					<div data-aos="fade-down">
						<span className="block mb-4 text-primary text-sm font-bold tracking-wide uppercase">
							Public feedback portal
						</span>
						<h4 className="text-quaternary-dark font-semibold text-5xl">
							Your feedback hub, <br />
							your way
							<br />
						</h4>
					</div>
					<div className="lg:w-[29.5rem] md:w-[20.5rem]" data-aos="fade-down">
						<p className="mb-10 mt-4 text-primary-light">
							Public feedback portal is where users can leave feature requests and comments about thier ideas and
							feature requests for your product. These public portals can be customized as per your brand.
						</p>
						<button className="bg-ternary py-4 px-5 flex gap-3 items-center rounded-xl transition hover:duration-300 hover:ease-in hover:-translate-y-2">
							<span className="text-ternary font-semibold text-base">Explore feedback boards</span>
							<Image src="/icons/arrow-right.svg" alt="arrow-right" width={12} height={12} />
						</button>
					</div>
				</div>
				<Image src="/images/stars-pink.png" alt="stars-pink" width={48} height={60} className="ml-auto" />
				<div className="px-6">
					<div className=" bg-primary-light rounded-3xl overflow-hidden h-[30rem] pt-16">
						<div className="slider-mask">
							<Gallery />
						</div>
					</div>
					<FeedbackCards />
				</div>
			</div>
		</div>
	);
};

const Gallery = () => {
	const galleryItems = [
		{
			src: "/images/feedback-slider-one.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
		{
			src: "/images/feedback-slider-two.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
		{
			src: "/images/feedback-slider-three.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
		{
			src: "/images/feedback-slider-four.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
		{
			src: "/images/feedback-slider-five.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
		{
			src: "/images/feedback-slider-six.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
		{
			src: "/images/feedback-slider-seven.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
		{
			src: "/images/feedback-slider-eight.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
		{
			src: "/images/feedback-slider-nine.png",
			alt: "slider image",
			width: 720,
			height: 432,
		},
	];

	return (
		<div className="slider" style={{ animationDuration: "60s" }}>
			{[...galleryItems, ...galleryItems].map(({ src, alt, width, height }, index) => (
				<Image
					key={index}
					src={src}
					alt={alt}
					width={width}
					height={height}
					className="mr-4 rounded-2xl max-w-none w-[45rem]"
				/>
			))}
		</div>
	);
};

const FeedbackCards = () => {
	const feedbackCards = [
		{
			title: "Comment threads",
			description: "Have discussions with your users to clarify and understand their needs.",
		},
		{
			title: "Set OpenGraph image",
			description: "Add an open-graph image that will show up when you share on social media sites.",
		},
		{
			title: "Set Dark/Light theme",
			description: "Select theme for your public feedback portal for consistent user experience.",
		},
	];

	return (
		<div className="flex gap-12 mt-16 flex-col md:flex-row" data-aos="fade-up">
			{feedbackCards.map(({ title, description }) => (
				<div className="pt-8 border-t-2 border-secondary" key={title}>
					<h5 className="text-primary text-2xl font-semibold">{title}</h5>
					<p className="pt-3 text-primary-light text-base">{description}</p>
				</div>
			))}
		</div>
	);
};
