'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const { t } = useLanguage();

  const milestones = Array.from({ length: 8 }, (_, i) => ({
    date: t(`milestones.items.${i + 1}.date`),
    title: t(`milestones.items.${i + 1}.title`),
    description: t(`milestones.items.${i + 1}.description`),
  }));

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('milestones.title')}
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-purple-500" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Date Circle */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-[0.5625rem] md:-translate-x-[0.5625rem] w-[1.125rem] h-[1.125rem] rounded-full bg-white border-2 border-blue-500 z-10" />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] md:px-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {/* Date */}
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Calendar size={16} />
                      <span className="font-semibold">{milestone.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {milestone.title}
                      <ChevronRight size={16} className="text-blue-500" />
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600">{milestone.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 