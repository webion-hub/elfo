import { Stack, styled, Typography } from "@mui/material";
import ColoredLine from "../../other/ColoredLine";
import FooterAction from "../footer/FooterAction";
import Link from "../footer/Link";
import Social from "../footer/Social";

export const StyledFooter = styled('footer')(({ theme }) => ({
  maxWidth: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  height: '100%',
  marginTop: 100,
  paddingInline: 40
}));

export default function Footer() {
  return (
    <StyledFooter>
      <Stack sx={{
        display: "flex",
        flexDirection: {
          xs: 'column ',
          md: 'row'
        },
        justifyContent: 'space-between',
        maxWidth: 1200,
        width: '100%',
        margin: 'auto',
        alignItems: 'center',
        marginBottom: 7,
        '& > *': {
          marginTop: {
            xs: 10,
            md: 0
          }
        }
      }}
      >
        <FooterAction iban="697756564545" />
        <Link></Link>
        <Social></Social>
      </Stack>
      <ColoredLine color="#196BA8" />
      <Typography
        variant="subtitle1"
        component="p"
        textAlign={'center'}
      >
        Powered by Webion
      </Typography>
    </StyledFooter>
  );
}