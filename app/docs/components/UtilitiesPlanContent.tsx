'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function UtilitiesPlanContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">設備配置概要</h2>
        <p className="text-gray-600 mb-4">
          ZAMNA Hawaii 2026 における電源設備、配線計画、衛生設備（トイレ）、廃棄物管理（ゴミステーション）の配置計画です。
          本計画は HCDA、消防局、および保健局（DOH）への提出用として作成されています。
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700">
            注意: 本計画は環境負荷低減と来場者の快適性を最優先に考慮して策定されています。
          </p>
        </div>
      </section>

      {/* Power Supply Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">電源設備計画</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">主要電源</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>メイン発電機: 500kVA × 2台（冗長構成）</li>
              <li>バックアップ発電機: 300kVA × 1台</li>
              <li>仮設キュービクル: 2基</li>
              <li>配電盤: 6基</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">電力需要内訳</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>ステージ音響・照明: 350kVA</li>
              <li>VIPエリア: 100kVA</li>
              <li>飲食出店エリア: 150kVA</li>
              <li>その他設備: 100kVA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wiring Plan */}
      <section>
        <h2 className="text-2xl font-bold mb-4">配線計画</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">ケーブルルート</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>地上配線: ケーブルプロテクター使用（全長 800m）</li>
              <li>高所配線: トラス経由（全長 200m）</li>
              <li>地中埋設: 既存管路利用（全長 100m）</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">安全対策</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>防水コネクター使用（IP65規格）</li>
              <li>漏電遮断器設置（各分岐点）</li>
              <li>接地工事実施（D種）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sanitation Facilities */}
      <section>
        <h2 className="text-2xl font-bold mb-4">衛生設備計画</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">仮設トイレ配置</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>一般エリア: 40基（男女各20基）</li>
              <li>VIPエリア: 10基（男女各5基）</li>
              <li>多目的トイレ: 6基</li>
              <li>手洗い場: 10ヶ所</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">給排水設備</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>給水タンク: 5,000L × 2基</li>
              <li>排水タンク: 10,000L × 2基</li>
              <li>浄化槽: 2基</li>
              <li>清掃スケジュール: 3時間毎</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waste Management */}
      <section>
        <h2 className="text-2xl font-bold mb-4">廃棄物管理計画</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">ゴミステーション配置</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>メインステーション: 2箇所（各20㎡）</li>
              <li>サブステーション: 8箇所（各5㎡）</li>
              <li>分別カテゴリー: 5種類</li>
              <li>リサイクルステーション: 4箇所</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">回収計画</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>収集頻度: 2時間毎</li>
              <li>予想廃棄物量: 10t</li>
              <li>リサイクル目標: 90%以上</li>
              <li>最終処分場搬出: 2回/日</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">法令遵守事項</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ul className="space-y-3 text-gray-600">
            <li>• HCDA Event Guidelines Section 4.3 (Utilities)</li>
            <li>• HFD Safety Standards Article 12</li>
            <li>• DOH Sanitation Requirements Chapter 11-11</li>
            <li>• Hawaii Administrative Rules §11-62 (Wastewater)</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 