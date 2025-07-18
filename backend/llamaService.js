const axios = require('axios');

const OLLAMA_URL = 'http://host.docker.internal:11434';

async function generateFromOllama(prompt) {
  try {
    const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
      model: 'llama3',   // or minillama or whatever name you used in Ollama
      prompt: prompt,
    });

    return response.data.response;
  } catch (err) {
    console.error('Error calling Ollama:', err.message);
    return 'Failed to generate response.';
  }
}

module.exports = { generateFromOllama };
