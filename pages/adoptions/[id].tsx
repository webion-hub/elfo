import { Section } from "@/lib/components/layout/Section";
import AdoptionsDetails from "@/lib/components/sections/AdoptionsDetails";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Adoption } from "../api/adoptions/[id]";
import { GetAdoptionResponse } from "../api/adoptions/[id]";

export default function Articles() {
  const router = useRouter();
  const id = router.query.id;
  const [adoption, setAdoption] = useState<Adoption>();

  useEffect(() => {
    fetch(`/api/adoptions/${id}`)
      .then(r => r.json())
      .then((r: GetAdoptionResponse) => {
        setAdoption(r.adoption);
      });
  }, []);

  
  return (
    <Section>
      <Stack
        direction="column"
        alignItems={"flex-start"}
        sx={{
          '& > *': {
            marginTop: 5,
          },
        }}
      >
        <AdoptionsDetails
         title={adoption?.name || ''}
         img = {adoption?.cover}
         text = {adoption?.text || ''}
         i={adoption?.images}
       />
      </Stack>
    </Section>
  )
}