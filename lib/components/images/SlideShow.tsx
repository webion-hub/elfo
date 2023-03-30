import { Article, GetArticleResponse } from "@/pages/api/articles/[id]";
import { Box } from "@mui/material";
import { Images } from "./Images";
import ImageSlider from "./ImageSlider";


interface SlideShowProps {
  slides: Images[]
}

export default function SlideShow(props: SlideShowProps) {
  return (
    <Box marginTop="50px">
      <ImageSlider slides={props.slides} />
    </Box>
  );
}
