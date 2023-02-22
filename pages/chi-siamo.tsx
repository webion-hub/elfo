import PageDetails from "@/lib/components/sections/PageDetails";
import { Section } from "@/lib/components/layout/Section";



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
			/>
		</Section>
	);
}