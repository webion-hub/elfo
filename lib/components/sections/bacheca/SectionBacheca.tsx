import { Paper, Stack } from "@mui/material";
import Img from "../../images/Img";
import { TitleAndDescriptionContent } from '@/lib/components/descriptions/TitleAndDescriptionContent';
import TextAndDescriptionBacheca from "../../descriptions/TextAndDescriptionBacheca";



export default function SectionBacheca(props: Partial<TitleAndDescriptionContent>) {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column-reverse',
          md: 'row'
        },
        width: '100%',
        height: '100%',
      }}>
      {props.img ?
        <Paper
          sx={{
            height: '400px',
            position: 'relative',
            width: '100%',
            marginTop: 10,
            borderRadius: '2%',
            marginRight: 10
          }} >
          <Img
            src={props.img!}
            alt={props.title!}
            fill
            sx={{
              objectFit: "cover",
              borderRadius: '2%'
            }} />
        </Paper> : null
      }
      <TextAndDescriptionBacheca
        title={props.title ?? ''}
        text={props.text ?? ''}
      />
    </Stack>
  );
}