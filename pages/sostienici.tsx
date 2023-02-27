import AllSection from "@/lib/components/sections/AllSection";
import { Section } from "@/lib/components/layout/Section";

export default function Sostienici() {
	return (
		<Section>
			<AllSection
				img="/assets/images/image3.jpg"
				title="ciao"
				text="ciao"
				action="Vedi quaderno"
				path="quaderno"
				/>
		</Section>
	);
}