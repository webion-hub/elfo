import { Adoption, GetAdoptionsResponse } from "@/pages/api/adoptions";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import BigElfoCard from "./BigElfoCard/BigElfoCard";
import CardAdozioni from "./CardAdozioni";


interface PaginationCardProps {
  readonly pageSize: number;
}


export default function PaginationCard(props: PaginationCardProps) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [adoptions, setAdoptions] = useState<Adoption[]>([]);


  const handleChange = (_e: any, p: number) => {
    setPage(p)
  }
	
	useEffect(() => {
	  fetch(`/api/adoptions?page=${page}&pageSize=${props.pageSize}`)
	    .then(r => r.json())
			  .then((r: GetAdoptionsResponse) => {
    setTotalPages(r.totalPages);
				  setAdoptions(r.adoptions);
			});
  }, [page])

  return (
    <Stack
      direction="column"
      alignItems={'center'}
    >
      {adoptions.map((item, index) => (
        <CardAdozioni
          key={index}
          img={item.cover}
          title={item.name}
          text={item.text}
          sx={{ marginTop: 5 }}
        />
      ))}
      <Pagination
        sx={{ marginTop: 10 }}
        count={totalPages}
        color="primary"
        size='large'
        onChange={handleChange}
      />
    </Stack>
  );
}
