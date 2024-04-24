import Image from "next/image";

export const Roadmap = () => {
	return (
		<div className="pt-28 pb-16 px-6">
			<div className="container mx-auto" data-aos="fade-in">
				<h4 className="text-center text-quaternary font-bold text-sm uppercase tracking-wider">Product roadmap tool</h4>
				<h5 className="mt-4 font-semibold text-primary text-5xl text-center">
					Public roadmap to show what <br /> you&apos;re working on next
				</h5>
				<p className="mt-4 text-center text-lg text-primary-light">
					All the features of product feedback tool you need to easily centralize product <br /> feedback from your
					customers and use that feedback to build better products.
				</p>
				<Image src="/images/roadmap-main.png" alt="roadmap" width={1152} height={500} className="mx-auto mt-16" />
				<RoadmapCards />
			</div>
		</div>
	);
};

const RoadmapCards = () => {
	const roadmapCards = [
		{
			title: "Add priority table",
			description:
				"Add new features as they come up or create a backlog of features that need to be prioritized eventually.",
			image: "/images/roadmap-card-one.png",
		},
		{
			title: "Customize statuses",
			description: "Change the status of a feature from “planned” to “in progress” depending on the development stage.",
			image: "/images/roadmap-card-two.png",
		},
		{
			title: "Maintain transparency",
			description: "Your public roadmap helps share what's coming and what's already been released.",
			image: "/images/roadmap-card-three.png",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
			{roadmapCards.map(({ title, description, image }, index) => (
				<div
					key={index}
					className="transition hover:duration-300 hover:ease-in hover:-translate-y-4 last:md:col-span-2 last:md:text-center last:xl:text-left last:xl:col-span-1"
				>
					<div
						className=" bg-secondary-light rounded-3xl overflow-hidden"
						key={title}
						data-aos="zoom-in-right"
						data-aos-delay={`${300 * index}`}
					>
						<div className="px-8 pt-8 pb-4">
							<h6 className="text-primary text-xl font-semibold">{title}</h6>
							<p className="mt-2 text-primary-light text-base">{description}</p>
						</div>
						<Image src={image} alt="card image" width={368} height={245} className="mt-2 mx-auto" />
					</div>
				</div>
			))}
		</div>
	);
};
