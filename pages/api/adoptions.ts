import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";


export interface GetAdoptionsResponse {
  readonly adoptions: Adoption[];
}

export interface Adoption {
  readonly name: string;
  readonly text: string;
  readonly cover: string;
}


export default function handler(req: NextApiRequest, res: NextApiResponse<GetAdoptionsResponse>) {  
  res.status(200).json({
    adoptions: getFakeAdoptions()
  });
}

export const getFakeAdoptions = (): Adoption[] => {
  return Array
    .from(Array(10))
    .map(_ => ({
      name: faker.name.fullName(),
      text: faker.lorem.paragraph(),
      cover: faker.image.avatar(),
    }))
}