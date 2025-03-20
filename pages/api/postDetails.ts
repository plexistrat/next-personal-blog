import type { NextApiRequest, NextApiResponse } from 'next';
import dummyPosts from '../../data/dummy.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // get id from query params
  const id = req.query.id;
  const post = dummyPosts.find((post) => post.id === Number(id));

  res.status(200).json(post);
}
