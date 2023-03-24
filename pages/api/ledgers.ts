import { NextApiRequest, NextApiResponse } from "next";;
import { GetLedgersResponse } from "./InterfaceLedger";


export default function handler(req: NextApiRequest, res: NextApiResponse<GetLedgersResponse>) {
  const years = [2016, 2017, 2018, 2019, 2020,2021,2022,2023];
  
  res.status(200).json({
    ledgers: years.map(y => ({
      year: y,
      movements: [],
    }))
  });
}
