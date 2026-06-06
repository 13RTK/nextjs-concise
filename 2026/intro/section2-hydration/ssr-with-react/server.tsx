import express from 'express';
import type { Response } from 'express';
import { readFile } from 'fs/promises';
import App from './components/App';
import { renderToString } from 'react-dom/server';

const app = express();

async function getAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();

  return data.slip.advice;
}

const htmlTemplate = await readFile('./templates/index.html', 'utf-8');
const jsScript = await readFile('./templates/client.js', 'utf-8');

app.get('/', async (_req, res: Response) => {
  // Render react component to HTML
  const renderedReactComponent = renderToString(<App />);

  // Replace %CONTENT% with rendered react component
  const html = htmlTemplate.replace('%CONTENT%', renderedReactComponent);

  res.send(html);
});

app.get('/client.js', (_req, res: Response) => {
  res.contentType('application/javascript').send(jsScript);
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
