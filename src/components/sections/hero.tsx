import appleLogo from "@/assets/svgs/apple-logo.svg";
import arrowDown from "@/assets/svgs/arrow-down.svg";
import bottomBirds from "@/assets/svgs/birds/bottom-birds.svg";
import midLeftBirds from "@/assets/svgs/birds/mid-left-birds.svg";
import midRightBirds from "@/assets/svgs/birds/mid-right-birds.svg";
import cloud0 from "@/assets/svgs/clouds/0.svg";
import cloud1 from "@/assets/svgs/clouds/1.svg";
import cloud2 from "@/assets/svgs/clouds/2.svg";
import cloud3 from "@/assets/svgs/clouds/3.svg";
import heroDots from "@/assets/svgs/hero-dots.svg";

// Clouds ordered from back to front (largest to smallest, darkest to lightest)
const clouds = [
	{ src: cloud3, zIndex: 10, delay: "0s", duration: "8s" },
	{ src: cloud2, zIndex: 20, delay: "0.5s", duration: "7s" },
	{ src: cloud1, zIndex: 30, delay: "1s", duration: "6s" },
	{ src: cloud0, zIndex: 40, delay: "1.5s", duration: "5s" },
];

const Hero: React.FC = () => {
	return (
		<section className="relative h-svh mt-16">
			<div className="absolute -top-[410.76px] -left-[100.47px] h-[441.76px] w-[471.27px] bg-white/70 blur-[60.5px] -z-20" />

			<div className="space-y-12 max-w-3xl container mx-auto">
				<div className="space-y-6 text-center">
					<div className="bg-white flex items-center gap-x-2 px-2 py-1 max-w-fit rounded-[200px] mx-auto">
						<img src={heroDots} alt="Hero Dots" />

						<p className="text-base font-medium text-blue-500">
							#1 iMessage Automation Tool
						</p>
					</div>

					<h1 className="text-[64px] font-bold leading-[120%] tracking-[-2%]">
						<span className="text-blue-500">iMessage</span> Automation for Teams
						and AI Workflows.
					</h1>
					<h2 className="text-[18px] text-black leading-[130%] tracking-[-2%]">
						Coup lets you, your team, or AI workflows send iMessages directly
						from your phone number, running securely on your Mac or Mac Mini.{" "}
					</h2>
				</div>

				<div className="flex items-center justify-center gap-x-3">
					<button
						type="button"
						className="cursor-pointer px-5 py-3 bg-blue-500 text-white rounded-[50px]"
					>
						Get Started
					</button>
					<button
						type="button"
						className="cursor-pointer px-5 py-3 outline-gray-500 rounded-[50px] outline-[0.7px] flex items-center justify-center font-medium text-[18px]"
					>
						<img src={appleLogo} alt="Apple Logo" />
						<span className="text-gray-500 mx-3">|</span>
						Download the Mac app
					</button>
				</div>
			</div>

			{/* Animated clouds - layered from back to front */}
			<div className="absolute bottom-0 left-0 right-0 pointer-events-none">
				{clouds.map((cloud, index: number) => (
					<img
						src={cloud.src}
						alt=""
						key={`cloud-${
							// biome-ignore lint/suspicious/noArrayIndexKey: this is a key
							index
						}`}
						className="absolute bottom-0 left-0 w-full animate-cloud-rise"
						style={{
							zIndex: cloud.zIndex,
							animationDuration: "1200ms",
						}}
					/>
				))}
			</div>

			<img
				src={bottomBirds}
				alt="Bottom Birds"
				className="absolute bottom-11 right-[212px] animate-bird-rise z-30"
			/>

			{/* Mid birds - fade in from bottom to static positions */}
			<img
				src={midLeftBirds}
				alt=""
				className="absolute z-20 animate-bird-rise pointer-events-none"
				style={{ left: "298.18px", top: "291px" }}
			/>
			<img
				src={midRightBirds}
				alt=""
				className="absolute z-20 animate-bird-rise pointer-events-none"
				style={{ left: "1406.18px", top: "305px" }}
			/>

			{/* Scroll indicator */}
			<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-60 text-center">
				<p className="text-gray-500 text-sm mb-2">Scroll to learn more</p>
				<img
					src={arrowDown}
					className="mx-auto animate-bounce-subtle"
					alt="Arrow Down"
				/>
			</div>
		</section>
	);
};

export default Hero;
