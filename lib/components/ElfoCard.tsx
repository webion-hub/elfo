
import { TitleAndDescriptionContent } from "@/lib/components/TitleAndDescriptionContent";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";



export default function ElfoCard(props: TitleAndDescriptionContent) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={props.img}
        alt="green iguana"
      >
      </CardMedia>
      <CardContent sx={{
        height: 160,
        overflow: "hidden"
      }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
        >
          Scopri di più
        </Button>
      </CardActions>
    </Card>
  );
}
