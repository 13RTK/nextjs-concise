import express from 'express';
import type { Response } from 'express';
import { readFile } from 'fs/promises';

const app = express();

async function getAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();

  return data.slip.advice;
}

const htmlTemplate = await readFile('./templates/index.html', 'utf-8');
const jsScript = await readFile('./templates/main.js', 'utf-8');

app.get('/', async (_req, res: Response) => {
  const advice = await getAdvice();
  const renderedHTML = htmlTemplate.replace('%ADVICE%', advice);

  res.send(renderedHTML);
});

app.get('/main.js', (_req, res) => {
  res.send(jsScript);
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
