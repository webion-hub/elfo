import { NextApiRequest, NextApiResponse } from "next";
import { faker } from '@faker-js/faker';

const randomName = faker.name.fullName();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([{
    title: 'Mafia-Tanzania nuovo progetto',
    publishDate: new Date(),
    image: "",
    content: "Si è avviato un nuovo progetto sull'isola di Mafia in Tanzania. Elfoavventure ha finanziato la costruzione di una cisterna per il raccoglimento dell'a...",
  }, {
    title: 'Zimbabwe orfanotrofio di Mhondoro',
    publishDate: new Date(),
    url: faker.image.abstract(),
    content: "Aiutiamo l'orfanotrofio di Mhondoro a produrre olio di girasole. Con un piccolo versamento puoi aiutarci anche tu.",
  }])
}