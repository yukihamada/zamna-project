'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Zamna</div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
            className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {language === 'en' ? '日本語' : 'English'}
          </button>
        </div>
      </div>
    </header>
  );
} 