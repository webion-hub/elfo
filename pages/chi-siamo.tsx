import PageDetails from "@/lib/components/sections/PageDetails";
import { Section } from "@/lib/components/layout/Section";
import { arrImage } from "@/lib/components/images/ContentImage";


export default function ChiSiamo() {
  return (
    <Section>
      <PageDetails
        img="/assets/images/image3.jpg"
        title="Chi siamo"
        text="
        Cerchiamo di diffondere informazioni che aiutino a vivere e a far vivere meglio con mostre, teatro, musica, letture, cinema.
        Sempre consapevoli della fortuna che abbiamo avuto a nascere in questa parte del mondo. 
        
        Abbiamo adottato e stiamo sostenendo i bimbi che vedi nel sito.
        Portato medicine, vestiti e giocattoli in varie parti del mondo.
        Contribuito ai progetti di Medici Senza Frontiere, Emergency.
        Sostenuta l'opera di una piccolissima struttura in Ecuador in aiuto a bimbi si strada e famiglie sfortunate.
        Collaborato con Ghana Coop per l'elettrificazione di un villaggio in GHANA.
        Con l'aiuto di AMREF abbiamo realizzato un pozzo e diversi altri progetti in Kenya e Tanzania.
        Con l'associazione Amici di SOLOLO di Torino abbiamo realizzato una sala raggi nell'ospedale del Kenya e restaurato la pediatria.
        Collaboriamo con 3 missioni laiche e cattoliche per piccoli progetti di studio e sostegno.
        Collaboriamo con Centro Mondialità e Sviluppo per scavare pozzi in Tanzania attraverso la raccolta dei tappi.
        Collaboriamo con FRIENDS OF NEPAL per dare aiuti ai terremotati.
        E siamo ancora sul sentiero, se vuoi anche col tuo aiuto...."
        action="dona"
        path="/bacheca"
        i={arrImage}
      />
    </Section>
  );
}