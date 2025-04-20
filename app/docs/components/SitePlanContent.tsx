'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import Image from 'next/image';

export default function SitePlanContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">会場レイアウト概要</h2>
        <p className="text-gray-600 mb-4">
          Kakaʻako Waterfront Park における ZAMNA Hawaii 2026 の会場レイアウトプランです。
          本図面は HCDA および消防局への提出用に作成された最終版となります。
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            注意: 本レイアウトは申請時点での計画であり、関係当局との協議により変更される可能性があります。
          </p>
        </div>
      </section>

      {/* Main Layout Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">主要エリア</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">メインステージエリア</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>ステージサイズ: 24m × 12m</li>
              <li>観客エリア: 3,000㎡</li>
              <li>FOHブース: 6m × 4m</li>
              <li>バックステージ: 200㎡</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">VIPエリア</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>総面積: 500㎡</li>
              <li>キャパシティ: 750名</li>
              <li>VIPラウンジ: 200㎡</li>
              <li>専用バー: 2箇所</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2 className="text-2xl font-bold mb-4">技術仕様</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">ステージ構造</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>メイントラス: アルミニウム製 H12m × W24m</li>
              <li>サブトラス: 4ポイント × H8m</li>
              <li>ステージデッキ: 高さ 1.8m</li>
              <li>耐風速: 20m/s</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">安全設備</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>非常口: 6箇所（幅 5m以上）</li>
              <li>消火器設置: 20箇所</li>
              <li>AED設置: 4箇所</li>
              <li>救護所: 2箇所</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Available Files */}
      <section>
        <h2 className="text-2xl font-bold mb-4">提出図面一覧</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">CADファイル（AutoCAD 2024）</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">▶</span>
                <span>ZAMNA_Hawaii_2026_SitePlan_R12.dwg</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">▶</span>
                <span>ZAMNA_Hawaii_2026_Sections_R12.dwg</span>
              </li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">PDFファイル（提出用）</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-red-600">▶</span>
                <span>ZAMNA_Hawaii_2026_FullSet_R12.pdf</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">▶</span>
                <span>ZAMNA_Hawaii_2026_Calculations_R12.pdf</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approval Process */}
      <section>
        <h2 className="text-2xl font-bold mb-4">承認プロセス</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>HCDA初回レビュー（2週間）</li>
            <li>消防局安全審査（2週間）</li>
            <li>修正対応期間（1週間）</li>
            <li>HCDA最終承認（1週間）</li>
            <li>建築確認申請（必要な場合）</li>
          </ol>
        </div>
      </section>
    </div>
  );
} 