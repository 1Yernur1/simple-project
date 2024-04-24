import Image from "next/image";

export const GetStarted = () => {
	return (
		<div className="py-16 px-6">
			<div className="max-w-[87.5rem] mx-auto"  data-aos="fade-in">
				<div className="rounded-[2.5rem] bg-[url('/images/get-started-bg.png')] bg-cover bg-center bg-no-repeat p-[6.5rem] py-20 px-4">
					<div className="max-w-[42rem] mx-auto">
						<h6 className="font-bold text-sm text-center text-ternary uppercase tracking-wider">
							Get started with Supahub for free
						</h6>
						<h5 className="font-semibold text-5xl text-center mt-4 text-ternary">
							Stop wasting time & start collecting user feedback
						</h5>
						<p className="text-ternary-light text-lg text-center">
							Keep track of feature requests and understand which feedback carry the most impact and should be
							prioritized.
						</p>
					</div>
					<div className="mt-10 flex justify-center gap-4">
						<button className="bg-white px-6 py-5 flex gap-3 items-center rounded-xl shadow-sm transition hover:duration-300 hover:ease-in hover:-translate-y-2">
							<Image src="/icons/stars-rounded-black.svg" alt="stars" width={24} height={24} />
							<span className="text-lg text-primary font-semibold">Sign up for free</span>
						</button>
						<button className="px-6 py-5 flex gap-3 items-center rounded-xl border border-white border-opacity-30 shadow-sm transition hover:duration-300 hover:ease-in hover:-translate-y-2">
							<span className="text-lg text-ternary-dark font-semibold">See Supahub in action</span>
						</button>
					</div>
					<div className="flex justify-center gap-2 mt-3 text-sm">
						<Image src={"/icons/credit-card-white.svg"} alt="credit-card" width={16} height={16} />
						<span className="text-ternary-light">No credit card required</span>
						<span className="text-ternary-light">•</span>
						<Image src={"/icons/clock-white.svg"} alt="clock" width={16} height={16} />
						<span className="text-ternary-light">14-day free trial</span>
					</div>
				</div>
			</div>
		</div>
	);
};
