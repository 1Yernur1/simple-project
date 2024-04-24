import Image from "next/image";
import Link from "next/link";

export const Announce = () => {
	return (
		<div className="py-16 px-2">
			<div className="container mx-auto">
				<div className="flex gap-8 px-6 justify-between flex-col lg:flex-row" data-aos="fade-right">
					<Image
						src={"/images/announce-card-one.png"}
						alt={"card"}
						width={540}
						height={528}
						className="order-2 lg:order-1 w-full lg:w-[33.75rem]"
					/>
					<div className="xl:mt-16 lg:w-[29.5rem] order-1">
						<h5 className="text-pink uppercase font-bold tracking-wider text-sm">Prioritize Feature Requests</h5>
						<h6 className="font-semibold text-5xl mt-4">Prioritization tool to help you build most needed features</h6>
						<p className="mt-4 text-lg text-primary-light">
							Easily prioritize feature requests using a customizable framework. Sort, filter, and collaborate on
							high-priority items to streamline your product roadmap and meet customer expectations efficiently.
						</p>
						<button className="bg-ternary py-4 px-5 flex gap-3 items-center rounded-xl mt-8 transition hover:duration-300 hover:ease-in hover:-translate-y-2">
							<span className="text-ternary font-semibold text-base">Explore product roadmap</span>
							<Image src="/icons/arrow-right.svg" alt="arrow-right" width={12} height={12} />
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-8 px-6 justify-between lg:flex-row lg:mt-16" data-aos="fade-left">
					<div className="xl:mt-16 lg:w-[29.5rem]">
						<h5 className="text-orange uppercase font-bold tracking-wider text-sm">
							Product Changelog & Release Notes
						</h5>
						<h6 className="font-semibold text-5xl mt-4">Announce new features with product changelog</h6>
						<p className="mt-4 text-lg text-primary-light">
							Whether you&apos;re launching new features or making improvements to existing functionality, product
							changelog makes it easy to keep your customers up-to-date on your progress.
						</p>
						<button className="bg-ternary py-4 px-5 flex gap-3 items-center rounded-xl mt-8 transition hover:duration-300 hover:ease-in hover:-translate-y-2">
							<span className="text-ternary font-semibold text-base">Explore product changelog</span>
							<Image src="/icons/arrow-right.svg" alt="arrow-right" width={12} height={12} />
						</button>
					</div>
					<Image
						src={"/images/announce-card.png"}
						alt={"card"}
						width={540}
						height={528}
						className="w-full lg:w-[33.75rem]"
					/>
				</div>
				<div className="px-6 mt-20">
					<div className=" border-t-2 border-secondary-light pt-10 ">
						<p className="text-center text-sm text-primary">
							Got time and patience to collect feedback from different channels?
						</p>
						<p className="text-center text-sm text-primary">
							<Link href={"/"} className="text-primary underline font-bold">
								Supahub is not for you.
							</Link>
							&nbsp;Get bogged down gathering feedback through all your channels.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
