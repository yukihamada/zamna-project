'use client';

import Link from 'next/link';
import { docs } from './data';
import { FileText, Search, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function DocsIndex() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get unique categories
  const categories = Array.from(new Set(docs.map((d) => d.category)));
  const categoriesEn = Array.from(new Set(docs.map((d) => d.categoryEn)));
  
  // Filter documents based on search query
  const filteredDocs = searchQuery.trim() === '' 
    ? docs 
    : docs.filter(doc => {
        const searchLower = searchQuery.toLowerCase();
        return (
          (language === 'en' 
            ? (doc.titleEn?.toLowerCase().includes(searchLower) || 
               doc.descriptionEn?.toLowerCase().includes(searchLower) ||
               doc.categoryEn?.toLowerCase().includes(searchLower))
            : (doc.title.toLowerCase().includes(searchLower) || 
               doc.description.toLowerCase().includes(searchLower) ||
               doc.category.toLowerCase().includes(searchLower)))
        );
      });
  
  // Group filtered documents by category
  const filteredCategories = Array.from(new Set(filteredDocs.map(d => d.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
            {language === 'en' ? 'Project Documentation' : 'プロジェクト資料'}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            {language === 'en' 
              ? 'Access all official documents for the ZAMNA Hawaii 2026 festival. These documents are regularly updated as the project progresses.'
              : 'ZAMNA Hawaii 2026フェスティバルの公式ドキュメントにアクセスできます。これらのドキュメントはプロジェクトの進行に伴い定期的に更新されます。'}
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={language === 'en' ? "Search documents..." : "ドキュメントを検索..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'No documents found' : 'ドキュメントが見つかりません'}
            </h3>
            <p className="text-gray-400">
              {language === 'en' 
                ? 'Try adjusting your search query or browse all documents.' 
                : '検索クエリを調整するか、すべてのドキュメントを閲覧してください。'}
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
              {language === 'en' ? 'Clear search' : '検索をクリア'}
            </button>
          </div>
        ) : (
          filteredCategories.map((cat) => {
            const categoryIndex = categories.indexOf(cat);
            const categoryEnName = categoriesEn[categoryIndex];
            
            return (
              <div key={cat} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 border-b border-white/20 pb-2 pl-1">
                  {language === 'en' ? categoryEnName : cat}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredDocs.filter((d) => d.category === cat).map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/docs/${doc.slug}`}
                      className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl flex gap-4 items-start hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-[#ea384c] to-[#d12d40] text-white rounded-xl flex items-center justify-center shadow-md">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                          {language === 'en' ? doc.titleEn : doc.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-2 flex items-center">
                          <span className="font-medium mr-1">
                            {language === 'en' ? 'Target: ' : '提出先: '}
                          </span>
                          {language === 'en' ? doc.targetEn : doc.target}
                        </p>
                        <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                          {language === 'en' ? doc.descriptionEn : doc.description}
                        </p>
                        <div className="flex items-center text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
                          <Download size={14} className="mr-1" />
                          {language === 'en' ? 'Download PDF' : 'PDFをダウンロード'}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}