'use client';

import Link from 'next/link'
import { CheckCircle, AlertCircle, Clock, FileText, Music, Leaf } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from './contexts/LanguageContext'


export default function Home() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/festival-bg.png"
            alt="Electronic Music Festival"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 to-blue-900/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
        </div>
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/docs" 
              className="px-8 py-3 bg-[#ea384c] text-white rounded-lg hover:bg-[#d12d40] transition-colors flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              {t('hero.docs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Project Status with Nature Icons */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('status.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">{t('status.completed')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-400" />
                  Initial project setup
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-400" />
                  Team formation
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-400" />
                  Basic documentation
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">{t('status.inProgress')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-yellow-400" />
                  Permit application preparation
                </li>
                <li className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-yellow-400" />
                  Venue selection process
                </li>
                <li className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-yellow-400" />
                  Stakeholder meetings
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-semibold text-white">{t('status.pending')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-red-400" />
                  Final permit approval
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-red-400" />
                  Vendor contracts
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-red-400" />
                  Safety inspections
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones with Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        {/* Add a subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {t('milestones.title')}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-[#ea384c] text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#ea384c]/20">
                    {num}
                  </div>
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10">
                    <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                      {t(`milestones.items.${num}.title`)}
                    </h3>
                    <p className="text-[#ea384c] font-medium mb-2">
                      {t(`milestones.items.${num}.date`)}
                    </p>
                    <p className="text-gray-100 leading-relaxed">
                      {t(`milestones.items.${num}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('team.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* CEO */}
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4" />
                <h3 className="text-2xl font-bold text-center text-white mb-1">
                  {t('team.members.ceo.name')}
                </h3>
                <p className="text-xl text-[#ea384c] text-center mb-1">
                  {t('team.members.ceo.role')}
                </p>
                <p className="text-gray-400 text-center">
                  {t('team.members.ceo.subtitle')}
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('team.members.ceo.description')}
              </p>
            </div>

            {/* Director */}
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4" />
                <h3 className="text-2xl font-bold text-center text-white mb-1">
                  {t('team.members.director.name')}
                </h3>
                <p className="text-xl text-[#ea384c] text-center mb-1">
                  {t('team.members.director.role')}
                </p>
                <p className="text-gray-400 text-center">
                  {t('team.members.director.subtitle')}
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('team.members.director.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('documentation.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">{t('documentation.essential')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="w-5 h-5 text-[#ea384c]" />
                  <span>Permit Application Guidelines</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="w-5 h-5 text-[#ea384c]" />
                  <span>Venue Requirements</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="w-5 h-5 text-[#ea384c]" />
                  <span>Safety Protocols</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">{t('documentation.updates')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="w-5 h-5 text-[#ea384c]" />
                  <span>Updated Permit Checklist</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="w-5 h-5 text-[#ea384c]" />
                  <span>New Venue Options</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="w-5 h-5 text-[#ea384c]" />
                  <span>Safety Guidelines v2.0</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
