
import { TitleAndDescriptionContent } from "@/lib/components/descriptions/TitleAndDescriptionContent";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNextNavigator } from "@/hooks/useNextNavigator";



export default function ElfoCard(props: TitleAndDescriptionContent) {

  const theme = useTheme();
  const { clickNavigate } = useNextNavigator();

  return (
    <Card
      sx={{
        borderRadius: "20px",
        '& > *':
        {
          backgroundColor: theme.palette.background.default
        },

        transition: '0.3s',

        "&:hover": {
            transform: {
              xs: 'none',
              lg: 'translateY(-10px)'
            },
            boxShadow: theme => ({
              xs: 'none',
              lg: theme.shadows[10]})

        }
      }}>
      <CardMedia
        component="img"
        height="300"
        image={props.img}
        alt={props.title}
      >
      </CardMedia>
      <CardContent sx={{
        height: {
          xs: 'fit-content',
          md: 160
        },
        overflow: "hidden",

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
          variant="text"
          color="inherit"
          onClick={clickNavigate(`/adoptions/${props.path}`)}
        >
          Scopri di più
          <ArrowForwardIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
}
