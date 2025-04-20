'use client';

import Link from 'next/link';
import { docs } from './data';
import { FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function DocsIndex() {
  const categories = Array.from(new Set(docs.map((d) => d.category)));
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-12 text-center">{t('documentation.title')}</h1>
        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 border-b border-white/20 pb-2 pl-1">{cat}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {docs.filter((d) => d.category === cat).map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl flex gap-4 items-start hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-[#ea384c] group-hover:bg-[#d12d40] text-white rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:underline underline-offset-4">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-1">提出先: {doc.target}</p>
                    <p className="text-sm text-gray-400 line-clamp-2">{doc.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 