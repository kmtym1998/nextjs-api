import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  if (req.method === 'POST') {
    console.log({ req });
    res.status(200).json({ name: 'POST' });
  } else if (req.method === 'GET') {
    console.log({ req });
    res.status(200).json({ name: 'GET' });
  } else {
    console.log({ req });
    res.status(200).json({ name: 'other' });
  }
}
