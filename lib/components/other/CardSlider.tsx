import { Stack, Box } from "@mui/material";
import { SetStateAction, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { contentCard } from "../cards/ElfoCard/ContentsCard";
import ElfoCard from "../cards/ElfoCard/ElfoCard";

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


export default function CardSlider()
{
   
    return (
        <Stack sx={{border: "1px solid black", width: '100%'}}>
            <Carousel showDots={true} responsive={responsive} infinite={true} >
                {contentCard.map((item) => (
                    <Box padding={4}><ElfoCard img={item.img} title={item.title} text={item.text} data=""/></Box>
                ))}
             </Carousel>
        </Stack>
    );
}