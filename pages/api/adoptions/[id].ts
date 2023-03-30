import { Images } from "@/lib/components/images/Images";
import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";


export interface GetAdoptionResponse {
  readonly adoption: Adoption;
}

export interface Adoption {
  readonly id: number;
  readonly name: string;
  readonly text: string;
  readonly cover: string;
  readonly images: Images[];
}


export default function handler(req: NextApiRequest, res: NextApiResponse<GetAdoptionResponse>) { 
  const id = parseInt(req.query.id as string);
  const num_images = faker.datatype.number({min: 0, max: 5});
  const imagelist = Array.from({
    length: num_images
    },() => {
      return {
        path: faker.image.image(),
        alt: "Non lo so"
      }
    })
  res.status(200).json({
    adoption: {
      id: id,
      name: faker.name.fullName(),
      text: faker.lorem.paragraph(),
      cover: faker.image.avatar(),
      images: imagelist,
    }
  });
}