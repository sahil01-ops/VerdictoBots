import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.post('/run-model', async (req, res) => {
  const userMessage = req.body.input;

  // Validate user message
  if (!userMessage) {
    return res.status(400).json({ error: 'No input provided' });
  }

  try {
    // Call the Rasa model
    const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sender: 'user', message: userMessage }),
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Handle empty responses from Rasa
    if (!data || data.length === 0) {
      return res.json({ response: 'No response from the model' });
    }

    // Extract the relevant response from the Rasa data
    const botMessage = data[0].text || 'No text in the response';

    // Send the model's response back to the client
    res.json({ response: botMessage });
  } catch (error) {
    console.error('Error calling the Rasa model:', error.message);
    res.status(500).json({ error: 'Failed to process the request', details: error.message });
  }
});

export default router;
