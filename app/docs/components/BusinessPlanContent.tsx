'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function BusinessPlanContent() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          {t('docs.businessPlan.sections.executiveSummary.title')}
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>
            <strong>{t('docs.businessPlan.sections.executiveSummary.purpose')}:</strong>{' '}
            {t('docs.businessPlan.sections.executiveSummary.purposeText')}
          </li>
          <li>
            <strong>{t('docs.businessPlan.sections.executiveSummary.venue')}:</strong>{' '}
            {t('docs.businessPlan.sections.executiveSummary.venueText')}
          </li>
          <li>
            <strong>{t('docs.businessPlan.sections.executiveSummary.date')}:</strong>{' '}
            {t('docs.businessPlan.sections.executiveSummary.dateText')}
          </li>
          <li>
            <strong>{t('docs.businessPlan.sections.executiveSummary.concept')}:</strong>{' '}
            <em>{t('docs.businessPlan.sections.executiveSummary.conceptText')}</em>
          </li>
          <li>
            <strong>{t('docs.businessPlan.sections.executiveSummary.profitTarget')}:</strong>
            <ul className="list-none pl-6 mt-2">
              <li>{t('docs.businessPlan.sections.executiveSummary.basePlan')}</li>
              <li>{t('docs.businessPlan.sections.executiveSummary.enhancedPlan')}</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          {t('docs.businessPlan.sections.kpi.title')}
        </h2>
        <div className="bg-white/5 p-6 rounded-lg">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.attendance')}</td>
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.attendanceValue')}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.ticketPrice')}</td>
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.ticketPriceValue')}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.fbSpend')}</td>
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.fbSpendValue')}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.productionBudget')}</td>
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.productionBudgetValue')}</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.targetRoi')}</td>
                <td className="py-2 text-gray-300">{t('docs.businessPlan.sections.kpi.targetRoiValue')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">3. P/L サマリー（USD）</h2>
        <div className="bg-white/5 p-6 rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-gray-300">収支科目</th>
                <th className="text-right py-2 text-gray-300">Base</th>
                <th className="text-right py-2 text-gray-300">Enhanced</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">GA チケット</td>
                <td className="text-right py-2 text-gray-300">720,000</td>
                <td className="text-right py-2 text-gray-300">720,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">VIP チケット</td>
                <td className="text-right py-2 text-gray-300">300,000</td>
                <td className="text-right py-2 text-gray-300">300,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Tables / Cabanas</td>
                <td className="text-right py-2 text-gray-300">125,000</td>
                <td className="text-right py-2 text-gray-300">125,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">スポンサー収入</td>
                <td className="text-right py-2 text-gray-300">100,000</td>
                <td className="text-right py-2 text-gray-300">100,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">F&B シェア</td>
                <td className="text-right py-2 text-gray-300">40,000</td>
                <td className="text-right py-2 text-gray-300">160,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Merch / その他</td>
                <td className="text-right py-2 text-gray-300">35,000</td>
                <td className="text-right py-2 text-gray-300">411,000</td>
              </tr>
              <tr className="border-b border-gray-700 font-bold">
                <td className="py-2 text-white">総収入</td>
                <td className="text-right py-2 text-white">1,320,000</td>
                <td className="text-right py-2 text-white">1,816,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">ステージ・技術</td>
                <td className="text-right py-2 text-gray-300">405,000</td>
                <td className="text-right py-2 text-gray-300">344,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">アーティスト</td>
                <td className="text-right py-2 text-gray-300">240,000</td>
                <td className="text-right py-2 text-gray-300">240,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">運営人件費</td>
                <td className="text-right py-2 text-gray-300">60,000</td>
                <td className="text-right py-2 text-gray-300">60,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">許可・保険</td>
                <td className="text-right py-2 text-gray-300">30,000</td>
                <td className="text-right py-2 text-gray-300">30,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">マーケティング</td>
                <td className="text-right py-2 text-gray-300">70,000</td>
                <td className="text-right py-2 text-gray-300">50,000</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">予備・追加演出</td>
                <td className="text-right py-2 text-gray-300">85,000</td>
                <td className="text-right py-2 text-gray-300">119,000</td>
              </tr>
              <tr className="border-b border-gray-700 font-bold">
                <td className="py-2 text-white">総コスト</td>
                <td className="text-right py-2 text-white">890,000</td>
                <td className="text-right py-2 text-white">843,000</td>
              </tr>
              <tr className="border-b border-gray-700 font-bold">
                <td className="py-2 text-white">営業利益</td>
                <td className="text-right py-2 text-white">430,000</td>
                <td className="text-right py-2 text-white">973,000</td>
              </tr>
              <tr className="font-bold">
                <td className="py-2 text-white">利益率</td>
                <td className="text-right py-2 text-white">32%</td>
                <td className="text-right py-2 text-white">53%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">4. 追加収益ドライバー（Enhanced）</h2>
        <div className="bg-white/5 p-6 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-gray-300">施策</th>
                <th className="text-right py-2 text-gray-300">追加純益 (k USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Sunset Yacht VIP Arrival</td>
                <td className="text-right py-2 text-gray-300">55</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Beach Detox Brunch</td>
                <td className="text-right py-2 text-gray-300">24</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Silent-Disco After-Hours</td>
                <td className="text-right py-2 text-gray-300">40</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">PPV グローバル配信</td>
                <td className="text-right py-2 text-gray-300">65</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">NFT &quot;Island Pass&quot;</td>
                <td className="text-right py-2 text-gray-300">55</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Carbon-Neutral Sponsor Tier</td>
                <td className="text-right py-2 text-gray-300">62</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Craft Village & その他</td>
                <td className="text-right py-2 text-gray-300">115</td>
              </tr>
              <tr className="font-bold">
                <td className="py-2 text-white">合計</td>
                <td className="text-right py-2 text-white">416</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">5. コスト効率化アクション</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>フル LED ウォール → ファブリック＋プロジェクションへ置換 <strong>-61 k</strong></li>
          <li>警備 30% を訓練済みボランティアに置換 <strong>-12 k</strong></li>
          <li>LED／PA 機材を 6 か月前早期発注 <strong>-15% レンタル費</strong></li>
          <li>保険を年間包括契約へ集約 <strong>-5 k</strong></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">6. リスク & 対策</h2>
        <div className="bg-white/5 p-6 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-gray-300">リスク</th>
                <th className="text-left py-2 text-gray-300">対策</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">悪天候・ハリケーン</td>
                <td className="py-2 text-gray-300">予備日設定／天候保険／Force-majeure 条項</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">チケット売れ残り</td>
                <td className="py-2 text-gray-300">50% 売上で損益分岐・段階値上げモデル</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">申請遅延</td>
                <td className="py-2 text-gray-300">HCDA 事前協議・専任 PM を配置</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-300">騒音クレーム</td>
                <td className="py-2 text-gray-300">22 時完全消音＋ SPL モニタリング</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
} 