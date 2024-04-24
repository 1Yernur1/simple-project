import Image from "next/image";
import "./Hero.css";

export const Hero = () => {
	return (
		<div className="hero pt-28 pb-[30rem] px-6" data-aos="fade-out">
			<div className="text-center" data-aos="fade-right" data-aos-delay="500">
				<h2 className="text-sm text-quaternary font-bold uppercase tracking-widest">
					Product & Customer Feedback Tool
				</h2>
				<h1 className="mt-4 text-5xl font-semibold tracking-wide text-primary">
					Central hub to collect <br /> feedback & announce <br />
					product updates
				</h1>
				<h3 className="mt-4 text-xl text-quinary">
					With Supahub collect, organize and prioritize feature requests to better <br /> understand customer feedback
					and use them to inform your product <br />
					roadmap.
				</h3>
			</div>
			<div className="mt-10 flex justify-center gap-4" data-aos="fade-in" data-aos-delay="500">
				<button className="bg-ternary px-6 py-5 flex gap-3 items-center rounded-xl shadow-sm transition hover:duration-300 hover:ease-in hover:-translate-y-2">
					<Image src="/icons/stars.svg" alt="stars" width={24} height={24} />
					<span className="text-lg text-ternary font-semibold">Sign up for free</span>
				</button>
				<button className="bg-white px-6 py-5 flex gap-3 items-center rounded-xl border border-quaternary border-opacity-30 shadow-sm transition hover:duration-300 hover:ease-in hover:-translate-y-2">
					<span className="text-lg text-quinary font-semibold">See Supahub in action</span>
				</button>
			</div>
			<div className="flex justify-center gap-2 mt-3 text-sm" data-aos="fade-in" data-aos-delay="500">
				<Image src={"/icons/credit-card.svg"} alt="credit-card" width={16} height={16} />
				<span>No credit card required</span>
				<span>•</span>
				<Image src={"/icons/clock.svg"} alt="clock" width={16} height={16} />
				<span>14-day free trial</span>
			</div>
		</div>
	);
};
