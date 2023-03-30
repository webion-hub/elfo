
import { TitleAndDescriptionContent } from "@/lib/components/descriptions/TitleAndDescriptionContent";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Stack, SxProps, Theme } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useNextNavigator } from "@/hooks/useNextNavigator";

interface BigElfoCardProps extends TitleAndDescriptionContent {
  readonly sx?: SxProps<Theme>;
}

export default function BigElfoCard(props: BigElfoCardProps) {
  const { clickNavigate } = useNextNavigator();
  return (
    <Stack
      component={Card}
      direction={{
        xs: 'column',
        md: 'row'
      }}
      sx={{
        maxWidth: "100%",
        width: "100%",
        borderRadius: '2%',
        ...props.sx,

        transition: '0.3s',

        "&:hover": {
          transform: {
            xs: 'none',
            lg: 'translateX(-10px)'
          },
          boxShadow: theme => ({
            xs: 'none',
            lg: theme.shadows[10]
          })

        }
      }}

      border='1px solid #E6E4E4'
    >

      <CardMedia
        component="img"
        image={props.img}
        alt="green iguana"
        sx={{
          maxWidth: {
            xs: 'auto',
            md: 250
          },
          height: {
            xs: 200,
            md: 'auto'
          },
          width: '100%'
        }}
      >
      </CardMedia>
      <Stack
        direction="column"
        justifyContent="space-between"
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"

          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={16}
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
      </Stack>
    </Stack>
  );
}

