'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { docs } from '../data';
import PDFDownloadButton from '@/app/components/PDFDownloadButton';

// Import all document components
import BusinessPlanContent from '../components/BusinessPlanContent';
import SponsorProposalContent from '../components/SponsorProposalContent';
import SitePlanContent from '../components/SitePlanContent';
import UtilitiesPlanContent from '../components/UtilitiesPlanContent';
import CoverLetterContent from '../components/CoverLetterContent';
import HTAGrantContent from '../components/HTAGrantContent';
import StaffHandbookContent from '../components/StaffHandbookContent';
import SafetyPlanContent from '../components/SafetyPlanContent';
import SecurityRosterContent from '../components/SecurityRosterContent';
import CrowdFirePlanContent from '../components/CrowdFirePlanContent';
import ContractDraftContent from '../components/ContractDraftContent';
import ArtistContractContent from '../components/ArtistContractContent';
import SponsorshipAgreementContent from '../components/SponsorshipAgreementContent';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { language } = useLanguage();
  const { slug } = use(params);

  // Find the current document from the data
  const currentDoc = docs.find(doc => doc.slug === slug);
  
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
        return <SecurityRosterContent />;
      case 'crowd-fire-plan':
        return <CrowdFirePlanContent />;
      case 'contract-draft':
        return <ContractDraftContent />;
      case 'artist-contract':
        return <ArtistContractContent />;
      case 'sponsorship-agreement':
        return <SponsorshipAgreementContent />;
      default:
        return (
          <div className="py-12 text-center">
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'Coming Soon' : '準備中'}
            </h3>
            <p className="text-gray-400">
              {language === 'en' 
                ? 'This document is currently being prepared and will be available soon.' 
                : 'このドキュメントは現在準備中で、まもなく利用可能になります。'}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 flex justify-between items-center">
          <Link 
            href="/docs" 
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={18} />
            {language === 'en' ? 'Back to Documents' : 'ドキュメント一覧に戻る'}
          </Link>
          
          <PDFDownloadButton 
            contentId="document-content" 
            fileName={`zamna-hawaii-2026-${slug}`} 
          />
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl mb-8 border border-white/10">
          <h1 className="text-3xl font-bold mb-6">
            {language === 'en' ? currentDoc?.titleEn : currentDoc?.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-400 mb-1">
                {language === 'en' ? 'Category' : 'カテゴリー'}
              </div>
              <div className="font-medium text-white">
                {language === 'en' ? currentDoc?.categoryEn : currentDoc?.category}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-400 mb-1">
                {language === 'en' ? 'Target' : '提出先'}
              </div>
              <div className="font-medium text-white">
                {language === 'en' ? currentDoc?.targetEn : currentDoc?.target}
              </div>
            </div>
          </div>
        </div>

        <div id="document-content" className="prose prose-invert max-w-none bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
          {renderContent()}
        </div>
      </div>
    </div>
  );
} 