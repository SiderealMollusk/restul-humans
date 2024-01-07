import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const startupTime = Date.now(); // Get the current timestamp

    // Send the startup time data as the response
    res.status(200).json({ startupTime });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch startup time' });
  }
};

export default handler;