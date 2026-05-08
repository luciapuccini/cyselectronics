import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { en, es } from '../content';
import type { Locale, SiteContent } from '../content';

type LanguageContextValue = {
  content: SiteContent;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('cys-locale');
    return saved === 'en' || saved === 'es' ? saved : 'en';
  });

  const setLocale = (next: Locale) => {
    localStorage.setItem('cys-locale', next);
    setLocaleState(next);
  };

  const content = locale === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ content, locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
