import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";


export interface GetArticlesRequest {
  readonly page: number;
  readonly pageSize: number;
}

export interface GetArticlesResponse {
  readonly articles: Article[];
  readonly totalPages: number;
}

export interface Article {
  readonly id: number;
  readonly title: string;
  readonly text: string;
  readonly cover: string;
  readonly publishDate: Date;
}


export default function handler(req: NextApiRequest, res: NextApiResponse<GetArticlesResponse>) {
  if (!req.query.page || !req.query.pageSize) {
    res.status(400).send({} as GetArticlesResponse);
    return;
  }
  
  const page = parseInt(req.query.page as string);
  const pageSize = parseInt(req.query.pageSize as string);
  const totalArticles = 150;
  const articles = getFakeArticles(page, pageSize);

  res.status(200).json({
    articles: articles,
    totalPages: Math.ceil(totalArticles / pageSize),
  });
}

export const getFakeArticles = (page: number, pageSize: number): Article[] => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return Array
    .from(Array(endIndex - startIndex))
    .map((_, i) => ({
      id: i + 1,
      title: faker.lorem.words(),
      text: faker.lorem.paragraph(),
      cover: faker.image.avatar(),
      publishDate: new Date(faker.date.past())
    }))
}
