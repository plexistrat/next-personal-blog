import type { NextApiRequest, NextApiResponse } from 'next';
import dummyPosts from '../../data/dummy.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(dummyPosts);
}
