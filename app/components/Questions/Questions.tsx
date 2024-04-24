import Link from "next/link";
import "./Questions.css";

export const Questions = () => {
	return (
		<div className="questions relative pt-28 px-6 pb-16 overflow-hidden before:left-0 md:before:left-[-22%] after:right-0 md:after:right-[-15%]">
			<div className="container mx-auto" data-aos="fade-out">
				<h4 className="text-quaternary font-bold text-sm uppercase tracking-wider">Frequently asked questions</h4>
				<h3 className="mt-4 font-semibold text-primary text-5xl">Everything you need to know</h3>
				<p className="text-quinary mt-4 text-lg">
					If you have anything else you want to ask,{" "}
					<Link href={"/"} className="text-quaternary font-medium hover:underline">
						reach out to us
					</Link>
					.
				</p>
				<div className="mt-20">
					<Cards />
				</div>
				<div className="mt-20">
					<div className=" border-t-2 border-secondary-light pt-10 ">
						<p className="text-center text-sm text-primary">Prefer guesswork to build features? You guessed it.</p>
						<p className="text-center text-sm text-primary">
							<Link href={"/"} className="text-primary underline font-bold">
								Supahub is not for you
							</Link>
							. Just do the guesswork to prioritize your features..
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Cards = () => {
	const cardElements = [
		{
			title: "What is Supahub?",
			description:
				"Supahub is a customer feedback management platform that helps businesses collect, organize, and prioritize feedback from their customers.",
		},
		{
			title: "Is Supahub free?",
			description: "Yes. Supahub does come with a free plan. Paid plans start for only $19/month.",
		},
		{
			title: "Can I vote on behalf of my users?",
			description: "Yes, you have the ability to vote on behalf of your users in Supahub.",
		},
		{
			title: "How is Supahub different from other feedback management tools?",
			description:
				"Supahub offers a user-friendly and intuitive nterface, inspired by industry leaders like Canny.io, making it easy to collect and analyze customer feedback. We focus on helping you take action on the most important insights.",
		},
		{
			title: "Can I use Supahub as both an internal and a public feedback tool?",
			description:
				"Yes! You can use Supahub to collect feedback both from your internal team and from external users. The platform is highly customizable so that you can easily change feedback board privacy that serves your specific needs.",
		},
		{
			title: "How can I get started with Supahub?",
			description:
				"To get started with Supahub, simply sign up for an account and begin collecting feedback from your customers and teammates.",
		},
		{
			title: "When should I use public vs private boards?",
			description:
				"Use public boards when you want open feedback and engagement from customers. Use private boards when you want to limit visibility to specific users or teams.",
		},
		{
			title: "How much does Supahub cost?",
			description:
				"Supahub offers a range of pricing plans to suit different needs and budgets, with plans starting at $19/month. But most importantly Supahub offers a free plan and a 14-day trial to get you started.",
		},
		{
			title: "Can I customize Supahub to match my brand's look and feel?",
			description:
				"Absolutely. Supahub offers customization options to ensure that the platform aligns with your brand's identity, so your customers experience a seamless transition.",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
			{cardElements.map(({ title, description }, index) => (
				<div className="md:w-[22.625rem]" key={index}>
					<h6 className="font-semibold text-lg text-primary">{title}</h6>
					<p className="mt-1 text-base text-primary">{description}</p>
				</div>
			))}
		</div>
	);
};
