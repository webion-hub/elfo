import { NextApiRequest, NextApiResponse } from "next";
import { faker } from '@faker-js/faker'; 
import { Movement } from "../InterfaceLedger"; 
import { GetLedgerResponse } from "../InterfaceLedger";

export default function handler(req: NextApiRequest, res: NextApiResponse<GetLedgerResponse>) {
  const year = parseInt(req.query.year as string);

  if (year < 2016 || year > 2023) {
    res.status(404).send(null!);
    return;
  }

  res.status(200).json({
    ledger: {
      year: year,
      movements: getFakeMovements(year),
    }});
  }



export const getFakeMovements = (year: number): Movement[] => {
  return Array
    .from(Array(10))
    .map(_ => ({
      id: faker.datatype.number(),
      date: faker.date.between(
        new Date(year, 0),
        new Date(year, 11)
      ),
      from: faker.lorem.paragraph(),
      reason: faker.lorem.sentence(),
      notes: faker.lorem.words(),
      type: faker.helpers.arrayElement(['in', 'out']),
      amount: faker.datatype.float(),
    }));

};
