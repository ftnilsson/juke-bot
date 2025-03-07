import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const API_KEY = process.env.OPENAI_API_KEY;
    const { prompt } = req.body;

    // Call to ChatGPT API (replace with actual API call)
    const chatGptResponse = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        max_tokens: 100,
      }),
    });
    
    const data = await chatGptResponse.json();
    res.status(200).json({ response: data.choices[0].text });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
