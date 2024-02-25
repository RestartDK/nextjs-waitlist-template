import MaxWidthWrapper from "@/components/maxwidthwrapper";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Video from "@/components/video";
import Benefit from "@/components/benefits";
import CTA from "@/components/cta";


export default function Home() {
	// Now working on Video section
	return (
		<MaxWidthWrapper>
			<Hero />
			<Video />
			<Features />
			<Benefit />
			<CTA />
		</MaxWidthWrapper>
	);
}
