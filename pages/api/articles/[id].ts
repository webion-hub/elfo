import { Images } from "@/lib/components/images/Images";
import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";



export interface GetArticleResponse {
  readonly article: Article;
}

export interface Article {
  readonly id: number;
  readonly title: string;
  readonly text: string;
  readonly cover: string;
  readonly publishDate: Date;
  readonly images: Images[];
}


export default function handler(req: NextApiRequest, res: NextApiResponse<GetArticleResponse>) {
  const id = parseInt(req.query.id as string);
  const num_images = faker.datatype.number({min: 1, max: 5});
  const imagelist = Array.from({
    length: num_images
    },() => {
      return {
        path: faker.image.image(),
        alt: "Non lo so"
      }
    })
  res.status(200).json({
    article: {
      id: id,
      title: faker.lorem.words(),
      text: faker.lorem.paragraph(),
      cover: faker.image.avatar(),
      publishDate: new Date(faker.date.past()),
      images: imagelist
    }
  });
}


