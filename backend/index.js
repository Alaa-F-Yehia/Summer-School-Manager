const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const { generateFromOllama } = require('./llamaService');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'brainwave',
  password: 'yourpassword',
  port: 5432,
});


// Your existing routes...
app.get('/api/classes', async (req, res) => {
  const result = await pool.query('SELECT * FROM classes');
  res.json(result.rows);
});

app.get('/api/teachers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM teachers');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/announcements', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM announcements');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🧠 New Ollama AI route
app.post('/api/ask', async (req, res) => {
  const { prompt } = req.body;
  const response = await generateFromOllama(prompt);
  res.json({ response });
});

app.get('/test', (req, res) => res.send('It works!'));

app.listen(4000, () => console.log('Backend running on port 4000'));
