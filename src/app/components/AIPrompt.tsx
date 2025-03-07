'use client';

import { useState } from 'react';

export default function AIPrompt() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  interface ChatGPTResponse {
    response: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    const res = await fetch('/api/chatgpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data: ChatGPTResponse = await res.json();
    setResponse(data.response);
  };

  return (
    <section className="w-full p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">AI Prompt</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="What would you like to ask the AI today?"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </section>
  );
}
