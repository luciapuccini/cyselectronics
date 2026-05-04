import { createContext, useContext, useState } from 'react';
import en from '../lang/en.json';
import es from '../lang/es.json';

type Locale = 'en' | 'es';
type Messages = typeof en;

const messages: Record<Locale, Messages> = { en, es };

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Messages) => string;
}

export const LanguageContext = createContext<LanguageContextValue>({
  locale: 'es',
  setLocale: () => {},
  t: (key) => en[key],
});

export function useLanguageState(defaultLocale: Locale = 'es'): LanguageContextValue {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = (key: keyof Messages) => messages[locale][key] ?? key;
  return { locale, setLocale, t };
}

export function useTranslation() {
  return useContext(LanguageContext);
}
