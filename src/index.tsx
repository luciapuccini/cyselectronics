import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LanguageContext, useLanguageState } from './hooks/useTranslation';

function Root() {
  const lang = useLanguageState('es');
  return (
    <LanguageContext.Provider value={lang}>
      <App />
    </LanguageContext.Provider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
