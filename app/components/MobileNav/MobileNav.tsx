import Link from "next/link";

export const MobileNav = () => {
	const navElements = ["Features", "Pricing", "Blog", "Login"];

	return (
		<div className="absolute top-0 left-0 bg-white w-full h-full md:hidden">
			<div className="px-4 py-6">
				<ul className="flex flex-col text-sm text-secondary font-semibold">
					{navElements.map((element) => (
						<li key={element}>
							<Link href={"/"}>{element}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};