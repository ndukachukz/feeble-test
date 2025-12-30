import { Link } from "@tanstack/react-router";
import logo from "@/assets/svgs/logo.svg";

const links = [
	{
		link: "/",
		label: "How it works",
	},
	{
		link: "/",
		label: "Pricing",
	},
	{
		link: "/",
		label: "Use case",
	},
	{
		link: "/",
		label: "FAQ",
	},
];

export default function Header() {
	return (
		<header className="container mx-auto flex px-6 py-5 bg-white rounded-[200px] justify-between mt-10">
			<img src={logo} alt="Logo" className="h-[34px]" />
			<div className="flex items-center gap-4">
				{links.map((link) => (
					<Link
						to={link.link}
						key={link.label}
						className="py-2 px-3 text-gray-400 text-base font-medium capitalize"
					>
						{link.label}
					</Link>
				))}
			</div>
			<button
				type="button"
				className="bg-blue-500 text-white px-4 py-2 rounded-[43.62px] capitalize font-medium text-base"
			>
				contact sales
			</button>
		</header>
	);
}
