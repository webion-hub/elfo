import { NextApiRequest, NextApiResponse } from "next";
import { faker } from '@faker-js/faker';

const randomName = faker.name.fullName();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([{
    title: faker.lorem.word(),
    publishDate: faker.date.month(),
    url: faker.image.abstract(),
    content: faker.lorem.paragraph(),
  }, {
    title: faker.lorem.words(),
    publishDate: faker.date.recent(),
    url: faker.image.abstract(),
    content: faker.lorem.paragraph(),
  }, {
    title: faker.lorem.words(),
    publishDate: faker.date.soon(),
    url: faker.image.abstract(),
    content: faker.lorem.paragraph(),
  }])
}