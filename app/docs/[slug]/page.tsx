'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { use } from 'react';
import Link from 'next/link';
import BusinessPlanContent from '../components/BusinessPlanContent';
import SponsorProposalContent from '../components/SponsorProposalContent';
import SitePlanContent from '../components/SitePlanContent';
import UtilitiesPlanContent from '../components/UtilitiesPlanContent';
import CoverLetterContent from '../components/CoverLetterContent';
import HTAGrantContent from '../components/HTAGrantContent';
import StaffHandbookContent from '../components/StaffHandbookContent';
import SafetyPlanContent from '../components/SafetyPlanContent';

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
      case 'hta-grant':
        return <HTAGrantContent />;
      case 'staff-handbook':
        return <StaffHandbookContent />;
      case 'safety-plan':
        return <SafetyPlanContent />;
      case 'security-roster':
        return <StaffHandbookContent />;
      case 'crowd-fire-plan':
        return <SafetyPlanContent />;
      default:
        return <div className="text-gray-600">{t('docs.comingSoon')}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href="/docs" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            {t('docs.backToDocuments')}
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">{t(`docs.${slug}.title`)}</h1>

        <div className="mb-8">
          <div className="text-sm text-gray-400 mb-1">{t('docs.category')}</div>
          <div className="font-medium text-white">{t(`docs.${slug}.category`)}</div>
        </div>

        <div className="mb-12">
          <div className="text-sm text-gray-400 mb-1">{t('docs.target')}</div>
          <div className="font-medium text-white">{t(`docs.${slug}.target`)}</div>
        </div>

        <div className="prose prose-invert max-w-none bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
} 