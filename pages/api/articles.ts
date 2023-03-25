import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";


export interface GetArticlesResponse {
  readonly articles: Article[];
}

export interface Article {
  readonly id: number;
  readonly title: string;
  readonly text: string;
  readonly cover: string;
  readonly publishDate: Date;
}


export default function handler(req: NextApiRequest, res: NextApiResponse<GetArticlesResponse>) {  
  res.status(200).json({
    articles: getFakeArticles()
  });
}

export const getFakeArticles = (): Article[] => {
  return Array
    .from(Array(10))
    .map((_, i) => ({
      id: i + 1,
      title: faker.lorem.words(),
      text: faker.lorem.paragraph(),
      cover: faker.image.avatar(),
      publishDate: new Date(faker.date.past())
    }))
}