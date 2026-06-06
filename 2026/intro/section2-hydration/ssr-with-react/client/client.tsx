import { hydrateRoot } from 'react-dom/client';
import App from '../components/App';

hydrateRoot(document.getElementById('root')!, <App />);
