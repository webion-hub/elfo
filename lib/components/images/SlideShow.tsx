
import { Box } from "@mui/material";
import { arrImage } from "./ContentImage";
import ImageSlider from "./ImageSlider";


export default function SlideShow() {
	return (
		<Box marginTop="50px">
			<ImageSlider slides={arrImage} />
		</Box>
	);
}
