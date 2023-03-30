import { TitleAndDescriptionContent } from "@/lib/components/descriptions/TitleAndDescriptionContent";
import {Stack } from "@mui/material";
import AllSection from "./AllSection";
import SlideShow from "../images/SlideShow";

export default function NewsDetails(props: TitleAndDescriptionContent) {
  const showSlideShow = Array.isArray(props.i) && props.i.length > 0;
  return (
    <Stack
      sx={{
        flexDirection: 'column',
        maxWidth: '100%',
        width: '100%'
      }}
    >
      <AllSection
        data={props.data}
        img={props.img}
        title={props.title}
        text={props.text}
        action={props.action}
        path={props.path}
        i={props.i}
      />
      
      {showSlideShow && (
      <Stack
        sx={{
          justifyContent: 'center',
          maxWidth: '100%',
          width: '100%',
          height: '100%',
        }}
      >
        <SlideShow slides={props.i || []}></SlideShow>
      </Stack>
      )}
    </Stack>
  )
}