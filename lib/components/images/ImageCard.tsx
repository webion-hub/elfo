import { Images } from "@/lib/components/images/Images";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";



export default function ImageCard(props: Images) {
  return (
    <Card
      sx={{
        width: {
          xs: '100%',
          md: '40%'
        },
        marginTop: 5
      }}>
      <CardMedia
        component="img"
        height="450"
        image={props.path}
        alt={props.alt}
      >
      </CardMedia>
      <CardContent
        sx={{
          height: 50,
          overflow: "hidden"
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {props.alt}
        </Typography>
      </CardContent>
    </Card>
  )
}

