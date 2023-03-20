import { Accordion, AccordionDetails, AccordionSummary, Link, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import SectionBacheca from "./SectionBacheca";

export default function MyAccordion() {
  const [key, setKey] = useState('')

  const arr = [
    {
      label: 'Biglietto teatrale',
      key: 'ticket',
      description: "Biglietto teatrale a scelta fra le tre date proposte a TeatrAMO 2023: * 04 Marzo: IL TEATRO DI CARTA* 18 Marzo: LA VERITA' DI FREUD * 25 Marzo: LA BANDA DEGLI ONESTI gli spettacoli si terranno al Teatro Troisi di Nonantola alle ore 21.00.I posti sono numerati. Il costo del biglietto è € 10,00 e potete prenotarli al nr. 335-5881505 anche con messagggio whatsapp.",
      img: 'https://www.elfoavventure.it/imm_art/9/IMG-20211204-WA0008.jpg'
    },
    {
      label: 'Il compagno Don Camillo',
      key: 'compagno',
      description: '',
      img: '/assets/images/image3.jpg'
    },
    {
      label: 'Bomboniera a scatola traforata ',
      key: 'bomboniera',
      description: 'Bomboniera a scatolina in cartoncino leggero traforata con decorazioni, pergamena personalizzata, nastrino in tinta con pergamena (beige o rosa o azzurra), confetti bianchi o in tonalità sfumate colorate come nastro.',
      img: 'https://www.elfoavventure.it/imm_art/2/Bomboniera_C.jpg'
    },
    {
      label: 'Bomboniera a scatola',
      key: 'scatola',
      description: 'fdnbf',
      img: '/assets/images/image3.jpg'
    },
    {
      label: 'Esempio di bigliettino',
      key: 'esempio',
      description: 'fdnbf',
      img: '/assets/images/image3.jpg'
    },
    {
      label: 'Prezzi, Quantità, Spedizione',
      key: 'PQS',
      description: 'fdnbf',
      img: '/assets/images/image3.jpg'
    },
    {
      label: 'Da il decamerino',
      key: 'decamerino',
      description: "",
      img: 'https://www.elfoavventure.it/imm_art/10/kkkk.jpg'
    },
    {
      label: 'Da domani sarò triste, oggi no',
      key: 'triste',
      description: 'fdnbf',
      img: '/assets/images/image3.jpg'
    },
    {
      label: 'Un Amore Senza Frontiere',
      key: 'amore',
      description: 'La storia di un uomo eccezionale. Padre Pedro di Manantenasoa. Episodi della sua avventurosa vita in Madagascar attraverso le esperienze di un giovane viaggiatore. Libro molto difficile da trovare in libreria. Si può provare ordinandolo alla casa editrice stessa',
      img: 'https://www.elfoavventure.it/imm_art/1/LibroPedro.jpg'
    },
    {
      label: 'Le colline del coraggio',
      key: 'coraggio',
      description: 'fdnbf',
      img: '/assets/images/image3.jpg'
    }
  ]

  const page = arr.find(p => p.key === key)

  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        maxWidth: '100%',
        '& > *': {
          width: {
            xs: '100%',
            md: '50%'
          }
        }
      }}>
      <Stack
        sx={{
          marginTop: theme => theme.mixins.toolbar.minHeight + 'px',
          marginRight: {
            xs: 0,
            md: 5
          }
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Natale solidale</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {arr.slice(0, 2).map((item) => (
              <><Link href="#" underline="none" onClick={() => setKey(item.key)}>
                {item.label}
              </Link><br /><br /></>
            ))}
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
            {arr.slice(2, 6).map((item) => (
              <><Link
                href="#"
                underline="none"
                onClick={() => setKey(item.key)}
              >
                {item.label}
              </Link><br /><br /></>
            ))}
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
          <AccordionDetails>
            {arr.slice(6, 8).map((item) => (
              <><Link
                href="#"
                underline="none"
                onClick={() => setKey(item.key)}
              >
                {item.label}
              </Link><br /><br /></>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Libri consigliati da voi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {arr.slice(8, 10).map((item) => (
              <><Link
                href="#"
                underline="none"
                onClick={() => setKey(item.key)}
              >
                {item.label}
              </Link><br /><br /></>
            ))}
          </AccordionDetails>
        </Accordion>
      </Stack>
      <SectionBacheca
        img={page?.img}
        text={page?.description}
        title={page?.label}></SectionBacheca>

    </Stack>
  );
}

