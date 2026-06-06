import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);

    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    setAdvice(data.slip.advice);
    setIsLoading(false);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <h1>CSR Advice</h1>

      <p>{isLoading ? 'Loading...' : advice}</p>
      <button type='submit' disabled={isLoading}>
        Get Advice
      </button>
    </>
  );
}

export default App;
