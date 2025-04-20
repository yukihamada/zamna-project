'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import BusinessPlanContent from '../components/BusinessPlanContent';
import SponsorProposalContent from '../components/SponsorProposalContent';

export default function Page({ params }: { params: { slug: string } }) {
  const { t, toggleLanguage, currentLanguage } = useLanguage();

  const renderContent = () => {
    switch (params.slug) {
      case 'business-plan':
        return <BusinessPlanContent />;
      case 'sponsor-proposal':
        return <SponsorProposalContent />;
      default:
        return <div className="text-gray-600">{t('docs.comingSoon')}</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <a href="/docs" className="text-blue-600 hover:text-blue-800">
          {t('docs.backToDocuments')}
        </a>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1 rounded border hover:bg-gray-50"
        >
          <Globe size={16} />
          <span>{currentLanguage === 'en' ? '日本語' : 'English'}</span>
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6">{t(`docs.${params.slug}.title`)}</h1>

      <div className="mb-8">
        <div className="text-sm text-gray-600 mb-1">{t('docs.category')}</div>
        <div className="font-medium">{t(`docs.${params.slug}.category`)}</div>
      </div>

      <div className="mb-12">
        <div className="text-sm text-gray-600 mb-1">{t('docs.target')}</div>
        <div className="font-medium">{t(`docs.${params.slug}.target`)}</div>
      </div>

      <div className="prose max-w-none">
        {renderContent()}
      </div>
    </div>
  );
} 