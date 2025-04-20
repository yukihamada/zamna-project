'use client';

import React, { createContext, useContext, useState } from 'react';
import { translations } from '../i18n/translations';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    // Using reduce to navigate through the object using the keys
    value = keys.reduce((obj, keyPart) => {
      if (obj === undefined) return undefined;
      return (obj as Record<string, unknown>)[keyPart];
    }, value);
    
    return (value as string) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 