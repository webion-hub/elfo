import { changeText } from "@/pages";
import { Stack, Box } from "@mui/material";
import { SetStateAction, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { contentCard } from "../cards/ElfoCard/ContentsCard";
import ElfoCard from "../cards/ElfoCard/ElfoCard";
import { TitleAndDescriptionContent } from "../descriptions/TitleAndDescriptionContent";
import { contentSiti } from "./ContentSiti";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 800 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function CardSlider() {
  const arr: TitleAndDescriptionContent[] = []

  changeText(arr, contentSiti)
  return (
    <Stack>
      <Carousel showDots={true} responsive={responsive} infinite={true} >
        {arr.map((item, i) => (
          <Box
            key={i} 
            padding={4}
          >
            <ElfoCard img={item.img} title={item.title} text={item.text} />
          </Box>
        ))}
      </Carousel>
    </Stack>
  );
}