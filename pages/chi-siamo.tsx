import AllSection from "@/lib/components/AllSection";
import PageDetails from "@/lib/components/PageDetails";
import { Section } from "@/lib/components/Section";
import { immagini } from "@/lib/components/contentsImages";


export default function ChiSiamo() {
	return (
		<Section>
			<PageDetails
				img="/assets/images/image3.jpg"
				title="Chi siamo"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				malesuada lacus ex, sit amet blandit leo lobortis eget."
				action="dona"
				path="/bacheca"
				i={immagini}
			/>
		</Section>
	);
}