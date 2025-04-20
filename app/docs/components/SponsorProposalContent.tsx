'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import Image from 'next/image';

export default function SponsorProposalContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Hero Image */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
        <Image
          src="/festival-bg.jpg"
          alt="Festival Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">{t('sponsorProposal.title')}</h2>
        </div>
      </div>

      {/* Event Overview */}
      <section>
        <h3 className="text-2xl font-bold mb-4">{t('sponsorProposal.overview.title')}</h3>
        <p className="text-gray-600">{t('sponsorProposal.overview.description')}</p>
      </section>

      {/* Sponsorship Tiers */}
      <section>
        <h3 className="text-2xl font-bold mb-6">{t('sponsorProposal.tiers.title')}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Founding Partner */}
          <div className="border rounded-lg p-6 bg-gradient-to-b from-amber-50 to-white">
            <h4 className="text-xl font-bold mb-3">{t('sponsorProposal.tiers.founding.title')}</h4>
            <p className="text-gray-600 mb-4">{t('sponsorProposal.tiers.founding.description')}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>{t(`sponsorProposal.tiers.founding.benefits.${i}`)}</li>
              ))}
            </ul>
          </div>

          {/* Carbon-Neutral Partner */}
          <div className="border rounded-lg p-6 bg-gradient-to-b from-green-50 to-white">
            <h4 className="text-xl font-bold mb-3">{t('sponsorProposal.tiers.carbon.title')}</h4>
            <p className="text-gray-600 mb-4">{t('sponsorProposal.tiers.carbon.description')}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i}>{t(`sponsorProposal.tiers.carbon.benefits.${i}`)}</li>
              ))}
            </ul>
          </div>

          {/* Supporting Partner */}
          <div className="border rounded-lg p-6 bg-gradient-to-b from-blue-50 to-white">
            <h4 className="text-xl font-bold mb-3">{t('sponsorProposal.tiers.supporting.title')}</h4>
            <p className="text-gray-600 mb-4">{t('sponsorProposal.tiers.supporting.description')}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <li key={i}>{t(`sponsorProposal.tiers.supporting.benefits.${i}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Audience Demographics */}
      <section>
        <h3 className="text-2xl font-bold mb-6">{t('sponsorProposal.audience.title')}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">{t('sponsorProposal.audience.demographics.title')}</h4>
            <ul className="space-y-3 text-gray-600">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-32 font-medium">{t(`sponsorProposal.audience.demographics.labels.${i}`)}</span>
                  <span>{t(`sponsorProposal.audience.demographics.values.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">{t('sponsorProposal.audience.reach.title')}</h4>
            <ul className="space-y-3 text-gray-600">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-32 font-medium">{t(`sponsorProposal.audience.reach.labels.${i}`)}</span>
                  <span>{t(`sponsorProposal.audience.reach.values.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">{t('sponsorProposal.contact.title')}</h3>
        <p className="text-gray-600 mb-6">{t('sponsorProposal.contact.description')}</p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-24 font-medium">{t('sponsorProposal.contact.email.label')}</span>
            <a href="mailto:sponsor@zamna.dev" className="text-blue-600 hover:underline">
              sponsor@zamna.dev
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-24 font-medium">{t('sponsorProposal.contact.phone.label')}</span>
            <a href="tel:+81-80-1234-5678" className="text-blue-600 hover:underline">
              +81-80-1234-5678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 