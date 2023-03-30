
import { Article, GetArticlesResponse } from "@/pages/api/articles";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import BigElfoCard from "./BigElfoCard/BigElfoCard";


interface PaginationCardProps {
  readonly pageSize: number;
}


export default function PaginationCard(props: PaginationCardProps) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);


  const handleChange = (_e: any, p: number) => {
    setPage(p)
  }
	
	useEffect(() => {
	  fetch(`/api/articles?page=${page}&pageSize=${props.pageSize}`)
	    .then(r => r.json())
			.then((r: GetArticlesResponse) => {
    setTotalPages(r.totalPages);
			  setArticles(r.articles);
			});
  }, [page])

  return (
    <Stack
      direction="column"
      alignItems={'center'}
    >
      {articles.map((item, index) => (
        <BigElfoCard
          key={index}
          img={item.cover}
          data={new Date(item.publishDate).toLocaleDateString()}
          title={item.title}
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
