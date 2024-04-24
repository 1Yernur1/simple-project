import Image from "next/image";
import Link from "next/link";

export const Features = () => {
	const firstSliderElements = [
		{
			icon: "🔒",
			title: "Set board privacy",
		},
		{
			icon: "🗳",
			title: "Vote on behalf",
		},
		{
			icon: "⌛",
			title: "Super fast setup",
		},
		{
			icon: "📥",
			title: "Merge duplicate posts",
		},
		{
			icon: "🌎",
			title: "Search and filter",
		},
		{
			icon: "📝",
			title: "Guest posts",
		},
	];

	const secondSliderElements = [
		{
			icon: "💪",
			title: "Powerful text editor",
		},
		{
			icon: "🎨",
			title: "Custom brand colors",
		},
		{
			icon: "🖼",
			title: "Set OpenGraph image",
		},
		{
			icon: "🌗",
			title: "Dark/Light theme",
		},
		{
			icon: "🚨",
			title: "Priority score",
		},
		{
			icon: "💬",
			title: "Internal comments",
		},
	];

	return (
		<div className="py-16">
			<div className="container mx-auto">
				<h3 className="text-quaternary font-bold text-sm text-center uppercase tracking-wider" data-aos="fade-out">
					Feedback tool features
				</h3>
				<h2 className="mt-4 text-primary text-5xl text-center font-bold" data-aos="fade-up">
					See all features
				</h2>
				<p className="mt-4 text-primary-light text-center" data-aos="fade-up">
					All the features of product feedback tool you need to easily <br /> centralize product feedback from your
					customers and use that <br /> feedback to build better products.
				</p>
				<div className="slider-mask relative overflow-hidden">
					<div className="mt-16">
						<Slider elements={firstSliderElements} />
					</div>
					<div className="mt-4 -ml-28">
						<Slider elements={secondSliderElements} direction="right" />
					</div>
				</div>
				<div className="mt-16 px-6">
					<Cards />
				</div>
				<div className="mt-16 px-6">
					<Reviews />
				</div>
				<div className="px-6 mt-20">
					<div className="border-t-2 border-secondary-light pt-10 ">
						<p className="text-center text-sm text-primary">
							Got time and patience to collect feedback from different channels?
						</p>
						<p className="text-center text-sm text-primary">
							<Link href={"/"} className="text-primary underline font-bold">
								Supahub is not for you
							</Link>
							. Get bogged down gathering feedback through all your channels.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

type SliderProps = {
	elements: {
		icon: string;
		title: string;
	}[];
	direction?: "left" | "right";
};

const Slider = ({ elements, direction = "left" }: SliderProps) => (
	<div className={`${direction === "left" ? "slider" : "slider slider-alt"} text-nowrap`}>
		{[...elements, ...elements].map(({ icon, title }, index) => (
			<div key={index} className=" bg-secondary-light mr-3 p-4 rounded-xl">
				<div className="flex gap-3">
					<span>{icon}</span>
					<span className="text-base text-primary font-medium">{title}</span>
				</div>
			</div>
		))}
	</div>
);

const Cards = () => {
	const cardElements = [
		{
			title: "Set boards privacy",
			description: "You can control board privacy, allowing you to control who sees the feedback.",
			imagePath: "/images/features-card-one.png",
		},
		{
			title: "Feature prioritization",
			description: "Use the data that you've collected on user behavior, customer feedback and feature requests.",
			imagePath: "/images/features-card-two.png",
		},
		{
			title: "Merge duplicate posts",
			description:
				"Spot duplicates and merge them together so that your team doesn't have to waste time reading through the same post twice.",
			imagePath: "/images/features-card-three.png",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
			{cardElements.map(({ title, description, imagePath }, index) => (
				<div
					key={index}
					className="transition hover:duration-300 hover:ease-in hover:-translate-y-4 last:md:col-span-2 last:md:text-center last:xl:text-left last:xl:col-span-1"
				>
					<div
						className="rounded-3xl bg-secondary-light flex flex-col justify-between overflow-hidden"
						data-aos="zoom-in-right"
						data-aos-delay={`${300 * index}`}
					>
						<div className="pt-8 px-8 pb-4">
							<h5 className="text-primary text-2xl font-semibold">{title}</h5>
							<p className="text-primary-light mt-2">{description}</p>
						</div>
						<Image src={imagePath} alt={"card image"} width={368} height={245} className="mx-auto" />
					</div>
				</div>
			))}
		</div>
	);
};

const Reviews = () => {
	const reviewItems = [
		{
			imagePath: "/icons/features-feature-one.png",
			title: "Link feedback to customers",
			description: "Automatically fetch the right customer or create a new one.",
		},
		{
			imagePath: "/icons/features-feature-two.png",
			title: "Upvotes & Downvotes",
			description: "Votes helps you see which feedback is popular among your users.",
		},
		{
			imagePath: "/icons/features-feature-three.png",
			title: "Subscribe users for updates",
			description: "Let users subscribe for updates and get notified when there&apos;s an update.",
		},
		{
			imagePath: "/icons/features-feature-four.png",
			title: "Post on behalf",
			description: "Allows your customer support team to post on behalf of your users.",
		},
		{
			imagePath: "/icons/features-feature-five.png",
			title: "Hide posts",
			description: "Hide posts if they&apos;re not relevant to your product.",
		},
		{
			imagePath: "/icons/features-feature-six.png",
			title: "Pin posts & comments",
			description: "Pin posts and comments so they stay at the top of your board!",
		},
	];

	return (
		<div className="flex flex-wrap gap-12 justify-between">
			{reviewItems.map(({ imagePath, title, description }, index) => (
				<div key={index} className="md:w-[22rem]">
					<div className="flex justify-between gap-6">
						<div className=" min-w-10">
							<Image src={imagePath} alt={"feature"} width={40} height={40} />
						</div>
						<div className="flex flex-col gap-1">
							<h6 className="text-primary font-semibold text-xl">{title}</h6>
							<p className="text-primary text-base">{description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
