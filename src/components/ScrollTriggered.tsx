import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { ReactNode } from "react";

export default function ScrollTriggered() {
	return (
		<div style={container}>
			{imageData.map(([image, hueA, hueB], i) => (
				<Card i={i} image={image} hueA={hueA} hueB={hueB} key={i} />
			))}
		</div>
	);
}

interface CardProps {
	image: ReactNode;
	hueA: number;
	hueB: number;
	i: number;
}

function Card({ image, hueA, hueB, i }: CardProps) {

	const background = ` #2B2629`;
	return (
		<motion.div
			className={`card-container-${i}`}
			style={cardContainer}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ amount: 0.8 }}
		>
			<div style={{ ...splash, background }} />
			<motion.div style={card} variants={cardVariants} className="card">
				{image}
			</motion.div>

		</motion.div>
	);
}

const cardVariants: Variants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 50,
		rotate: -10,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
	margin: "100px auto",
	maxWidth: 400,
	paddingBottom: 100,
	width: "100%",
};

const cardContainer: React.CSSProperties = {
	overflow: "hidden",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	paddingTop: 20,
	marginBottom: -120,
};

const splash: React.CSSProperties = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
	fontSize: 164,
	width: 250,
	height: 430,
	marginBottom: 80,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: 20,
	background: "#602136",
	boxShadow:
		"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
	transformOrigin: "10% 60%",
	cursor: 'pointer'
};

/**
 * ==============   Data   ================
 */

const imageData: [ReactNode, number, number][] = [
	[<img src="/bunny.png" alt="Bunny Icon" style={{ width: 100, height: 100 }} />, 340, 10],
	[<img src="/commissions.png" alt="Commissions Icon" style={{ width: 100, height: 100 }} />, 60, 90],
	[<img src="/vtuber.png" alt="VTuber Icon" style={{ width: 100, height: 100 }} />, 100, 140],
	[<img src="/palette.png" alt="Palette Icon" style={{ width: 100, height: 100 }} />, 260, 290],
];

