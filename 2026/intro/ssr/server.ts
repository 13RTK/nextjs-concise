import type { Request, Response } from 'express';
import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();

const htmlTemplate = await readFile('./pages/index.html', 'utf-8');
const scriptFile = await readFile('./pages/main.js', 'utf-8');

async function getAdvice() {
  const advice = await fetch('https://api.adviceslip.com/advice');
  const data = await advice.json();

  return data.slip.advice;
}

app.get('/', async (_req: Request, res: Response) => {
  const advice = await getAdvice();

  const renderedHTML = htmlTemplate.replace('%ADVICE%', advice);

  res.send(renderedHTML);
});

app.get('/main.js', (_req: Request, res: Response) => {
  res.send(scriptFile);
});

app.listen(3000, () => console.log('listening on port http://localhost:3000'));
