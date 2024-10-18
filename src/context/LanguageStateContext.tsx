'use client'

import { isBrowser } from '@/api/isBroswer';
import { createContext, useState, ReactNode, FC, useCallback, useEffect } from 'react';

export interface LanguageProps {
  country: 'KR' | 'EN' | 'JP'
}

export const LanguageStateContext = createContext({
  language: 'KR',
  onClickLanguage: (country: LanguageProps['country']) => {}
});

const localStorageLanguage: LanguageProps['country'] = isBrowser() ? localStorage.getItem('language') as 'KR' | 'EN' | 'JP' : 'KR';

export const LanguageStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageProps['country']>(() => localStorageLanguage);
  
  const onClickLanguage = useCallback((country: LanguageProps['country']) => {
    setLanguage(country);
  }, [language]);

  useEffect(() => {
    // document.body.className = theme === 'dark' ? 'dark' : 'light';
    localStorage.setItem('language', language);
  }, [language])

  return (
    <LanguageStateContext.Provider value={{ language, onClickLanguage }}>
      {children}
    </LanguageStateContext.Provider>
  );
};