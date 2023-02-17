import { Box, Paper, Stack } from "@mui/material";
import Img from "./Img";
import TitleAndDescription from "./TitleAndDescription";
import { TextAndDescriptionContent } from '@/lib/TitleAndDescriptionContent';



export default function AllSection(props: TextAndDescriptionContent)
{
    return(
        <Section>
            <Stack sx={{
                flexDirection: {xs: 'column-reverse', md: 'row'},
                maxWidth: '100%',
                width: '100%',
                height: '100%',
            }}>
                <Paper sx={{ height: '500px', position: 'relative', width: '100%', marginTop: 10, borderRadius: '2%', marginRight: 10}} >
                    <Img src={props.img!} alt="..." fill sx={{ objectFit: "cover", borderRadius: '2%'}}/>
                </Paper>
                <TitleAndDescription title={props.title} text={props.text} action={props.action!}></TitleAndDescription>
            </Stack>
        </Section>
    );
}