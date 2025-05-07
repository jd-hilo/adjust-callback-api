import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Log to confirm the endpoint is being hit
  console.log('Adjust callback endpoint hit!');

  // Adjust may send data as query params or form data
  const data = { ...req.body, ...req.query };

  // Log the incoming data
  console.log('Received Adjust callback:', data);

  // Respond with 200 OK
  res.status(200).send('OK');
}

// Optional: To allow POST requests with form data
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
