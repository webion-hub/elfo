import { Section } from "@/lib/components/layout/Section";
import NewsDetails from "@/lib/components/sections/NewsDetails";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Article } from "../api/articles/[id]";
import { GetArticleResponse } from "../api/articles/[id]";



export default function Articles() {
 const router = useRouter();
 const id = router.query.id;
 const [article, setArticle] = useState<Article>();


 useEffect(() => {
   fetch(`/api/articles/${id}`)
     .then(r => r.json())
     .then((r: GetArticleResponse) => {
       setArticle({
         ...r.article,
         publishDate: new Date(r.article.publishDate),
       })
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
       <NewsDetails
         title={article?.title || ''}
         img = {article?.cover}
         text = {article?.text || ''}
         data = {article?.publishDate?.toLocaleDateString()}
         i={article?.images}
       />
     </Stack>
     
   </Section>
 )
}

