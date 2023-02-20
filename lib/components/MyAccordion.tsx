import { Accordion, AccordionDetails, AccordionSummary, Link, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MyAccordion() {
	return (
		<Stack
			sx={{
				'& > *': {
					width: {
						xs: '80%',
						md: '50%'
					}
				}
			}}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Natale solidale</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Link
						href="#"
						underline="none"
					>
						Biglietto teatrale
					</Link>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Bomboniere Solidali</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3a-content"
					id="panel3a-header"
				>
					<Typography>Poesie</Typography>
				</AccordionSummary>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
			</Accordion>
		</Stack>
	);
}