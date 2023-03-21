import { Box } from "@mui/material";
import { SetStateAction, useState } from "react";
import { Images } from "./Images"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

interface ImagesSliderProps {
  readonly slides: Images[]
}

export default function ImageSlider(props: ImagesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderStyles = {
    height: "100%",
    position: "relative",
  }

  const leftArrowStyles = {
    position: "absolute",
    display: 'flex',
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    zIndex: 1,
    cursor: "pointer",
    backgroundColor: "#fff",
    borderRadius: '40%',
  }

  const rightArrowStyles = {
    position: "absolute",
    display: 'flex',
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    zIndex: 1,
    cursor: "pointer",
    backgroundColor: "#fff",
    borderRadius: '40%'
  }

  const slideStyles = {
    width: "100%",
    height: "600px",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: '2px 2px 3px 3px lightgray',
    backgroundImage: ` url(${props.slides[currentIndex].path})`,
    alt: `url(${props.slides[currentIndex].alt})`
  }

  const dotsContainerStyles = {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
  }

  const dotStyles = {
    margin: "30px 5px",
    cursor: "pointer"
  }

  const goToPrevious = () => {
    const isFirsSlide = currentIndex === 0
    const newIndex = isFirsSlide ? props.slides.length - 1 : currentIndex - 1;
    console.log(newIndex)
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    console.log(newIndex)
    setCurrentIndex(newIndex)
  }

  const goToSlide = (p: SetStateAction<number>) => {
    setCurrentIndex(p)
  }

  return (
    <>
      <Box sx={sliderStyles}>
        <Box sx={leftArrowStyles} onClick={goToPrevious}>
          <NavigateBeforeIcon fontSize="large" />
        </Box>
        <Box sx={rightArrowStyles} onClick={goToNext}>
          <NavigateNextIcon fontSize="large" />
        </Box>
        <Box sx={slideStyles}></Box>
        <Box sx={dotsContainerStyles}>
          {props.slides.map((item, index) => (
            <Box key={index} sx={dotStyles} onClick={() => goToSlide(index)}>
              {currentIndex === index ? <CircleIcon fontSize="small" color="primary"></CircleIcon> : <CircleOutlinedIcon fontSize="small" color="primary"></CircleOutlinedIcon>}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}