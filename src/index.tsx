import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { domainConfig } from './config/domain';
import { LanguageContext, useLanguageState } from './hooks/useTranslation';
import './index.css';

function Root() {
  const lang = useLanguageState(domainConfig.locale);
  return (
    <LanguageContext.Provider value={lang}>
      <App />
    </LanguageContext.Provider>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </StrictMode>
  );
}
