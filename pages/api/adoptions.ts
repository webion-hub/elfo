import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";


export interface GetAdoptionsRequest {
  readonly page: number;
  readonly pageSize: number;
}

export interface GetAdoptionsResponse {
  readonly adoptions: Adoption[];
  readonly totalPages: number;
}

export interface Adoption {
  readonly id: number;
  readonly name: string;
  readonly text: string;
  readonly cover: string;
}


export default function handler(req: NextApiRequest, res: NextApiResponse<GetAdoptionsResponse>) {  
  if (!req.query.page || !req.query.pageSize) {
    res.status(400).send({} as GetAdoptionsResponse);
    return;
  }
  
  const page = parseInt(req.query.page as string);
  const pageSize = parseInt(req.query.pageSize as string);
  const totalAdoptions = 150;
  const adoptions = getFakeAdoptions(page, pageSize);

  res.status(200).json({
    adoptions: adoptions,
    totalPages: Math.ceil(totalAdoptions / pageSize),
  });
}

export const getFakeAdoptions = (page: number, pageSize: number): Adoption[] => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return Array
    .from(Array(endIndex - startIndex))
    .map((_,i) => ({
      id: i + 1,
      name: faker.name.fullName(),
      text: faker.lorem.paragraph(),
      cover: faker.image.avatar(),
    }))
}