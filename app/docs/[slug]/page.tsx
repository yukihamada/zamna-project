'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { use } from 'react';
import BusinessPlanContent from '../components/BusinessPlanContent';
import SponsorProposalContent from '../components/SponsorProposalContent';
import SitePlanContent from '../components/SitePlanContent';
import UtilitiesPlanContent from '../components/UtilitiesPlanContent';
import CoverLetterContent from '../components/CoverLetterContent';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { t } = useLanguage();
  const { slug } = use(params);

  const renderContent = () => {
    switch (slug) {
      case 'business-plan':
        return <BusinessPlanContent />;
      case 'sponsor-proposal':
        return <SponsorProposalContent />;
      case 'site-plan':
        return <SitePlanContent />;
      case 'utilities-plan':
        return <UtilitiesPlanContent />;
      case 'cover-letter':
        return <CoverLetterContent />;
      default:
        return <div className="text-gray-600">{t('docs.comingSoon')}</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <a href="/docs" className="text-blue-600 hover:text-blue-800">
          {t('docs.backToDocuments')}
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-6">{t(`docs.${slug}.title`)}</h1>

      <div className="mb-8">
        <div className="text-sm text-gray-600 mb-1">{t('docs.category')}</div>
        <div className="font-medium">{t(`docs.${slug}.category`)}</div>
      </div>

      <div className="mb-12">
        <div className="text-sm text-gray-600 mb-1">{t('docs.target')}</div>
        <div className="font-medium">{t(`docs.${slug}.target`)}</div>
      </div>

      <div className="prose max-w-none">
        {renderContent()}
      </div>
    </div>
  );
} 